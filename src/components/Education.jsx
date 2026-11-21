import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import {education, certifications} from "../data/portfolio";

function CredentialList({title, items}) {
  return (
    <Reveal className="card education__card">
      <h3 className="education__title">{title}</h3>
      <ul className="education__list">
        {items.map(item => (
          <li className="education__item" key={`${item.title}-${item.org}`}>
            <div>
              <h4 className="education__name">{item.title}</h4>
              <p className="education__org">{item.org}</p>
            </div>
            <span className="education__date">{item.date}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function Education() {
  return (
    <section className="section section--muted" id="education">
      <div className="container">
        <SectionHeading
          eyebrow="Background"
          title="Education & certifications."
          description="The foundation behind the engineering."
        />
        <div className="education__grid">
          <CredentialList title="Education" items={education} />
          <CredentialList title="Certifications" items={certifications} />
        </div>
      </div>
    </section>
  );
}
