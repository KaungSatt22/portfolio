import React from "react";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { contact, profile } from "../data/content";
import { fadeUp, stagger } from "../components/ultis/animate";

const Contact = () => {
  return (
    <div className="page-shell">
      <motion.div variants={stagger} initial="hidden" animate="show">
        <motion.p variants={fadeUp} className="section-label">
          Contact
        </motion.p>
        <motion.h1 variants={fadeUp} className="section-title mt-2">
          Let&apos;s work together
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-xl text-base text-muted md:text-lg"
        >
          Open to new opportunities and collaborations. Reach out by email or
          send a message below.
        </motion.p>
      </motion.div>

      <div className="mt-12 grid gap-12 lg:grid-cols-5 lg:gap-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="space-y-5 lg:col-span-2"
        >
          <motion.a
            variants={fadeUp}
            href={`mailto:${contact.email}`}
            className="flex items-start gap-3 text-ink/80 transition hover:text-accent"
          >
            <HiOutlineMail size={22} className="mt-0.5 shrink-0" />
            <span className="text-sm md:text-base">{contact.email}</span>
          </motion.a>
          <motion.a
            variants={fadeUp}
            href={`tel:${contact.phone}`}
            className="flex items-start gap-3 text-ink/80 transition hover:text-accent"
          >
            <HiOutlinePhone size={22} className="mt-0.5 shrink-0" />
            <span className="text-sm md:text-base">{contact.phone}</span>
          </motion.a>
          <motion.p
            variants={fadeUp}
            className="flex items-start gap-3 text-ink/80"
          >
            <HiOutlineLocationMarker size={22} className="mt-0.5 shrink-0" />
            <span className="text-sm md:text-base">{contact.address}</span>
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-center gap-5 pt-2">
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

          <motion.a
            variants={fadeUp}
            href={profile.cvUrl}
            download
            className="btn-secondary mt-2 inline-flex"
          >
            Download CV
          </motion.a>
        </motion.div>

        <motion.form
          method="POST"
          action={contact.formAction}
          variants={stagger}
          initial="hidden"
          animate="show"
          className="space-y-5 lg:col-span-3"
        >
          <motion.div variants={fadeUp}>
            <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-md border border-ink/10 bg-white/60 px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-md border border-ink/10 bg-white/60 px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="How can I help?"
              className="w-full resize-y rounded-md border border-ink/10 bg-white/60 px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </motion.div>
          <motion.button type="submit" variants={fadeUp} className="btn-primary w-full md:w-auto">
            Send message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
