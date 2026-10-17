import React from "react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { projects, githubRepos } from "../data/content";
import ProjectItem from "../components/ProjectItem";
import { fadeUp, stagger } from "../components/ultis/animate";

export const Projects = () => {
  return (
    <div className="page-shell">
      <motion.div variants={stagger} initial="hidden" animate="show">
        <motion.p variants={fadeUp} className="section-label">
          Work
        </motion.p>
        <motion.h1 variants={fadeUp} className="section-title mt-2">
          Implemented projects
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-2xl text-base text-muted md:text-lg"
        >
          Enterprise systems built at Thuriya Ace Technology — insurance,
          payments, and administration platforms.
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-12 md:mt-16"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </motion.div>

      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-16 border-t border-ink/10 pt-12"
      >
        <motion.p variants={fadeUp} className="section-label">
          Open source
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="mt-2 font-display text-2xl font-bold text-ink"
        >
          Notable GitHub repos
        </motion.h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {githubRepos.map((repo) => (
            <motion.a
              key={repo.name}
              variants={fadeUp}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-3 rounded-md border border-ink/10 bg-white/50 px-4 py-4 transition hover:border-accent/40 hover:bg-white/80"
            >
              <BsGithub
                size={20}
                className="mt-0.5 shrink-0 text-ink/50 transition group-hover:text-accent"
              />
              <span>
                <span className="block font-display text-base font-semibold text-ink group-hover:text-accent">
                  {repo.name}
                </span>
                <span className="mt-1 block text-sm text-muted">
                  {repo.description}
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </motion.section>
    </div>
  );
};
