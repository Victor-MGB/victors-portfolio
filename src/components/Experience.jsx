import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Work that shipped to production."
          description="Roles where I designed, built, and delivered backend systems for real users."
        />

        <div className="experience__list">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={(i % 2) * 100} className="card experience__card">
              <div className="experience__top">
                <h3 className="experience__role">
                  {job.role}
                  <span className="experience__company"> · {job.company}</span>
                </h3>
                <span className="experience__date">{job.date}</span>
              </div>

              <p className="experience__desc">{job.desc}</p>

              <ul className="experience__highlights">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="experience__stack">
                {job.stack.map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
