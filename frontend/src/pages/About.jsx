"use client";
import { useEffect, useState } from "react";
import {
  Brain,
  Clock3,
  Cpu,
  Globe2,
  Lightbulb,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Wifi,
  Zap,
} from "lucide-react";
import Image from "next/image";
import IIITMapImage from "@/assets/IIITMap.png";
import "./About.css";

const LAUNCH_TS = new Date("2026-01-17T09:00:00+05:30").getTime();

function LaunchCountdown({ targetTs = LAUNCH_TS }) {
  // Responsive for mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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

  const cardStyle = isMobile
    ? {
        position: "relative",
        width: "100%",
        flex: "1 1 auto",
        padding: "12px 16px",
        borderRadius: 18,
        background:
          "linear-gradient(160deg, rgba(10, 10, 24, 0.92), rgba(20, 0, 42, 0.82))",
        border: "1px solid rgba(132, 0, 255, 0.38)",
        boxShadow:
          "0 12px 30px rgba(0, 0, 0, 0.45), 0 0 1px rgba(132, 0, 255, 0.1) inset",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }
    : {
        position: "relative",
        width: "100%",
        flex: "1 1 420px",
        padding: "22px 28px",
        borderRadius: 24,
        background:
          "linear-gradient(160deg, rgba(10, 10, 24, 0.92), rgba(20, 0, 42, 0.82))",
        border: "1px solid rgba(132, 0, 255, 0.38)",
        boxShadow:
          "0 24px 60px rgba(0, 0, 0, 0.55), 0 0 1px rgba(132, 0, 255, 0.1) inset",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      };

  const rowStyle = isMobile
    ? {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        width: "100%",
        flexWrap: "wrap",
      }
    : {
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-between",
        gap: 12,
        width: "100%",
        flexWrap: "wrap",
      };

  const boxStyle = isMobile
    ? {
        flex: "0 1 auto",
        minWidth: 40,
        padding: "8px 6px",
        borderRadius: 12,
        background:
          "linear-gradient(180deg, rgba(12, 12, 28, 0.95), rgba(28, 8, 48, 0.75))",
        border: "1px solid rgba(132, 0, 255, 0.34)",
        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 8px 18px rgba(0, 0, 0, 0.35)",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }
    : {
        flex: "1 1 110px",
        minWidth: 100,
        padding: "18px 16px",
        borderRadius: 18,
        background:
          "linear-gradient(180deg, rgba(12, 12, 28, 0.95), rgba(28, 8, 48, 0.75))",
        border: "1px solid rgba(132, 0, 255, 0.34)",
        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 15px 32px rgba(0, 0, 0, 0.45)",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      };

  const numStyle = isMobile
    ? {
        fontSize: "1.6rem",
        fontWeight: 600,
        letterSpacing: "0.04rem",
        fontFamily: "Poppins",
        background: "linear-gradient(140deg, #ffffff 0%, rgba(166, 110, 255, 0.92) 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        textShadow: "0 4px 10px rgba(132, 0, 255, 0.15)",
      }
    : {
        fontSize: "2.9rem",
        fontWeight: 600,
        letterSpacing: "0.08rem",
        fontFamily: "Poppins",
        background: "linear-gradient(140deg, #ffffff 0%, rgba(166, 110, 255, 0.92) 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        textShadow: "0 10px 24px rgba(132, 0, 255, 0.25)",
      };

  const labelStyle = isMobile
    ? {
        fontSize: 7,
        color: "rgba(255, 255, 255, 0.68)",
        marginTop: 4,
        letterSpacing: 0.8,
        textTransform: "uppercase",
        fontWeight: 500,
      }
    : {
        fontSize: 12,
        color: "rgba(255, 255, 255, 0.68)",
        marginTop: 10,
        letterSpacing: 1.6,
        textTransform: "uppercase",
        fontWeight: 500,
      };

  const sepStyle = isMobile
    ? {
        alignSelf: "center",
        color: "rgba(132, 0, 255, 0.65)",
        fontSize: 22,
        fontWeight: 600,
        padding: "0 2px",
      }
    : {
        alignSelf: "center",
        color: "rgba(132, 0, 255, 0.65)",
        fontSize: 26,
        fontWeight: 600,
        padding: "0 6px",
      };

  return (
    <div className="launch-countdown-shell">
      <div style={cardStyle}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: 16,
            width: "100%",
          }}
        >
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
      <div className="countdown-date">
        <h2>Jan 17 · 2026</h2>
        <span>IIIT Kottayam · Kerala</span>
      </div>
    </div>
  );
}

