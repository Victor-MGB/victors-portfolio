import React from "react";
import { profile } from "../data/portfolio";
import { GithubIcon, LinkedinIcon, XIcon, MailIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a className="footer__brand" href="#top">
          <span className="footer__mark">{profile.monogram}</span>
          {profile.name}
        </a>

        <p className="footer__copy">
          © {year} {profile.name}. Built with care — backend engineer approved.
        </p>

        <div className="footer__socials">
          <a
            className="footer__social"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            className="footer__social"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a
            className="footer__social"
            href={profile.x}
            target="_blank"
            rel="noreferrer"
            aria-label="X (Twitter)"
          >
            <XIcon />
          </a>
          <a
            className="footer__social"
            href={`mailto:${profile.email}`}
            aria-label="Email"
          >
            <MailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
