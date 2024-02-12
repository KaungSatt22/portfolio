import React from "react";
import { FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiRedux, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { container, aboutText, item } from "../components/ultis/animate";
const About = () => {
  return (
    <div className="container mx-auto p-3">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center mt-5 md:mt-20 "
      >
        <motion.h2 variants={aboutText} className="mb-2 text-4xl font-bold">
          About Me
        </motion.h2>
        <motion.p
          variants={aboutText}
          className=" text-xl my-3 md:text-2xl max-w-5xl mx-auto md:my-5"
        >
          Hi, I'm Kaung Satt, a passionate web developer with a strong
          foundation in front-end technologies.I'm 23 years old.Third Years
          Myanmar Major at Dagon University.
        </motion.p>
        <motion.p
          variants={aboutText}
          className="text-xl md:text-2xl my-3 max-w-5xl mx-auto md:my-5"
        >
          I specialize in building interactive and user-friendly web
          applications using ReactJS. I have a deep understanding of HTML, CSS,
          and JavaScript and have experience working with modern frameworks like
          Redux.
        </motion.p>
        <motion.p
          variants={aboutText}
          className=" text-xl md:text-2xl  my-3 max-w-5xl mx-auto md:my-5"
        >
          I constantly strive to stay updated with the latest industry trends
          and best practices to deliver high-quality and performant code.
        </motion.p>
        <motion.p
          variants={aboutText}
          className="text-xl md:text-2xl max-w-5xl mx-auto md:my-5"
        >
          I'm always open to new opportunities and collaborations.Feel free to
          join with me.
        </motion.p>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center shadow-lg p-5 md:mt-20 overflow-hidden"
      >
        <div>
          <motion.p
            variants={item}
            className="text-2xl mb-3 md:text-4xl md:mb-5"
          >
            Tech Stack:
          </motion.p>
        </div>
        <div className="flex items-center justify-start space-x-3 lg:space-x-28">
          <motion.div variants={item} className="flex flex-col items-center ">
            <motion.div
              whileHover={{
                rotate: [0, 0, 270, 270, 0],
                scale: [1, 2, 2, 1, 1],
              }}
            >
              <FaPython size={40} />
            </motion.div>
            <p className="hidden md:block">Python</p>
          </motion.div>
          <motion.div variants={item} className="flex flex-col items-center">
            <motion.div
              whileHover={{
                rotate: [0, 0, 270, 270, 0],
                scale: [1, 2, 2, 1, 1],
              }}
            >
              <IoLogoJavascript size={40} />
            </motion.div>
            <p className="hidden md:block">JavaScript</p>
          </motion.div>
          <motion.div variants={item} className="flex flex-col items-center">
            <motion.div
              whileHover={{
                rotate: [0, 0, 270, 270, 0],
                scale: [1, 2, 2, 1, 1],
              }}
            >
              <FaReact size={40} />
            </motion.div>
            <p className="hidden md:block">React</p>
          </motion.div>
          <motion.div variants={item} className="flex flex-col items-center">
            <motion.div
              whileHover={{
                rotate: [0, 0, 270, 270, 0],
                scale: [1, 2, 2, 1, 1],
              }}
            >
              <SiTailwindcss size={40} />
            </motion.div>
            <p className="hidden md:block">Tailwind</p>
          </motion.div>
          <motion.div variants={item} className="flex flex-col items-center">
            <motion.div
              whileHover={{
                rotate: [0, 0, 270, 270, 0],
                scale: [1, 2, 2, 1, 1],
              }}
            >
              <SiRedux size={40} />
            </motion.div>
            <p className="hidden md:block">Redux</p>
          </motion.div>
          <motion.div variants={item} className="flex flex-col items-center">
            <motion.div
              whileHover={{
                rotate: [0, 0, 270, 270, 0],
                scale: [1, 2, 2, 1, 1],
              }}
            >
              <SiMongodb size={40} />
            </motion.div>
            <p className="hidden md:block">Mongodb</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
