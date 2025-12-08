"use client";

import "./Timeline.css";

const timelineEvents = [
  {
    id: 1,
    title: "Deadline for Idea Submission",
    date: "20th January 2026",
    description: "Registration for Code Kalari end on 20th January, 2026. Submit your ideas by this date to participate in the hackathon.",
    position: "left"
  },
  {
    id: 2,
    title: "First List of Shortlisted Teams Releases",
    date: "22nd January 2026",
    description: "First list of shortlisted teams for Code Kalari will be released on 22nd January, 2026.",
    position: "right"
  },
  {
    id: 3,
    title: "Second List of Shortlisted Teams Releases",
    date: "24th January 2026",
    description: "Second list of shortlisted teams for Code Kalari will be released on 24th January, 2026.",
    position: "left"
  },
  {
    id: 4,
    title: "Final Team Confirmation",
    date: "26th January 2026",
    description: "Final list of confirmed teams will be announced. Selected teams must confirm their participation by this date.",
    position: "right"
  },
  {
    id: 5,
    title: "Pre-Hackathon Briefing",
    date: "15th February 2026",
    description: "Online briefing session for all participating teams. Rules, guidelines, and event schedule will be discussed.",
    position: "left"
  },
  {
    id: 6,
    title: "Code Kalari Kickoff",
    date: "17th February 2026",
    description: "The main hackathon event begins! Join us at IIIT Kottayam for an exciting weekend of innovation and collaboration.",
    position: "right"
  }
];

export default function Timeline() {
  return (
    <section className="timeline-section">
      <div className="timeline-header">
        <h2 className="timeline-title">Code Kalari Important Dates</h2>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        {timelineEvents.map((event, index) => (
          <div 
            key={event.id} 
            className={`timeline-item ${event.position}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="timeline-content">
              <div className="timeline-date-badge">{event.date}</div>
              <h3 className="timeline-event-title">{event.title}</h3>
              <p className="timeline-description">{event.description}</p>
            </div>
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
