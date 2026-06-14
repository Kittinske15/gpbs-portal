import React, { useMemo, useState } from "react";
import "./App.css";
import { projects, categories } from "./data/projects";
import ProjectCard from "./components/ProjectCard";

export default function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-inner">
          <div className="brand">
            <img
              className="brand-logo"
              src={`${process.env.PUBLIC_URL}/gpbs-logo.png`}
              alt="GPBS - Global Pro Business Solutions"
            />
            <span className="brand-divider" />
            <span className="brand-sub">Portal</span>
          </div>
          <h1 className="hero-title">All your GPBS systems, one place.</h1>
          <p className="hero-text">
            Jump straight into any GPBS dashboard or tool. Search or filter to
            find what you need.
          </p>

          <div className="search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search systems…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search systems"
            />
          </div>
        </div>
      </header>

      <main className="content">
        <div className="filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pill ${category === cat ? "pill-active" : ""}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="grid">
            {filtered.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        ) : (
          <p className="empty">No systems match “{query}”.</p>
        )}
      </main>

      <footer className="footer">
        <span>
          © {new Date().getFullYear()} GPBS Portal · {projects.length} systems
        </span>
      </footer>
    </div>
  );
}