function VenueSection() {
  // Responsive grid and map for mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const containerStyle = isMobile
    ? { padding: "18px" }
    : { padding: "28px" };

  const textStyle = {
    fontSize: "1.1rem",
    lineHeight: 1.8,
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: "1rem",
  };

  const headingStyle = isMobile
    ? { fontSize: "2rem" }
    : { fontSize: "2.6rem" };

  const imageContainerStyle = isMobile
    ? { minHeight: "280px" }
    : { minHeight: "380px" };

  return (
    <section id="venue" className="venue-section-wrapper" style={{ marginTop: isMobile ? "18%" : "11%", marginBottom: isMobile ? "16%" : "10%" }}>
      <div
        className="venue-grid"
        style={{
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
          gap: isMobile ? "1.2rem" : "2rem",
        }}
      >
        {/* Left side - Text */}
        <div className="venue-text-container" style={containerStyle}>
          <h2 className="venue-heading">Venue</h2>
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
              marginTop: isMobile ? "1rem" : "1.5rem",
              padding: isMobile ? "10px 14px" : "12px 20px",
              borderRadius: 12,
              background: "rgba(0, 0, 0, 0.15)",
              border: "1px solid rgba(132, 0, 255, 0.3)",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: isMobile ? "0.85rem" : "0.95rem",
                color: "rgba(255, 255, 255, 0.85)",
                fontWeight: 500,
                lineHeight: isMobile ? 1.6 : 1.8,
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

        {/* Right side - Map (Google Maps Embed) */}
        <div className="venue-map-wrapper" style={{ height: isMobile ? "280px" : "100%" }}>
          <div className="venue-map-container" style={imageContainerStyle}>
            <iframe
              title="IIIT Kottayam Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.128109491185!2d76.6500519!3d9.7552146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07ce23bc170053%3A0x8757971e61eb21dd!2sIndian%20Institute%20of%20Information%20Technology%20(IIIT)%20Kottayam!5e0!3m2!1sen!2sin!4v1765008343875!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: isMobile ? "280px" : "400px", width: "100%", height: "100%" }}
              allowFullScreen={true}
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  // Create star particles effect
  useEffect(() => {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars-container';
    document.querySelector('.about-page')?.appendChild(starsContainer);

    // Generate 150 stars with random positions, sizes, and animation durations
    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      const size = Math.random() * 3 + 1; // 1-4px
      const x = Math.random() * 100; // 0-100%
      const y = Math.random() * 100; // 0-100%
      const duration = Math.random() * 3 + 2; // 2-5s
      const delay = Math.random() * 5; // 0-5s
      
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.animationDuration = `${duration}s`;
      star.style.animationDelay = `${delay}s`;
      
      starsContainer.appendChild(star);
    }

    return () => {
      starsContainer.remove();
    };
  }, []);

  const heroHighlights = [
    {
      icon: Sparkles,
      title: "Studio-grade production",
      description: "Immersive staging, lighting, and visuals built to keep energy high all 36 hours.",
    },
    {
      icon: Wifi,
      title: "Always-on labs",
      description: "High-bandwidth work zones, and recharge pods when you need a break.",
    },
    {
      icon: MapPin,
      title: "Kerala innovation hub",
      description: "Explore the IIIT Kottayam campus nestled between lush hills and vibrant local culture.",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "TBD",
      label: "Builders on campus",
      caption: "Students, founders, and community technologists from across India.",
    },
    {
      icon: Trophy,
      value: "₹TBD",
      label: "Prize pool & grants",
      caption: "Cash prizes, partner credits, and post-hackathon incubation support.",
    },
    {
      icon: Clock3,
      value: "TBD",
      label: "Of focused hacking",
      caption: "Ideation jams, mentorship clinics, and late-night lightning talks.",
    },
    {
      icon: Globe2,
      value: "TBD",
      label: "Mentor partners",
      caption: "Startup operators and industry experts on call.",
    },
  ];

  const tracks = [
    {
      icon: Cpu,
      title: "TBD-1",
      description: "Build AI-first products, autonomous agents, or creative coding experiences.",
    },
    {
      icon: ShieldCheck,
      title: "TBD-2",
      description: "Design resilient solutions for energy, agri-tech, mobility, and circular economies.",
    },
    {
      icon: Zap,
      title: "TBD-3",
      description: "Prototype next-gen interfaces across AR/VR, gaming, and multisensory storytelling.",
    },
  ];

  const experiences = [
    {
      icon: Rocket,
      stage: "Launch & kickoff",
      time: "Day 1 · TBD",
      detail: "High-energy opening ceremony, partner reveals, and community-led team formation rituals.",
    },
    {
      icon: Lightbulb,
      stage: "Deep work sprints",
      time: "Day 1 · TBD",
      detail: "Mentor pop-ups, midnight debugging clinics, wellness recharge zones, and creative showcases.",
    },
    {
      icon: Brain,
      stage: "Demo finale",
      time: "Day 2 · TBD",
      detail: "Live pitches, partner judging, community choice awards, and a celebratory closing jam.",
    },
  ];

  return (
    <section className="about-page">
      <div className="about-container">
        <div className="hero-section">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="hero-tag">About Code Kalari 2026</span>
              <h1 className="hero-heading">
                Where builders craft future-ready experiences from Kerala&apos;s creative campus.
              </h1>
              <p className="hero-description">
                Code Kalari is an in-person hackathon hosted by IIIT Kottayam with Major League Hacking. Expect
                36 hours of deliberate making, curated mentors, cultural spotlights, and a community-driven
                showcase that celebrates experimentation.
              </p>
            </div>

            <div className="hero-highlight-panel">
              <div className="panel-glow" />
              <h2>Inside the experience</h2>
              <div className="hero-highlight-grid">
                {heroHighlights.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="hero-highlight-item">
                    <div className="hero-highlight-icon">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-countdown hero-countdown--full">
            <LaunchCountdown />
            <p className="countdown-caption">We go live on campus January 17, 2026 · Valavoor, Kerala</p>
          </div>
        </div>

        <div className="stats-section">
          <div className="section-header">
            <span className="section-tag">Why join</span>
            <h2>Build with a community obsessed with craft.</h2>
            <p>
              Bring your ideas, stay for the mentorship, and leave with a battle-tested prototype ready for the
              world. We blend focused creation with intentional community moments.
            </p>
          </div>
          <div className="stats-grid">
            {stats.map(({ icon: Icon, value, label, caption }) => (
              <div key={label} className="stats-card">
                <div className="stats-icon">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="stats-value">{value}</p>
                  <p className="stats-label">{label}</p>
                  <p className="stats-caption">{caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="tracks" className="info-section tracks-section">
          <div className="section-header">
            <span className="section-tag">Tracks & Prompts</span>
            <h2>Choose a focus area that matches your curiosity.</h2>
            <p>
              Themes are intentionally wide, with mentors and technical resources to help you refine your MVP.
              Surprise wildcard challenges drop on day two for teams wanting an extra twist.
            </p>
          </div>
          <div className="card-grid">
            {tracks.map(({ icon: Icon, title, description }) => (
              <div key={title} className="info-card">
                <div className="info-icon">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>

        <VenueSection />

        <div className="experience-section">
          <div className="section-header">
            <span className="section-tag">Weekend Flow</span>
            <h2>Design-forward programming that keeps momentum high.</h2>
            <p>
              Expect structured touchpoints balanced with room for serendipity. Our schedule is designed to help
              teams go from zero to demo with support at every stage.
            </p>
          </div>
          <div className="timeline-grid">
            {experiences.map(({ icon: Icon, stage, time, detail }) => (
              <div key={stage} className="timeline-card">
                <div className="timeline-icon">
                  <Icon size={20} />
                </div>
                <div>
                  <h3>{stage}</h3>
                  <p className="timeline-time">{time}</p>
                  <p>{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
