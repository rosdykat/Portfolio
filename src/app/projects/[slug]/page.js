"use client";

import projectStyle from "./page.module.css";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function ProjectPage() {
  const project = projects[0];

  if (!project) return <p>Project not found</p>;
  console.log(project.stats);

  return (
    <div className={projectStyle.body}>
      <h1 className={projectStyle.title}>{project.title}</h1>
      <p className={projectStyle.subtitle}>{project.subtitle}</p>
      <section className={projectStyle.imageBox}>
        <Image
          className={projectStyle.image}
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          style={{ maxWidth: "100%" }}
        />
        <Image
          className={projectStyle.image}
          src={project.image2}
          alt={project.title}
          width={500}
          height={300}
          style={{ maxWidth: "100%" }}
        />
        <Image
          className={projectStyle.image}
          src={project.image3}
          alt={project.title}
          width={500}
          height={300}
          style={{ maxWidth: "100%" }}
        />
      </section>

      {/* Highlighted Stats */}
      {project.stats?.length > 0 && (
        <section className={projectStyle.keystats}>
          <ul
            style={{
              display: "flex",
              gap: "2rem",
              listStyle: "none",
              padding: 0,
            }}
          >
            {(project.stats || []).map((stat) => (
              <li key={stat.label}>
                <strong>{stat.value}</strong>
                <p>{stat.label}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
      <hr className={projectStyle.divider} />

      {/* Objective */}
      <section>
        <h2 className={projectStyle.subheader}>Objective</h2>
        <ul className={projectStyle.bulletPoint}>
          {project.content.objective.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <hr className={projectStyle.divider} />
      {/* Strategy */}
      <section className={projectStyle.twoColumn}>
        <div className={projectStyle.strategyLeft}>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <Image
              className={projectStyle.image}
              src={project.image4}
              alt={project.title}
              width={500}
              height={300}
              style={{ maxWidth: "100%" }}
            />
          </a>
        </div>

        <div className={projectStyle.strategyRight}>
          <h2 className={projectStyle.subheader}>Strategy & Approach</h2>
          {project.content.strategy.map((item) => (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <ul className={projectStyle.bulletPoint}>
                {item.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <hr className={projectStyle.divider} />
      {/* Results */}
      <section>
        <h2 className={projectStyle.subheader}>Results</h2>
        <ul className={projectStyle.bulletPoint}>
          {project.content.results.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>
      <hr className={projectStyle.divider} />
    </div>
  );
}
