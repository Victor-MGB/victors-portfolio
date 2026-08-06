import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectVisual from "./ProjectVisual";
import { projects } from "../data/portfolio";
import { GithubIcon, ArrowUpRightIcon, CheckIcon } from "./icons";

function ProjectCard({ project, index }) {
  const flipped = index % 2 === 1;
  const link = project.demo || project.github;

  return (
    <Reveal
      className={`project${flipped ? " project--flip" : ""}`}
      as="article"
    >
      <div className="project__visual">
        <a
          className="project__visual-link"
          href={link}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.name}`}
        >
          <ProjectVisual variant={project.visual} />
        </a>
      </div>

      <div className="project__body">
        <span className="project__number">
          {String(index + 1).padStart(2, "0")} — Case Study
        </span>
        <h3 className="project__name">{project.name}</h3>
        <p className="project__desc">{project.description}</p>

        <div className="project__problem">
          <span className="project__problem-label">Problem it solves</span>
          <p>{project.problem}</p>
        </div>

        <div className="project__arch">
          <h4 className="project__arch-title">Architecture highlights</h4>
          <ul className="project__arch-list">
            {project.architecture.map((point) => (
              <li key={point}>
                <CheckIcon />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="project__stack">
          {project.stack.map((tech) => (
            <span className="chip" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className="project__links">
          <a
            className="project__link"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
            GitHub
            <ArrowUpRightIcon />
          </a>
          {project.demo ? (
            <a
              className="project__link"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              <ArrowUpRightIcon />
              Live Demo
            </a>
          ) : (
            <span className="project__link" style={{ color: "var(--text-muted)", cursor: "default" }}>
              Demo coming soon
            </span>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section className="section section--muted" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects built like products."
          description="A few systems I've designed and built — each one solving a real problem with a clear architecture."
        />

        <div className="projects__list">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
