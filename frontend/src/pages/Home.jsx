"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MorphingTextDemo from "../components/MorphingTextDemo";
import CardNav from "@/components/ui/CardNav";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

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
  const smoothWrapperRef = useRef(null);
  const smoothContentRef = useRef(null);

  useEffect(() => {
    let smoother;
    
    // Initialize smooth scroll
    if (smoothWrapperRef.current && smoothContentRef.current) {
      smoother = ScrollSmoother.create({
        wrapper: smoothWrapperRef.current,
        content: smoothContentRef.current,
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
      });
    }

    return () => {
      smoother?.kill();
    };
  }, []);

  return (
    <>
      {/* Fixed Background Video */}
      <div className="fixed inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Forest.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Fixed Navbar */}
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

      {/* Smooth Scroll Wrapper */}
      <div id="smooth-wrapper" ref={smoothWrapperRef}>
        <div id="smooth-content" ref={smoothContentRef}>
          {/* Scrollable Content */}
          <div className="relative">
            <section className="min-h-screen flex items-center justify-center px-4">
              <div className="text-center w-full flex flex-col items-center justify-center">
                {/* Main Title - Code Kalari */}
                <div 
                  style={{
                    fontFamily: '"Bodoni MT", "Libre Bodoni", "Didot", "Playfair Display", serif',
                    fontSize: 'clamp(60px, 10vw, 230px)',
                    color: '#F5EFE6',
                    textAlign: 'center',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    textShadow: `
                      2px 2px 0px rgba(0, 0, 0, 0.15),
                      3px 3px 0px rgba(0, 0, 0, 0.1),
                      4px 4px 0px rgba(0, 0, 0, 0.08),
                      5px 5px 8px rgba(0, 0, 0, 0.25)
                    `,
                    filter: 'drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.3))'
                  }}
                >
                  <MorphingTextDemo />
                </div>
              </div>
            </section>

            {/* Add more sections here for scrollable content */}
          
          </div>
        </div>
      </div>
    </>
  );
}
