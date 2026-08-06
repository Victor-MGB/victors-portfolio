import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { about, profile } from "../data/portfolio";
import { CheckIcon, MailIcon, ArrowUpRightIcon } from "./icons";

function renderParagraph(text) {
  const parts = text.split("**");
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : <React.Fragment key={i}>{part}</React.Fragment>
  );
}

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="Engineer by craft, builder by habit."
          description="A short introduction to how I approach backend engineering and what I focus on day to day."
        />

        <div className="about__grid">
          <Reveal className="about__text">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{renderParagraph(p)}</p>
            ))}
          </Reveal>

          <Reveal delay={120} className="card about__card">
            <h3 className="about__card-title">Quick facts</h3>
            {profile.facts.map((fact) => (
              <div className="about__fact" key={fact.label}>
                <CheckIcon />
                <div>
                  <span className="about__fact-label">{fact.label}</span>
                  <span className="about__fact-value">{fact.value}</span>
                </div>
              </div>
            ))}
            <div style={{ marginTop: 20 }}>
              <a className="project__link" href={`mailto:${profile.email}`}>
                <MailIcon />
                {profile.email}
                <ArrowUpRightIcon />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
