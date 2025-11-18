"use client";
import { useEffect, useState, useRef } from "react";
import MagicBento from "@/components/ui/MagicBento";
import { Filter } from "lucide-react";
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
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Load Google Maps script
    if (typeof window === 'undefined') return;
    
    const checkGoogleMaps = () => {
      return window.google && window.google.maps && window.google.maps.Map;
    };

    if (checkGoogleMaps()) {
      setMapLoaded(true);
      return;
    }

    // Check if script is already being loaded
    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
    if (existingScript) {
      existingScript.addEventListener('load', () => {
        // Wait a bit for maps API to be fully initialized
        const checkInterval = setInterval(() => {
          if (checkGoogleMaps()) {
            clearInterval(checkInterval);
            setMapLoaded(true);
          }
        }, 100);
        // Timeout after 5 seconds
        setTimeout(() => clearInterval(checkInterval), 5000);
      });
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCu2qCp9XaAUe8m0lsbjpJJ7byk21NQloY&loading=async&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      // Wait a bit for maps API to be fully initialized
      const checkInterval = setInterval(() => {
        if (checkGoogleMaps()) {
          clearInterval(checkInterval);
          setMapLoaded(true);
        }
      }, 100);
      // Timeout after 5 seconds
      setTimeout(() => clearInterval(checkInterval), 5000);
    };
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (!mapLoaded || !mapRef.current || mapInstanceRef.current) return;
    if (typeof window === 'undefined') return;
    
    const google = window.google;
    if (!google || !google.maps || !google.maps.Map) {
      return;
    }

    // IIIT Kottayam coordinates
    const venueLocation = { lat: 9.754833, lng: 76.650099 };

    // Dark theme map styles
    const darkTheme = [
      { elementType: "geometry", stylers: [{ color: "#242424" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242424" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ];

    const map = new google.maps.Map(mapRef.current, {
      center: venueLocation,
      zoom: 15,
      styles: darkTheme,
      disableDefaultUI: false,
      zoomControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
    });

    // Add marker
    new google.maps.Marker({
      position: venueLocation,
      map: map,
      title: "IIIT Kottayam - Code Kalari Hackathon",
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        fillColor: "#8400ff",
        fillOpacity: 1,
        strokeColor: "#ffffff",
        strokeWeight: 2,
      },
    });

    mapInstanceRef.current = map;
  }, [mapLoaded]);

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

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
    minHeight: "400px",
    border: "2px solid rgba(193, 126, 255, 0.25)",
    overflow: "hidden",
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
          <div className="venue-map-container" style={{ ...mapContainerStyle, borderRadius: 20, flex: 1 }} ref={mapRef}>
            {!mapLoaded && (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(0, 0, 0, 1)",
                  color: "rgba(255, 255, 255, 0.6)",
                  fontSize: "0.95rem",
                }}
              >
                Loading map...
              </div>
            )}
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
