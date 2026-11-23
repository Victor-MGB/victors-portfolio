import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectVisual from "./ProjectVisual";
import {projects} from "../data/portfolio";
import {GithubIcon, ArrowUpRightIcon, CheckIcon} from "./icons";

function ProjectCard({project, index}) {
  const flipped = index % 2 === 1;
  const link = project.demo || project.github;

  return (
    <Reveal
      className={`project${flipped ? " project--flip" : ""}`}
      as="article"
    >
      <div className="project__visual">
        {project.gallery ? (
          <ProjectVisual
            variant={project.visual}
            gallery={project.gallery}
            href={link}
          />
        ) : link ? (
          <a
            className="project__visual-link"
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.name}`}
          >
            <ProjectVisual variant={project.visual} />
          </a>
        ) : (
          <div className="project__visual-link">
            <ProjectVisual variant={project.visual} />
          </div>
        )}
      </div>

      <div className="project__body">
        <span className="project__number">
          {String(index + 1).padStart(2, "0")} —{" "}
          {project.category || "Case Study"}
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
            {project.architecture.map(point => (
              <li key={point}>
                <CheckIcon />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {project.diagram && (
          <div className="project__diagram">
            <h4 className="project__arch-title">Architecture</h4>
            <div className="project__flow">
              {project.diagram.map((node, i) => (
                <React.Fragment key={node.label}>
                  {i > 0 && (
                    <span className="project__flow-arrow" aria-hidden="true">
                      →
                    </span>
                  )}
                  <div className="project__flow-node">
                    <span className="project__flow-node-label">
                      {node.label}
                    </span>
                    <span className="project__flow-node-sub">{node.sub}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {project.learned && (
          <div className="project__learned">
            <h4 className="project__arch-title">
              What I learned / problems solved
            </h4>
            <ul className="project__arch-list">
              {project.learned.map(point => (
                <li key={point}>
                  <CheckIcon />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="project__stack">
          {project.stack.map(tech => (
            <span className="chip" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        {(project.github || project.githubBackend || project.demo) && (
          <div className="project__links">
            {project.github && (
              <a
                className="project__link"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon />
                {project.githubLabel || "GitHub"}
                <ArrowUpRightIcon />
              </a>
            )}
            {project.githubBackend && (
              <a
                className="project__link"
                href={project.githubBackend}
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon />
                Backend
                <ArrowUpRightIcon />
              </a>
            )}
            {project.demo ? (
              <a
                className="project__link"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                <ArrowUpRightIcon />
                {project.demoLabel || "Live Demo"}
              </a>
            ) : (
              <span
                className="project__link"
                style={{color: "var(--text-muted)", cursor: "default"}}
              >
                Demo coming soon
              </span>
            )}
          </div>
        )}
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
          description="Production systems I've designed and built — each with a clear problem, a real architecture, and source you can verify."
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
