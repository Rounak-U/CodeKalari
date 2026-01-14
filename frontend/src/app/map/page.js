"use client";

import CardNav from "@/components/ui/CardNav";
import "./map.css";

const navItems = [
  {
    label: "Explore",
    bgColor: "#1a1a1a6e",
    textColor: "#fff",
    links: [
      { label: "About", href: "/about", ariaLabel: "Learn about Code Kalari" },
      { label: "Events", href: "/events", ariaLabel: "View our events" },
      { label: "Projects", href: "/projects", ariaLabel: "See our projects" }
    ]
  },
  {
    label: "Community",
    bgColor: "#1a1a1a6e",
    textColor: "#fff",
    links: [
      { label: "Join Us", href: "/join", ariaLabel: "Join the community" },
      { label: "Teams", href: "/teams", ariaLabel: "Meet our teams" }
    ]
  },
  {
    label: "Resources",
    bgColor: "#1a1a1a6e",
    textColor: "#fff",
    links: [
      { label: "Blog", href: "/blog", ariaLabel: "Read our blog" },
      { label: "Docs", href: "/docs", ariaLabel: "View documentation" }
    ]
  }
];

export default function Map() {
  return (
    <>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <CardNav
          logoAlt="Code Kalari"
          items={navItems}
          baseColor="transparent"
          menuColor="#ffffff"
          buttonBgColor="rgba(255, 255, 255, 0.2)"
          buttonTextColor="#ffffff"
        />
      </div>

      {/* Map Hero Section */}
      <section className="map-hero">
        <div className="map-hero-content">
          <h1 className="map-title">Campus Map</h1>
          <p className="map-subtitle">Find your way around IIIT Kottayam</p>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <div className="map-image-wrapper">
            <img 
              src="/IIITMap.png" 
              alt="IIIT Kottayam Campus Map" 
              className="map-image"
            />
          </div>
        </div>
      </section>
    </>
  );
}
