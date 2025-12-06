"use client"; // ensures this runs only on the client side
import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import Apply from "../assets/Apply1.png";
import IIITK from "../assets/IIITK2.png"; 
import './SplineModel.css';
export default function SplineIframe() {
  const [showDevfolioFallback, setShowDevfolioFallback] = useState(false);
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
  // Create star particles effect for space theme
  useEffect(() => {
    const container = document.querySelector('.spline-model-container');
    if (!container) return;
    
    let starsContainer = container.querySelector('.stars-container-spline');
    if (starsContainer) return; // Already created
    
    starsContainer = document.createElement('div');
    starsContainer.className = 'stars-container-spline';
    starsContainer.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1;';
    
    // Generate 100 stars with random positions, sizes, and animation durations
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star-spline';
      
      const size = Math.random() * 2.5 + 0.8; // 0.8-3.3px
      const x = Math.random() * 100; // 0-100%
      const y = Math.random() * 100; // 0-100%
      const duration = Math.random() * 3 + 2; // 2-5s
      const delay = Math.random() * 5; // 0-5s
      
      star.style.cssText = `
        position: absolute;
        background: white;
        border-radius: 50%;
        width: ${size}px;
        height: ${size}px;
        left: ${x}%;
        top: ${y}%;
        animation: twinkle-spline ${duration}s linear ${delay}s infinite;
      `;
      
      starsContainer.appendChild(star);
    }
    
    container.insertBefore(starsContainer, container.firstChild);
  }, []);

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
          CODE KALARI
        </h1>
      </div>
      {/* Spline 3D Model - on top of text */}
      <div style={{ position: "absolute", inset: 0, zIndex: 3, opacity: 0.85 }}>
        <Spline scene="https://prod.spline.design/kjVjvsRXVMk-LaVx/scene.splinecode" />
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
        className="spline-apply-container"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          top: '35%',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        <div style={{ pointerEvents: 'auto', display: 'block', marginLeft: '2%', marginTop: '21%'}}>
          <a href="https://code-kalari.devfolio.co/overview" target="_blank" rel="noreferrer">
          <img src={typeof Apply === 'string' ? Apply : Apply.src || Apply.default || Apply} alt="Apply" style={{borderRadius: '8px', height: '40px', maxWidth: '100%'}} />
          </a>
        </div>
      </div>
      <div className="spline-action-button">
      </div>
    </div>
  );
}
