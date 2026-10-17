import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import portrait from "../images/portrait.jpg";
import { profile, contact } from "../data/content";
import { fadeIn, fadeUp, stagger } from "../components/ultis/animate";

const Home = () => {
  return (
    <section className="hero-atmosphere relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <div className="page-shell relative flex min-h-[calc(100vh-4rem)] items-center">
        <div className="flex w-full flex-col items-start gap-10 md:flex-row md:items-center md:justify-between md:gap-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="relative max-w-xl border-l-2 border-accent pl-5 md:pl-6"
          >
            <motion.p variants={fadeUp} className="section-label mb-4">
              Portfolio
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display whitespace-nowrap text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {profile.name}
            </motion.h1>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-display text-xl font-semibold text-accent md:text-2xl"
            >
              {profile.role}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link to="/projects" className="btn-primary">
                View Projects
              </Link>
              <a href={profile.cvUrl} download className="btn-secondary">
                Download CV
              </a>
              <Link to="/contact" className="btn-secondary">
                Contact
              </Link>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="mt-10 flex items-center gap-5"
            >
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-ink/70 transition hover:text-accent"
              >
                <BsGithub size={22} />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-ink/70 transition hover:text-accent"
              >
                <BsLinkedin size={22} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="portrait-frame h-36 w-36 shrink-0 self-center sm:h-40 sm:w-40 md:h-44 md:w-44 md:self-auto"
          >
            <img
              src={portrait}
              alt={profile.name}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
