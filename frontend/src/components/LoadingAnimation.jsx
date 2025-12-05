"use client";
import { useEffect, useState } from "react";
import "./LoadingAnimation.css";

export default function LoadingAnimation({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Exit after 3 seconds
    const exitTimeout = setTimeout(() => {
      setIsExiting(true);
      
      // Call onComplete after fade out animation
      setTimeout(() => {
        onComplete?.();
      }, 500);
    }, 3000);

    return () => {
      clearTimeout(exitTimeout);
    };
  }, [onComplete]);

  return (
    <div className={`loading-container ${isExiting ? 'exiting' : ''}`}>
      {/* Purple gradient glows */}
      <div className="loading-glow-1" />
      <div className="loading-glow-2" />
      
      {/* Text cycling - pure CSS */}
      <div className="loading-text-wrapper">
        <div className="loading-text-cycle">
          <span className="loading-text-item">CODE KALARI</span>
          <span className="loading-text-item">कोड कलारी</span>
          <span className="loading-text-item">കോഡ് കളരി</span>
          <span className="loading-text-item">కోడ్ కళారి</span>
          <span className="loading-text-item">கோட் களரி</span>
          <span className="loading-text-item">ಕೋಡ್ ಕಳರಿ</span>
          <span className="loading-text-item">কোড কালারি</span>
          <span className="loading-text-item">કોડ કલારી</span>
          <span className="loading-text-item">ਕੋਡ ਕਲਾਰੀ</span>
          <span className="loading-text-item">କୋଡ୍ କଳାରୀ</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="loading-progress-container">
        <div className="loading-progress-bar" />
      </div>

      {/* Corner decorations */}
      <div className="loading-corner loading-corner-tl" />
      <div className="loading-corner loading-corner-tr" />
      <div className="loading-corner loading-corner-bl" />
      <div className="loading-corner loading-corner-br" />
    </div>
  );
}
