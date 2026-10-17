import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "./ultis/animate";

const ProjectItem = ({ name, bullets, tags }) => {
  return (
    <motion.article
      variants={fadeUp}
      className="group border-b border-ink/10 py-8 first:pt-0 last:border-b-0"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-10">
        <h3 className="font-display text-xl font-bold text-ink transition group-hover:text-accent md:w-56 md:shrink-0 md:text-2xl">
          {name}
        </h3>
        <div className="flex-1">
          <ul className="space-y-2">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="text-sm leading-relaxed text-muted md:text-base"
              >
                {bullet}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectItem;
