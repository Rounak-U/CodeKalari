"use client";

import { useState } from "react";
import CardNav from "../components/ui/CardNav";
import SplineIframe from "../components/SplineModel"; // your Spline iframe component
import About from "../pages/About";
import Sponsors from "../pages/Sponsors";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import LoadingAnimation from "@/components/LoadingAnimation";

// const navItems = [
//   {
//     label: "Explore",
//     bgColor: "#1a1a1a",
//     textColor: "#fff",
//     links: [
//       { label: "About", href: "/about", ariaLabel: "Learn about Code Kalari" },
//       { label: "Events", href: "/events", ariaLabel: "View our events" },
//       { label: "Projects", href: "/projects", ariaLabel: "See our projects" }
//     ]
//   },
//   {
//     label: "Community",
//     bgColor: "#2a2a2a",
//     textColor: "#fff",
//     links: [
//       { label: "Join Us", href: "/join", ariaLabel: "Join the community" },
//       { label: "Teams", href: "/teams", ariaLabel: "Meet our teams" }
//     ]
//   },
//   {
//     label: "Resources",
//     bgColor: "#3a3a3a",
//     textColor: "#fff",
//     links: [
//       { label: "Blog", href: "/blog", ariaLabel: "Read our blog" },
//       { label: "Docs", href: "/docs", ariaLabel: "View documentation" }
//     ]
//   }
// ];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading && (
        <LoadingAnimation onComplete={() => setIsLoading(false)} />
      )}
      {/* <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <CardNav 
          logo="/globe.svg"
          logoAlt="Code Kalari"
          items={navItems}
          baseColor="transparent"
          menuColor="#ffffff"
          buttonBgColor="rgba(255, 255, 255, 0.2)"
          buttonTextColor="#ffffff"
        />
      </div> */}
      <SplineIframe /> {/* The 3D scene */}
      <About /> {/* About section */}
      <Sponsors /> {/* Sponsors section */}
      {/* <FAQ />  */}
      <Footer /> {/* Footer */}
    </div>
  );
}
