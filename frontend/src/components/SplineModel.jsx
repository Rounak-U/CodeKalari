"use client"; // ensures this runs only on the client side
import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import DarkVeil from './ui/DarkVeil';
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
    <div style={{ width: "100%", height: "100vh", position: "relative", backgroundColor: "#000000ff" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <Spline scene="https://prod.spline.design/kjVjvsRXVMk-LaVx/scene.splinecode" />
      </div>
      <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none", opacity: 0.14 }}>
        <DarkVeil hueShift={0} noiseIntensity={0.04} scanlineIntensity={0.06} scanlineFrequency={7.0} warpAmount={0.01} speed={0.45} />
      </div>
      {/* MLH Trust Badge */}
      <a id="mlh-trust-badge" style={{ display: 'block', maxWidth: '100px', minWidth: '60px', position: 'fixed', right: '50px', top: '0', width: '10%', zIndex: 10000 }} href="https://mlh.io/apac?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white" target="_blank" rel="noreferrer">
        <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg" alt="Major League Hacking 2026 Hackathon Season" style={{ width: '100%' }} />
      </a>
      {/* Devfolio Apply Button (replaces Register Now) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          top: '35%',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          pointerEvents: 'none'
        }}
      >
        <div style={{ pointerEvents: 'auto', display: 'block' }}>
          <div
            className="apply-button"
            data-hackathon-slug="code-kalari"
            data-button-theme="dark-inverted"
          />
          {showDevfolioFallback && (
            <a
              href="https://code-kalari.devfolio.co/overview"
              target="_blank"
              rel="noreferrer"
              className="register-btn"
              style={{ display: 'inline-block', marginTop: 12, textAlign: 'center', width: 312 }}
            >
              Apply with Devfolio
            </a>
          )}
        </div>
      </div>
      <button className="spline-action-button">
        <h2>IIIT KOTTAYAM</h2>
      </button>
    </div>
  );
}
