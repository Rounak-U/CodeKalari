"use client";

import { useEffect, useRef } from "react";
import "./Timeline.css";

const timelineEvents = [
  {
    id: 1,
    title: "Registration Start",
    date: "15th December",
    description: "Registration for Code Kalari opens. Submit your team details and project ideas to participate in the hackathon.",
    position: "left"
  },
  {
    id: 2,
    title: "First Release of Shortlisted Teams",
    date: "22nd December",
    description: "First list of shortlisted teams for Code Kalari will be released. Check your email for confirmation.",
    position: "right"
  },
  {
    id: 3,
    title: "Second Release of Shortlisted Teams",
    date: "29th December",
    description: "Second list of shortlisted teams will be announced. ",
    position: "left"
  },
  {
    id: 4,
    title: "Last Date for Registration",
    date: "2nd January",
    description: "Final deadline to register for Code Kalari. Ensure your team submission is complete by this date.",
    position: "right"
  },
  {
    id: 5,
    title: "Third Release of Shortlisted Teams",
    date: "5th January",
    description: "Final shortlist of teams will be released.",
    position: "left"
  },
  {
    id: 6,
    title: "Last Date to RSVP",
    date: "9th January",
    description: "Deadline to confirm your participation. Selected teams must RSVP by this date to secure their spot.",
    position: "right"
  },
  {
    id: 7,
    title: "Commencement of Hackathon",
    date: "17th January",
    description: "The hackathon begins! Join us at the venue for an intense day of innovation and coding.",
    position: "left"
  },
  {
    id: 8,
    title: "Finale of Hackathon",
    date: "18th January",
    description: "Grand finale and prize distribution. Present your projects and compete for exciting prizes!",
    position: "right"
  }
];

export default function Timeline() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            // Once animated, stop observing (animate only once)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const timelineItems = timelineRef.current?.querySelectorAll(".timeline-item");
    timelineItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline-section">
      <div className="timeline-header">
        <h2 className="timeline-title">Important Dates</h2>
      </div>

      <div className="timeline-container" ref={timelineRef}>
        <div className="timeline-line"></div>

        {timelineEvents.map((event, index) => (
          <div
            key={event.id}
            className={`timeline-item ${event.position}`}
            style={{ "--delay": `${index * 0.08}s` }}
          >
            <div className="timeline-content">
              <div className="timeline-date-badge">{event.date}</div>
              <h3 className="timeline-event-title">{event.title}</h3>
              {/* <p className="timeline-description">{event.description}</p> */}
            </div>
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
