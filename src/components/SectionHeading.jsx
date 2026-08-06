import React from "react";
import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <Reveal className={`section-head${center ? " section-head--center" : ""}`}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-desc">{description}</p> : null}
    </Reveal>
  );
}
