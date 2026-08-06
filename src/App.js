import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const THEME_KEY = "vm-theme";

function getInitialTheme() {
  try {
    const stored = window.localStorage.getItem(THEME_KEY);
    if (stored === "dark" || stored === "light") return stored === "dark";
  } catch (e) {
    /* ignore */
  }
  try {
    if (window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  } catch (e) {
    /* ignore */
  }
  return false;
}

export default function App() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    try {
      window.localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
    } catch (e) {
      /* ignore */
    }
  }, [isDark]);

  return (
    <>
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((dark) => !dark)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
