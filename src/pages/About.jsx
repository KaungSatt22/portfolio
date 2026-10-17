import React from "react";
import { motion } from "framer-motion";
import { profile, experience, education, skills } from "../data/content";
import { fadeUp, stagger } from "../components/ultis/animate";

const About = () => {
  return (
    <div className="page-shell">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="max-w-3xl"
      >
        <motion.p variants={fadeUp} className="section-label">
          About
        </motion.p>
        <motion.h1 variants={fadeUp} className="section-title mt-2">
          Profile & experience
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-5 text-base leading-relaxed text-muted md:text-lg"
        >
          {profile.summary}
        </motion.p>
      </motion.div>

      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-14 md:mt-20"
      >
        <motion.p variants={fadeUp} className="section-label">
          Work
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="section-title mt-2 text-2xl md:text-3xl"
        >
          {experience.company}
        </motion.h2>
        <div className="mt-8 space-y-0 border-l border-accent/30 pl-6">
          {experience.roles.map((role) => (
            <motion.div
              key={role.title}
              variants={fadeUp}
              className="relative pb-8 last:pb-0"
            >
              <span className="absolute -left-[1.9rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <h3 className="font-display text-lg font-semibold text-ink">
                {role.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{role.period}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-2">
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p variants={fadeUp} className="section-label">
            Education
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-2 font-display text-xl font-bold text-ink"
          >
            {education.school}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-1 text-muted">
            {education.degree}
          </motion.p>
          <motion.p variants={fadeUp} className="mt-1 text-sm text-muted">
            {education.period}
          </motion.p>
        </motion.section>
      </div>

      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-14 md:mt-20"
      >
        <motion.p variants={fadeUp} className="section-label">
          Skills
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="section-title mt-2 text-2xl md:text-3xl"
        >
          Tech stack
        </motion.h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {Object.entries(skills).map(([group, items]) => (
            <motion.div key={group} variants={fadeUp}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-ink">
                {group}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-ink/10 bg-white/50 px-3 py-1.5 text-sm text-ink/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default About;
