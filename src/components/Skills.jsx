import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/portfolio";
import { CheckIcon, SkillIcon } from "./icons";

export default function Skills() {
  return (
    <section className="section section--muted" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="A pragmatic engineering toolkit."
          description="The languages, frameworks, and infrastructure I reach for when building production systems."
        />

        <div className="skills__grid">
          {skills.map((category, i) => (
            <Reveal key={category.name} delay={(i % 3) * 90} className="card skills__card">
              <div className="skills__head">
                <span className="skills__icon">
                  <SkillIcon name={category.icon} />
                </span>
                <h3 className="skills__name">{category.name}</h3>
              </div>
              <ul className="skills__list">
                {category.items.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
