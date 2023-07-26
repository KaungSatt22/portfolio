export const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: {
    y: "200%",
  },
  show: {
    y: "0%",
    transition: {
      duration: 0.5,
    },
  },
};

export const aboutText = {
  hidden: {
    x: "-500%",
  },
  show: {
    x: "0%",
    transition: {
      duration: 0.5,
    },
  },
};
