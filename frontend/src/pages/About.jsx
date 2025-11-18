"use client";
import { useEffect, useState } from "react";
import MagicBento from "@/components/ui/MagicBento";
import { Filter } from "lucide-react";
import Image from "next/image";
import IIITMapImage from "@/assets/IIITMap.png";
import "./About.css";

const LAUNCH_TS = new Date("2026-01-17T09:00:00+05:30").getTime();

function LaunchCountdown({ targetTs = LAUNCH_TS }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, targetTs - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetTs]);

  // Modern glassmorphism styles matching theme (no hover effects)
  const cardStyle = {
    position: "relative",
    padding: "20px 24px",
    borderRadius: 20,
    background:
      "linear-gradient(135deg, rgba(40, 20, 50, 0.4), rgba(0, 38, 128, 0.25), rgba(132, 0, 255, 0.25))",
    border: "1px solid rgba(132, 0, 255, 0.25)",
    boxShadow:
      "0 10px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(132, 0, 255, 0.08) inset",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  };

  const chipStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 16px",
    borderRadius: 9999,
    background:
      "linear-gradient(135deg, rgba(132, 0, 255, 0.2), rgba(0, 0, 0, 0.6))",
    border: "1px solid rgba(132, 0, 255, 0.35)",
    color: "#fff",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    boxShadow: "0 4px 12px rgba(132, 0, 255, 0.15)",
  };

  const rowStyle = {
    display: "flex",
    alignItems: "stretch",
    gap: 14,
  };

  const boxStyle = {
    minWidth: 90,
    padding: "16px 18px",
    borderRadius: 16,
    background:
      "linear-gradient(135deg, rgba(6, 0, 16, 0.8), rgba(40, 20, 50, 0.5))",
    border: "1px solid rgba(132, 0, 255, 0.2)",
    boxShadow:
      "inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 4px 12px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
  };

  const numStyle = {
    fontSize: "3rem",
    fontWeight: "200",
    fontFamily: "Poppins",
    color: "rgba(245, 239, 230, 1)",
    color: "transparent",
    WebkitTextStroke: "2px white",
    letterSpacing: "0.5rem",
    // background:
    //   "linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%)",
    // WebkitBackgroundClip: "text",
    // WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const labelStyle = {
    fontSize: 11,
    color: "rgba(255, 255, 255, 0.7)",
    marginTop: 8,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    fontWeight: 500,
  };

  const sepStyle = {
    alignSelf: "center",
    color: "rgba(132, 0, 255, 0.6)",
    fontSize: 24,
    fontWeight: 700,
    padding: "0 4px",
  };

  return (
    <div
      className="launch-countdown-container"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div style={cardStyle}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: 14,
          }}
        >
          {/* <div style={chipStyle}>Launching in</div> */}
          <div className="countdown-boxes" style={rowStyle}>
            <div style={boxStyle}>
              <div className="num-style" style={numStyle}>
                {String(timeLeft.days).padStart(2, "0")}
              </div>
              <div className="label-style" style={labelStyle}>Days</div>
            </div>
            <div className="sep-style" style={sepStyle}>:</div>
            <div style={boxStyle}>
              <div className="num-style" style={numStyle}>
                {String(timeLeft.hours).padStart(2, "0")}
              </div>
              <div className="label-style" style={labelStyle}>Hours</div>
            </div>
            <div className="sep-style" style={sepStyle}>:</div>
            <div style={boxStyle}>
              <div className="num-style" style={numStyle}>
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>
              <div className="label-style" style={labelStyle}>Minutes</div>
            </div>
            <div className="sep-style" style={sepStyle}>:</div>
            <div style={boxStyle}>
              <div className="num-style" style={numStyle}>
                {String(timeLeft.seconds).padStart(2, "0")}
              </div>
              <div className="label-style" style={labelStyle}>Seconds</div>
            </div>
          </div>
        </div>
      </div>
       <div
         className="countdown-date"
         style={{
           display: "inline-flex",
           flexDirection: "row",
           alignItems: "end",
           justifyContent: "flex-end",
           gap: 14,
         }}
       >
         <h2
           style={{
             fontSize: "3rem",
             fontWeight: "200",
             fontFamily: "Poppins",
             color: "transparent",
             WebkitTextStroke: "2px white",
             letterSpacing: "0.5rem",
           }}
         >
           JAN 17, 2026
         </h2>
       </div>
    </div>
  );
}

