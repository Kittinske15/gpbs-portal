import React from "react";

export default function ProjectCard({ project }) {
  const { name, description, url, initials, accent, status } = project;
  const isLive = status === "live";

  return (
    <a
      className="card"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={isLive ? `Open ${name}` : `${name} (coming soon)`}
    >
      <div className="card-top">
        <span className="badge" style={{ background: accent }}>
          {initials}
        </span>
        <span className={`status ${isLive ? "status-live" : "status-soon"}`}>
          <span className="dot" />
          {isLive ? "Live" : "Soon"}
        </span>
      </div>

      <h3 className="card-title">{name}</h3>
      <p className="card-desc">{description}</p>

      <span className="card-cta">
        Open
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M7 17L17 7M17 7H8M17 7V16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
