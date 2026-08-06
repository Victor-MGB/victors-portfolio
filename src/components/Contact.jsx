import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { contact, profile } from "../data/portfolio";
import { MailIcon, PhoneIcon, MapPinIcon, ArrowUpRightIcon } from "./icons";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title={contact.heading}
          description={contact.subheading}
        />

        <div className="contact__grid">
          <Reveal className="card contact__card contact__card--primary">
            <span className="contact__card-label">Direct line</span>
            <h3 className="contact__card-title">Reach me anywhere.</h3>
            <p className="contact__card-desc">
              Email is the fastest way to reach me. I read everything and reply
              personally.
            </p>

            <div className="contact__meta">
              <div className="contact__meta-item">
                <MailIcon />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <div className="contact__meta-item">
                <PhoneIcon />
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                  {profile.phone}
                </a>
              </div>
              <div className="contact__meta-item">
                <MapPinIcon />
                {profile.location} · remote friendly
              </div>
            </div>

            <div className="contact__actions">
              <a
                className="btn btn--primary"
                href={`mailto:${profile.email}`}
              >
                <MailIcon />
                Send an email
              </a>
              <a
                className="btn btn--secondary"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <ArrowUpRightIcon />
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="card contact__card contact__card--accent">
            <span className="contact__card-label">Opportunities</span>
            <h3 className="contact__card-title">Hiring for a backend or AI role?</h3>
            <p className="contact__card-desc">
              {contact.note} I&apos;d love to talk about how I can contribute to
              your team.
            </p>

            <div className="contact__actions">
              <a
                className="btn btn--invert"
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                View resume
              </a>
              <a
                className="btn btn--outline-invert"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