function VenueSection() {
  const containerStyle = {
    position: "relative",
    padding: "32px",
    borderRadius: 20,
    // background:
    //   "linear-gradient(135deg, rgba(40, 20, 50, 0.4), rgba(0, 38, 128, 0.25), rgba(132, 0, 255, 0.25))",
    background: "black",
    // border: "1px solid rgba(132, 0, 255, 0.25)",
    boxShadow:
      "0 10px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(132, 0, 255, 0.08) inset",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  };

  const textStyle = {
    fontSize: "1.1rem",
    lineHeight: 1.8,
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: "1rem",
  };

  const headingStyle = {
    fontSize: "4rem",
    fontWeight: 700,
    color: "rgba(245, 239, 230, 1)",
    color: "transparent",
    WebkitTextStroke: "2px white",
    fontFamily: 'Poppins',
    marginTop: "10%",
    marginBottom: "1.5rem",
    letterSpacing: "1rem",
    Filter: 'drop-shadow(0px 8px 12px rgba(255, 255, 255, 0.3))',
  };

  const imageContainerStyle = {
    width: "100%",
    height: "100%",
    minHeight: "400px",
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
    border: "none",
  };

  return (
    <div className="venue-section-wrapper" style={{ marginTop: "11%", marginBottom: "10%" }}>
      <div
        className="venue-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          alignItems: "stretch",
        }}
      >
        {/* Left side - Text */}
        <div className="venue-text-container" style={containerStyle}>
          <h2 className="venue-heading" style={headingStyle}>Venue</h2>
          {/* <p style={textStyle}>
            Join us at <strong>IIIT Kottayam, Valavoor</strong> for an
            incredible weekend of innovation and collaboration.
          </p> */}
          {/* <p style={textStyle}>
            Our campus provides state-of-the-art facilities, comfortable working
            spaces, and all the resources you need to bring your ideas to life.
          </p> */}
          {/* <p style={textStyle}>
            Whether you're a seasoned hacker or just starting out, you'll find
            everything you need to build something amazing.
          </p> */}
          <div
            className="venue-text-box"
            style={{
              marginTop: "1.5rem",
              padding: "12px 20px",
              borderRadius: 12,
              background: "rgba(0, 0, 0, 0.15)",
              border: "1px solid rgba(132, 0, 255, 0.3)",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "0.95rem",
                color: "rgba(255, 255, 255, 0.85)",
                fontWeight: 500,
              }}
            >
              📍 <strong>
Indian Institute of Information Technology (IIIT) Kottayam</strong>
              <br />
              <br/>
              Valavoor - Chakkampuzha Rd, Valavoor, Nechipuzhoor, Kerala 686635
            </p>
          </div>
        </div>

        {/* Right side - Map */}
        <div className="venue-map-wrapper" style={{ ...containerStyle, padding: 0, overflow: "hidden", display: "flex", height: "100%" }}>
          <div className="venue-map-container" style={imageContainerStyle}>
            <Image
              src={IIITMapImage}
              alt="Illustrative map showing the IIIT Kottayam campus location"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const cards = [
    {
      color: "#060010",
      label: "Event",
      title: "Code Kalari",
      description: "A weekend of creation and community.",
    },
    {
      color: "#060010",
      label: "Type",
      title: "Hackathon",
      description: "Build, learn, and ship fast.",
    },
    {
      color: "#060010",
      label: "Presented by",
      title: "IIIT Kottayam",
      description: "In collaboration with MLH.",
    },
    {
      color: "#060010",
      label: "Partner",
      title: "MLH",
      description: "Major League Hacking.",
    },
    {
      color: "#060010",
      label: "When",
      title: "Coming soon",
      description: "Dates announced on our socials.",
    },
    {
      color: "#060010",
      label: "Where",
      title: "On-campus",
      description: "Details TBA.",
    },
  ];

  return (
    <section style={{ backgroundColor: "#000", color: "#fff" }}>
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1rem" }}
      >
        <div style={{ marginBottom: "1.25rem" }}>
          <LaunchCountdown />
      </div>
        <VenueSection />
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <h1 style={{ fontSize: "2.25rem", lineHeight: 1.2, margin: 0 }}>
            {/* Code Kalari Hackathon */}
        </h1>
          <p style={{ opacity: 0.8, marginTop: "0.5rem" }}>
            {/* Presented by IIIT Kottayam and MLH */}
          </p>
        </div>
        {/* <MagicBento cards={cards} /> */}
      </div>
    </section>
  );
}
