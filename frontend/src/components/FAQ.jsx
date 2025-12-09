"use client";
import { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    q: "What is Code Kalari?",
    a: "A 24-hour community hackathon by IIIT Kottayam. Build with peers, learn from mentors, and ship fast over an intense weekend.",
  },
  {
    q: "Who can participate?",
    a: "Students of all backgrounds are welcome—from first‑timers to seasoned builders. Teams of 2–4 are recommended.",
  },
  {
    q: "What does it cost?",
    a: "Registration is free. We'll provide Wi‑Fi, power, energy, and vibes. You bring your laptop and creativity.",
  },
  {
    q: "Where and when is it?",
    a: "On campus at IIIT Kottayam, Valavoor. The event runs Jan 17–18, 2026 (weekend). Exact reporting time will be emailed.",
  },
  {
    q: "How do I apply?",
    a: "Use the ‘Apply with Devfolio’ button on this site or visit our Devfolio page. If shortlisted, you’ll receive a confirmation email.",
  },
  // {
  //   q: "What can I build?",
  //   a: "Anything impactful—web, mobile, AI/ML, hardware, gaming, or open source tools. Tracks and prompts will be announced at kickoff.",
  // },
  // {
  //   q: "Are there prizes?",
  //   a: "Yes—track prizes, sponsor bounties, and special recognitions. Prize details will be revealed during the opening ceremony.",
  // },
  {
    q: "How does judging work?",
    a: "Projects are judged on originality, technical depth, impact, and polish. Live demos are required (no slide‑only submissions).",
  },
 {
    q: "Can I come alone?",
    a: "No, you must participate as part of a team of 2–4 members. Solo registrations are not allowed.",
},
  {
    q: "What should I bring?",
    a: "Laptop, chargers and student ID. We’ll handle the rest.",
  },
  {
    q: "Code of Conduct?",
    a: "Be respectful, inclusive, and kind. Violations may result in removal from the event.",
  },
  {
    q: "Food and stay?",
    a: "Snacks and meals are provided during core hours. Resting areas are available for quick naps.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(-1);

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <div className="faq-kicker">Got questions?</div>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">Quick answers about the event, eligibility, and registrations.</p>
        </div>

        <div className="faq-list">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={idx}
                className={`faq-card ${isOpen ? "faq-card--open" : ""}`}
                onClick={() => setOpen(isOpen ? -1 : idx)}
                role="button"
                aria-expanded={isOpen}
              >
                <div className="faq-card__top">
                  <h3 className="faq-card__q">{item.q}</h3>
                  <div className={`faq-toggle ${isOpen ? "open" : ""}`} aria-hidden>
                    <span />
                    <span />
                  </div>
                </div>
                <div className="faq-card__a" style={{ maxHeight: isOpen ? '500px' : '0' }}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


