"use client";
import { useEffect, useState, useRef } from "react";
import "./LoadingAnimation.css";

const fonts = [
  "'Courier New', monospace",
  "'Times New Roman', serif",
  "'Impact', sans-serif",
  "'Georgia', serif",
  "'Trebuchet MS', sans-serif",
  "'Lucida Console', monospace",
  "'Palatino Linotype', serif",
  "'Arial Black', sans-serif",
  "'Verdana', sans-serif",
  "'Garamond', serif",
  "'Six Caps', sans-serif",
  "'Arial', sans-serif",
  "'Helvetica', sans-serif",
];

const particleData = [
  { left: 5, delay: 0.1, duration: 2.5 },
  { left: 15, delay: 0.3, duration: 3.2 },
  { left: 25, delay: 0.5, duration: 2.8 },
  { left: 35, delay: 0.7, duration: 3.5 },
  { left: 45, delay: 0.2, duration: 4.0 },
  { left: 55, delay: 0.9, duration: 2.6 },
  { left: 65, delay: 0.4, duration: 3.8 },
  { left: 75, delay: 0.6, duration: 3.0 },
  { left: 85, delay: 0.8, duration: 2.9 },
  { left: 95, delay: 1.0, duration: 3.3 },
  { left: 10, delay: 1.2, duration: 4.2 },
  { left: 20, delay: 1.4, duration: 2.7 },
  { left: 30, delay: 1.1, duration: 3.6 },
  { left: 40, delay: 0.15, duration: 3.1 },
  { left: 50, delay: 1.3, duration: 4.5 },
  { left: 60, delay: 0.25, duration: 2.4 },
  { left: 70, delay: 1.5, duration: 3.4 },
  { left: 80, delay: 0.35, duration: 2.3 },
  { left: 90, delay: 1.6, duration: 3.7 },
  { left: 100, delay: 0.45, duration: 4.1 },
];

export default function LoadingAnimation({ onComplete }) {
  const [currentFontIndex, setCurrentFontIndex] = useState(0);
  const [scale, setScale] = useState(0.95);
  const [opacity, setOpacity] = useState(1);
  const [isExiting, setIsExiting] = useState(false);
  const containerRef = useRef(null);

  const text = "CODE KALARI";

  useEffect(() => {
    let fontInterval;
    let scaleInterval;

    fontInterval = setInterval(() => {
      setCurrentFontIndex((prev) => (prev + 1) % fonts.length);
    }, 150);

    const startTime = Date.now();
    const duration = 2800;
    
    scaleInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      const newScale = 0.95 + (0.05 * easeOutExpo);
      setScale(newScale);

      if (progress >= 1) {
        clearInterval(scaleInterval);
      }
    }, 16);

    const exitTimeout = setTimeout(() => {
      setIsExiting(true);
      clearInterval(fontInterval);

      let exitProgress = 0;
      const exitInterval = setInterval(() => {
        exitProgress += 0.03;
        setOpacity(1 - exitProgress);
        
        if (exitProgress >= 1) {
          clearInterval(exitInterval);
          onComplete?.();
        }
      }, 16);
    }, 3000);

    return () => {
      clearInterval(fontInterval);
      clearInterval(scaleInterval);
      clearTimeout(exitTimeout);
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className={`loading-container ${isExiting ? 'exiting' : ''}`}
      style={{ opacity }}
    >
      <div className="loading-glow-1" />
      <div className="loading-glow-2" />
      
      <div className="loading-bg-grid" />
      <div className="loading-bg-noise" />
      <div className="loading-scanlines" />
      
      <div className="loading-particles">
        {particleData.map((particle, i) => (
          <div 
            key={i} 
            className="loading-particle"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div 
        className="loading-text-wrapper"
        style={{
          transform: `scale(${scale})`,
        }}
      >
        <h1 
          className="loading-text loading-text-main"
          style={{
            fontFamily: fonts[currentFontIndex],
          }}
        >
          {text}
        </h1>
      </div>

      <div className="loading-progress-container">
        <div className="loading-progress-bar" />
      </div>

      <div className="loading-corner loading-corner-tl" />
      <div className="loading-corner loading-corner-tr" />
      <div className="loading-corner loading-corner-bl" />
      <div className="loading-corner loading-corner-br" />
    </div>
  );
}
