import React, { useEffect, useState } from "react";
import { profile, navLinks } from "../data/portfolio";
import { SunIcon, MoonIcon, MenuIcon, CloseIcon, DownloadIcon } from "./icons";

export default function Navbar({ isDark, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`nav${scrolled ? " nav--scrolled" : ""}`}>
        <div className="container nav__inner">
          <a className="nav__brand" href="#top" aria-label="Home">
            <span className="nav__mark">{profile.monogram}</span>
            {profile.name}
          </a>

          <nav aria-label="Primary">
            <ul className="nav__links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav__actions">
            <button
              className="nav__toggle"
              onClick={onToggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <a className="btn btn--primary btn--sm nav__resume" href={profile.resumeUrl} target="_blank" rel="noreferrer">
              <DownloadIcon />
              Resume
            </a>
            <button
              className="nav__burger"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      <div className={`nav__mobile${menuOpen ? " is-open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a
          className="btn btn--primary"
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          <DownloadIcon />
          Download Resume
        </a>
      </div>
    </>
  );
}
