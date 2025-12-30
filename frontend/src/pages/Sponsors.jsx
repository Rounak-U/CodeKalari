"use client";

import CardNav from "@/components/ui/CardNav";
import Silk from "@/components/ui/Silk";
import ShinyText from "../components/ui/ShinyText";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import "./Sponsors.css";
import { Alice } from "next/font/google";
import SponsorIcon from "@/components/ui/SponsorIcon";
import Devfolio from "../assets/Devfolio.png";
import ETH from "../assets/ETH.png";
import XYZ from "../assets/xyz.png";
import Dodo from "../assets/dodo.png";
import InterviewCake from "../assets/interviewcake.png";
import Navan from "../assets/navan.png";
import Mastra from "../assets/mastra.png";
import Modisconto from "../assets/modisconto.png";

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

export default function Sponsors() {
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
      {/* Hero Section with Silk Background */}

      {/* Sponsors Hero Section */}
      <section className="sponsors-hero">
        <div className="sponsors-hero-content">
          <h1 className="sponsors-title">Meet Our Sponsors</h1>
          {/* <p className="sponsors-subtitle">
            Powered by visionary organizations committed to fostering innovation and excellence.
          </p> */}
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="testimonials-section">
        {/* Solo sponsor (Akumen) - placed above the carousels */}
        <div className="solo-sponsor">
          <div className="testimonial-card sponsor-image-card">
            <img src="/akumen.png" alt="Akumen Sponsor" className="sponsor-image" />
          </div>
        </div>
        {/* Top Tier Sponsors Carousel */}
        <div className="wrapper-toleft">
          <div className="item-left item1">
            <div className="testimonial-card sponsor-image-card">
              <a href="https://dodopayments.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={typeof Dodo === 'string' ? Dodo : Dodo.src || Dodo.default || Dodo}
                  alt="Dodo Payments Sponsor"
                  className="sponsor-image"
                />
              </a>
            </div>
          </div>

          <div className="item-left item2">
            <div className="testimonial-card sponsor-image-card">
              <a href="https://navan.ai" target="_blank" rel="noopener noreferrer">
                <img
                  src={typeof Navan === 'string' ? Navan : Navan.src || Navan.default || Navan}
                  alt="Navan Sponsor"
                  className="sponsor-image"
                />
              </a>
            </div>
          </div>

          <div className="item-left item3">
            <div className="testimonial-card sponsor-image-card">
              <a href="https://mastra.ai" target="_blank" rel="noopener noreferrer">
                <img
                  src={typeof Mastra === 'string' ? Mastra : Mastra.src || Mastra.default || Mastra}
                  alt="Mastra Sponsor"
                  className="sponsor-image"
                />
              </a>
            </div>
          </div>

          <div className="item-left item4">
            <div className="testimonial-card sponsor-image-card">
              <a href="https://www.interviewcake.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={typeof InterviewCake === 'string' ? InterviewCake : InterviewCake.src || InterviewCake.default || InterviewCake}
                  alt="Interview Cake Sponsor"
                  className="sponsor-image"
                />
              </a>
            </div>
          </div>

          <div className="item-left item5">
            <div className="testimonial-card sponsor-image-card">
              <a href="https://dodopayments.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={typeof Dodo === 'string' ? Dodo : Dodo.src || Dodo.default || Dodo}
                  alt="Dodo Payments Sponsor"
                  className="sponsor-image"
                />
              </a>
            </div>
          </div>

          <div className="item-left item6">
            <div className="testimonial-card sponsor-image-card">
              <a href="https://navan.ai" target="_blank" rel="noopener noreferrer">
                <img
                  src={typeof Navan === 'string' ? Navan : Navan.src || Navan.default || Navan}
                  alt="Navan Sponsor"
                  className="sponsor-image"
                />
              </a>
            </div>
          </div>

          <div className="item-left item7">
            <div className="testimonial-card sponsor-image-card">
              <a href="https://mastra.ai" target="_blank" rel="noopener noreferrer">
                <img
                  src={typeof Mastra === 'string' ? Mastra : Mastra.src || Mastra.default || Mastra}
                  alt="Mastra Sponsor"
                  className="sponsor-image"
                />
              </a>
            </div>
          </div>

          <div className="item-left item8">
            <div className="testimonial-card sponsor-image-card">
              <a href="https://www.interviewcake.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={typeof InterviewCake === 'string' ? InterviewCake : InterviewCake.src || InterviewCake.default || InterviewCake}
                  alt="Interview Cake Sponsor"
                  className="sponsor-image"
                />
              </a>
            </div>
          </div>

          <div className="item-left item9">
            <div className="testimonial-card sponsor-image-card">
              <a href="https://dodopayments.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={typeof Dodo === 'string' ? Dodo : Dodo.src || Dodo.default || Dodo}
                  alt="Dodo Payments Sponsor"
                  className="sponsor-image"
                />
              </a>
            </div>
          </div>

          <div className="item-left item10">
            <div className="testimonial-card sponsor-image-card">
              <a href="https://navan.ai" target="_blank" rel="noopener noreferrer">
                <img
                  src={typeof Navan === 'string' ? Navan : Navan.src || Navan.default || Navan}
                  alt="Navan Sponsor"
                  className="sponsor-image"
                />
              </a>
            </div>
          </div>

          <div className="item-left item11">
            <div className="testimonial-card sponsor-image-card">
              <a href="https://mastra.ai" target="_blank" rel="noopener noreferrer">
                <img
                  src={typeof Mastra === 'string' ? Mastra : Mastra.src || Mastra.default || Mastra}
                  alt="Mastra Sponsor"
                  className="sponsor-image"
                />
              </a>
            </div>
          </div>

          <div className="item-left item12">
            <div className="testimonial-card sponsor-image-card">
              <a href="https://www.interviewcake.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={typeof InterviewCake === 'string' ? InterviewCake : InterviewCake.src || InterviewCake.default || InterviewCake}
                  alt="Interview Cake Sponsor"
                  className="sponsor-image"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Solo sponsor (Modisconto) - placed between the carousels */}
        <div className="solo-sponsor">
          <div className="testimonial-card sponsor-image-card">
            <img
              src={typeof Modisconto === 'string' ? Modisconto : Modisconto.src || Modisconto.default || Modisconto}
              alt="Modisconto Sponsor"
              className="sponsor-image"
            />
          </div>
        </div>

        {/* Main Sponsors Carousel */}
        <div className="wrapper-toright">
          <div className="item-right item1">
            <div className="testimonial-card sponsor-image-card">
              <img
                src={typeof Devfolio === 'string' ? Devfolio : Devfolio.src || Devfolio.default || Devfolio}
                alt="Devfolio Sponsor"
                className="sponsor-image"
              />
            </div>
          </div>

          <div className="item-right item2">
            <div className="testimonial-card sponsor-image-card">
              <img
                src={typeof ETH === 'string' ? ETH : ETH.src || ETH.default || ETH}
                alt="ETH Sponsor"
                className="sponsor-image"
              />
            </div>
          </div>

          <div className="item-right item3">
            <div className="testimonial-card sponsor-image-card">
              <img
                src={typeof XYZ === 'string' ? XYZ : XYZ.src || XYZ.default || XYZ}
                alt="XYZ Sponsor"
                className="sponsor-image"
              />
            </div>
          </div>

          <div className="item-right item4">
            <div className="testimonial-card sponsor-image-card">
              <img
                src={typeof Devfolio === 'string' ? Devfolio : Devfolio.src || Devfolio.default || Devfolio}
                alt="Devfolio Sponsor"
                className="sponsor-image"
              />
            </div>
          </div>

          <div className="item-right item5">
            <div className="testimonial-card sponsor-image-card">
              <img
                src={typeof ETH === 'string' ? ETH : ETH.src || ETH.default || ETH}
                alt="ETH Sponsor"
                className="sponsor-image"
              />
            </div>
          </div>

          <div className="item-right item6">
            <div className="testimonial-card sponsor-image-card">
              <img
                src={typeof XYZ === 'string' ? XYZ : XYZ.src || XYZ.default || XYZ}
                alt="XYZ Sponsor"
                className="sponsor-image"
              />
            </div>
          </div>

          <div className="item-right item7">
            <div className="testimonial-card sponsor-image-card">
              <img
                src={typeof Devfolio === 'string' ? Devfolio : Devfolio.src || Devfolio.default || Devfolio}
                alt="Devfolio Sponsor"
                className="sponsor-image"
              />
            </div>
          </div>

          <div className="item-right item8">
            <div className="testimonial-card sponsor-image-card">
              <img
                src={typeof ETH === 'string' ? ETH : ETH.src || ETH.default || ETH}
                alt="ETH Sponsor"
                className="sponsor-image"
              />
            </div>
          </div>

          <div className="item-right item9">
            <div className="testimonial-card sponsor-image-card">
              <img
                src={typeof XYZ === 'string' ? XYZ : XYZ.src || XYZ.default || XYZ}
                alt="XYZ Sponsor"
                className="sponsor-image"
              />
            </div>
          </div>

          <div className="item-right item10">
            <div className="testimonial-card sponsor-image-card">
              <img
                src={typeof Devfolio === 'string' ? Devfolio : Devfolio.src || Devfolio.default || Devfolio}
                alt="Devfolio Sponsor"
                className="sponsor-image"
              />
            </div>
          </div>

          <div className="item-right item11">
            <div className="testimonial-card sponsor-image-card">
              <img
                src={typeof ETH === 'string' ? ETH : ETH.src || ETH.default || ETH}
                alt="ETH Sponsor"
                className="sponsor-image"
              />
            </div>
          </div>

          <div className="item-right item12">
            <div className="testimonial-card sponsor-image-card">
              <img
                src={typeof XYZ === 'string' ? XYZ : XYZ.src || XYZ.default || XYZ}
                alt="XYZ Sponsor"
                className="sponsor-image"
              />
            </div>
          </div>
        </div>


        {/* <div className="wrapper-toleft">
          <div className="item-left item1">
            <div className="testimonial-card">
            <SponsorIcon type="gold" /> 
              <p className="testimonial-text">
                The guidance helped me gain in a way and gain
                confidence in myself again.
              </p>
              <div className="testimonial-author">
                <img src="./logo.png" alt="" className="author-img" />
                <div>
                  <h4>Tommy Hilfiger</h4>
                  <p>Chennai</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-left item2">
            <div className="testimonial-card">
            <SponsorIcon type="diamond" /> 
              <p className="testimonial-text">
                The personalized approach made all the difference. I finally
                feel like I’m on the right track.
              </p>
              <div className="testimonial-author">
                <img
                  src="./logo.png"
                  alt=""
                  className="author-img"
                />
                <div>
                  <h4>ALLEN SOLLY</h4>
                  <p>Bangalore</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-left item3">
            <div className="testimonial-card">
            <SponsorIcon type="silver" /> 
              <p className="testimonial-text">
                I never thought I could achieve this level. Thank
                you!
              </p>
              <div className="testimonial-author">
                <img src="./logo.png" alt="" className="author-img" />
                <div>
                  <h4>Raymond</h4>
                  <p>Mumbai</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-left item4">
            <div className="testimonial-card">
          <SponsorIcon type="diamond" /> 
              <p className="testimonial-text">
                The support has been invaluable. I’m so grateful
                for this service.
              </p>
              <div className="testimonial-author">
                <img src="./logo.png" alt="" className="author-img" />
                <div>
                  <h4>Central Bank of India</h4>
                  <p>Delhi</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-left item5">
            <div className="testimonial-card">
            <SponsorIcon type="platinum" /> 
              <p className="testimonial-text">
                I’ve tried many programs, but approach is truly
                unique and effective.
              </p>
              <div className="testimonial-author">
                <img src="./logo.png" alt="" className="author-img" />
                <div>
                  <h4>Punjab National Bank</h4>
                  <p>Pune</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-left item6">
            <div className="testimonial-card">
            <SponsorIcon type="gold" /> 
              <p className="testimonial-text">
                I appreciate the holistic approach to hack. It’s made a real
                difference in my life.
              </p>
              <div className="testimonial-author">
                <img
                  src="./logo.png"
                  alt=""
                  className="author-img"
                />
                <div>
                  <h4>Axis Bank</h4>
                  <p>Noida</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-left item7">
            <div className="testimonial-card">
            <SponsorIcon type="gold" /> 
              <p className="testimonial-text">
                The personalized coaching has been a game changer for me.
              </p>
              <div className="testimonial-author">
                <img
                  src="./logo.png"
                  alt=""
                  className="author-img"
                />
                <div>
                  <h4>Bandhan Bank</h4>
                  <p>Bangalore</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-left item8">
            <div className="testimonial-card"> */}
        {/* <SponsorIcon type="diamond" /> 
              <p className="testimonial-text">
                I’ve never felt more supported in my journey.
              </p>
              <div className="testimonial-author">
                <img src="./logo.png" alt="" className="author-img" />
                <div>
                  <h4>Bank of India</h4>
                  <p>Mumbai</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-left item9">
            <div className="testimonial-card">
            <SponsorIcon type="silver" /> 
              <p className="testimonial-text">
                The community support is incredible. I feel like I belong.
              </p>
              <div className="testimonial-author">
                <img src="./logo.png" alt="" className="author-img" />
                <div>
                  <h4>HDFC</h4>
                  <p>Delhi</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-left item10">
            <div className="testimonial-card">
            <SponsorIcon type="platinum" /> 
              <p className="testimonial-text">
                I’m amazed at the progress I’ve made in such a short time.
              </p>
              <div className="testimonial-author">
                <img
                  src="./logo.png"
                  alt=""
                  className="author-img"
                />
                <div>
                  <h4>State Bank of India</h4>
                  <p>Pune</p> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}

      </section>
    </>
  );
}
