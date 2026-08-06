import React from "react";
import Reveal from "./Reveal";
import { profile } from "../data/portfolio";
import { DownloadIcon, ArrowUpRightIcon, MailIcon } from "./icons";

function TerminalLine({ children }) {
  return (
    <div className="terminal__line">
      <span className="ln">&gt;</span>
      {children}
    </div>
  );
}

function Terminal() {
  return (
    <Reveal className="hero__terminal" delay={150}>
      <div className="terminal__bar">
        <span className="terminal__dot" style={{ background: "#f87171" }} />
        <span className="terminal__dot" style={{ background: "#fbbf24" }} />
        <span className="terminal__dot" style={{ background: "#34d399" }} />
        <span className="terminal__title">engineer@vm: ~</span>
      </div>
      <div className="terminal__body">
        <TerminalLine>
          <span className="kw">cat</span> profile.json
        </TerminalLine>
        <div style={{ marginTop: 8 }} />
        <TerminalLine>
          <span className="kw">{"{"}</span>
        </TerminalLine>
        <TerminalLine>
          &nbsp;&nbsp;<span className="st">"name"</span>:{" "}
          <span className="st">"{profile.name}"</span>,
        </TerminalLine>
        <TerminalLine>
          &nbsp;&nbsp;<span className="st">"role"</span>:{" "}
          <span className="st">"Backend & AI Engineer"</span>,
        </TerminalLine>
        <TerminalLine>
          &nbsp;&nbsp;<span className="st">"focus"</span>: [
          <span className="st">"AI"</span>, <span className="st">"Cloud"</span>,{" "}
          <span className="st">"APIs"</span>],
        </TerminalLine>
        <TerminalLine>
          &nbsp;&nbsp;<span className="st">"stack"</span>: [
          <span className="st">"Node.js"</span>, <span className="st">"Python"</span>,
        </TerminalLine>
        <TerminalLine>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="st">"PostgreSQL"</span>,{" "}
          <span className="st">"Redis"</span>],
        </TerminalLine>
        <TerminalLine>
          &nbsp;&nbsp;<span className="st">"status"</span>:{" "}
          <span className="st">"open to opportunities"</span>,
        </TerminalLine>
        <TerminalLine>
          <span className="kw">{"}"}</span>
          <span className="terminal__cursor" />
        </TerminalLine>
      </div>
    </Reveal>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero__grid">
          <div>
            <Reveal>
              <span className="hero__badge">
                <span className="hero__badge-dot" />
                {profile.openToWork
                  ? "Open to senior backend & AI roles"
                  : "Backend & AI Engineer"}
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1>
                {profile.name.split(" ")[0]}{" "}
                <span style={{ color: "var(--text-secondary)" }}>
                  {profile.name.split(" ").slice(1).join(" ")}
                </span>
              </h1>
              <span className="hero__role">
                {profile.roles.join(" · ")}
              </span>
            </Reveal>

            <Reveal delay={160}>
              <p className="hero__lead">{profile.lead}</p>
            </Reveal>

            <Reveal delay={240}>
              <div className="hero__cta">
                <a className="btn btn--primary" href="#projects">
                  View Projects
                  <ArrowUpRightIcon />
                </a>
                <a
                  className="btn btn--secondary"
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <DownloadIcon />
                  Download Resume
                </a>
                <a className="btn btn--ghost" href="#contact">
                  <MailIcon />
                  Contact Me
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="hero__meta">
                <span className="chip">
                  <span className="hero__badge-dot" />
                  {profile.location}
                </span>
                <span className="chip">Node.js · Python · PostgreSQL</span>
                <span className="chip">LLMs · RAG · AI Agents</span>
              </div>
            </Reveal>
          </div>

          <Terminal />
        </div>
      </div>
    </section>
  );
}
