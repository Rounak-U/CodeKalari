"use client"; // ensures this runs only on the client side
import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import DarkVeil from './ui/DarkVeil';
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
  return (
    <div className="spline-model-container" style={{ width: "100%", height: "100vh", position: "relative", backgroundColor: "#000000ff" }}>
      {/* Dark Veil - lowest layer */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", opacity: 0.8}}>
        <DarkVeil hueShift={0} noiseIntensity={0.04} scanlineIntensity={0.06} scanlineFrequency={7.0} warpAmount={0.01} speed={0.45} />
      </div>
      {/* Code Kalari text - behind Spline modal but above DarkVeil */}
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
            color: "transparent",
            WebkitTextStroke: "2px white",
            letterSpacing: "3.2rem",
            textShadow: `
              2px 2px 0px rgba(0, 0, 0, 0.15),
              3px 3px 0px rgba(0, 0, 0, 0.1),
              4px 4px 0px rgba(0, 0, 0, 0.08),
              5px 5px 8px rgba(0, 0, 0, 0.25)
            `,
            filter: 'drop-shadow(0px 8px 12px rgba(255, 255, 255, 0.3))',
            whiteSpace: "nowrap",
          }}
        >
          CODE KALARI
        </h1>
      </div>
      {/* Spline 3D Model - on top of text */}
      <div style={{ position: "absolute", inset: 0, zIndex: 3 }}>
        <Spline scene="https://prod.spline.design/kjVjvsRXVMk-LaVx/scene.splinecode" />
      </div>
      
      {/* IIITK Badge */}
      <a id="iiitk-badge" style={{ display: 'block', maxWidth: '800px', height: '1000px', minWidth: '120px', position: 'relative', top: '0', width: '12%', zIndex: 10000 }} href="https://www.iiitkottayam.ac.in/?ref=cybrhome#!/home" target="_blank" rel="noreferrer">
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
        <div style={{ pointerEvents: 'auto', display: 'block', marginLeft: '2%', marginTop: '14%'}}>
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
