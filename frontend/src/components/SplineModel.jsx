"use client"; // ensures this runs only on the client side
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
// Dynamically import Spline so we don't include it in the initial bundle and can control when it loads
const DynamicSpline = dynamic(() => import('@splinetool/react-spline').then(m => m.default), {
  ssr: false,
  loading: () => <div className="spline-loading-placeholder" aria-hidden />,
});
import Apply from "../assets/Apply1.png";
import IIITK from "../assets/IIITK2.png";
import RobotImage from "../assets/Rob.png";
import './SplineModel.css';
export default function SplineIframe() {
  const [showDevfolioFallback, setShowDevfolioFallback] = useState(false);
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);
  const [lowEndFallback, setLowEndFallback] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  // track whether the spline is in the viewport (visible) so we can unmount/halt when it isn't
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const hideTimer = useRef(null);
  useEffect(() => {
    const existing = document.getElementById('devfolio-sdk');
    if (!existing) {
      const script = document.createElement('script');
      script.id = 'devfolio-sdk';
      script.src = 'https://apply.devfolio.co/v2/sdk.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
    const timer = setTimeout(() => {
      const btn = document.querySelector('.apply-button');
      if (btn && btn.childElementCount === 0) {
        setShowDevfolioFallback(true);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // decide whether to load Spline based on device capability & viewport exposure
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isLowEnd = () => {
      try {
        // navigator.deviceMemory is an approximation of RAM in GB (may be undefined)
        const mem = navigator.deviceMemory || 4;
        const cores = navigator.hardwareConcurrency || 4;
        const connection = navigator.connection || {};
        const saveData = connection.saveData;
        const effectiveType = (connection.effectiveType || '').toLowerCase();

        // Heuristic: low memory (<2GB), low cores (<=2), or saveData enabled or very slow connection -> low-end
        // Also respect prefers-reduced-motion to avoid expensive renders
        const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        // Add explicit mobile check as low-end: narrow widths should show the image fallback
        const mobileMatch = window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
        if (mobileMatch) return true;
        if (mem < 2 || cores <= 2 || saveData || /2g|slow-2g/.test(effectiveType) || prefersReducedMotion) return true;
      } catch (err) {
        return false;
      }
      return false;
    };

    // IntersectionObserver to only load Spline when in viewport
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          // visible: clear any pending hide timer
          if (hideTimer.current) {
            clearTimeout(hideTimer.current);
            hideTimer.current = null;
          }
          setIsVisible(true);
          // if it's a low-end device, render fallback placeholder
          if (isLowEnd()) {
            setLowEndFallback(true);
            setShouldLoadSpline(false);
          } else {
            // Defer loading to idle moment - only need to set once
            if (!shouldLoadSpline) {
              if (window.requestIdleCallback) {
                window.requestIdleCallback(() => setShouldLoadSpline(true));
              } else {
                setTimeout(() => setShouldLoadSpline(true), 300);
              }
            }
          }
        } else {
          // Not visible: schedule a small delay before hiding to avoid rapid mount/unmounts
          if (hideTimer.current) clearTimeout(hideTimer.current);
          hideTimer.current = setTimeout(() => {
            setIsVisible(false);
          }, 500);
        }
      }
    }, { rootMargin: '200px' });

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
        hideTimer.current = null;
      }
    };
  }, []);

  // track mobile viewport state for dynamic updates
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handler = () => setIsMobileView(window.matchMedia('(max-width: 768px)').matches);
    handler();
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  // Create star particles effect for space theme
  // useEffect(() => {
  //   const container = document.querySelector('.spline-model-container');
  //   if (!container) return;

  //   let starsContainer = container.querySelector('.stars-container-spline');
  //   if (starsContainer) return; // Already created

  //   starsContainer = document.createElement('div');
  //   starsContainer.className = 'stars-container-spline';
  //   starsContainer.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1;';

  //   // Generate 100 stars with random positions, sizes, and animation durations
  //   for (let i = 0; i < 100; i++) {
  //     const star = document.createElement('div');
  //     star.className = 'star-spline';

  //     const size = Math.random() * 2.5 + 0.8; // 0.8-3.3px
  //     const x = Math.random() * 100; // 0-100%
  //     const y = Math.random() * 100; // 0-100%
  //     const duration = Math.random() * 3 + 2; // 2-5s
  //     const delay = Math.random() * 5; // 0-5s

  //     star.style.cssText = `
  //       position: absolute;
  //       background: white;
  //       border-radius: 50%;
  //       width: ${size}px;
  //       height: ${size}px;
  //       left: ${x}%;
  //       top: ${y}%;
  //       animation: twinkle-spline ${duration}s linear ${delay}s infinite;
  //     `;

  //     starsContainer.appendChild(star);
  //   }

  //   container.insertBefore(starsContainer, container.firstChild);
  // }, []);

  return (
    <div className="spline-model-container" style={{ width: "100%", height: "100vh", position: "relative", backgroundColor: "#000000" }}>
      {/* Code Kalari text - behind Spline model */}
      <div
        className="spline-text-container"
        style={{
          position: "absolute",
          inset: 0,
          marginTop: '-20%',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <h1
          id="spline-code-kalari-text"
          style={{
            fontSize: "clamp(60px, 30vw, 320px)",
            fontWeight: 400,
            fontFamily: 'Six Caps',
            color: "#ffffff",
            letterSpacing: "3.2rem",
            textShadow: "0 0 40px rgba(255, 255, 255, 0.4), 0 0 80px rgba(255, 255, 255, 0.2)",
            whiteSpace: "nowrap",
            opacity: 0.95,
          }}
        >
          <span className="code-text">CODE</span>
          <span className="space-separator"> </span>
          <span className="kalari-text">KALARI</span>
        </h1>
      </div>
      {/* Spline 3D Model - on top of text */}
      <div ref={containerRef} style={{ position: "absolute", inset: 0, zIndex: 3 }}>
        {(isMobileView || lowEndFallback) ? (
          // On mobile / low-end devices show a static image that occupies the same space as the model
          <img
            className="spline-mobile-image"
            src={typeof RobotImage === 'string' ? RobotImage : RobotImage.src || RobotImage.default || RobotImage}
            alt="Code Kalari robot"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (shouldLoadSpline && isVisible) ? (
          <div className="spline-scene-wrapper" style={{ width: '100%', height: '100%' }}>
            <DynamicSpline scene="https://prod.spline.design/kjVjvsRXVMk-LaVx/scene.splinecode" />
          </div>
        ) : (
          // lightweight fallback for low-end devices / when Spline isn't loaded yet
          <div
            aria-hidden
            className="spline-static-fallback"
            style={{
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(24,0,36,1) 50%, rgba(60,10,40,1) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        )}
      </div>

      {/* Overlay to hide Spline watermark at bottom-right */}
      <div style={{
        position: "absolute",
        bottom: 6,
        right: 0,
        width: "200px",
        height: "60px",
        backgroundColor: "#000000",
        zIndex: 9999,
        pointerEvents: "none"
      }} />

      {/* IIITK Badge */}
      <a id="iiitk-badge" style={{ display: 'block', maxWidth: '160px', height: '100px', minWidth: '120px', position: 'relative', top: '0', width: '12%', zIndex: 10000 }} href="https://www.iiitkottayam.ac.in/?ref=cybrhome#!/home" target="_blank" rel="noreferrer">
        <img src={typeof IIITK === 'string' ? IIITK : IIITK.src || IIITK.default || IIITK} alt="IIIT Kottayam" style={{ width: '100%' }} />
      </a>
      {/* <a id="mlh-trust-badge" style={{ display: 'block', maxWidth: '100px', minWidth: '60px', position: 'fixed', right: '50px', top: '0', width: '10%', zIndex: 10000 }} href="https://mlh.io/apac?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white" target="_blank" rel="noreferrer">
        <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg" alt="Major League Hacking 2026 Hackathon Season" style={{ width: '100%' }} />
      </a> */}
      {/* Devfolio Apply Button (replaces Register Now) */}
      <div
        className={`spline-apply-container ${isMobileView ? 'spline-apply-mobile' : 'spline-apply-desktop'}`}
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        <div className="spline-apply-inner" style={{ pointerEvents: 'auto', display: 'block' }}>
          <a href="https://code-kalari.devfolio.co/overview" target="_blank" rel="noreferrer">
            <img src={typeof Apply === 'string' ? Apply : Apply.src || Apply.default || Apply} alt="Apply" style={{ borderRadius: '8px', height: '40px', maxWidth: '100%' }} />
          </a>
        </div>
      </div>
      <div className="spline-action-button">
      </div>
    </div>
  );
}
