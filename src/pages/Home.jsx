import React from "react";
import { BsTwitter, BsGithub, BsDiscord, BsFacebook } from "react-icons/bs";
import main from "../images/main.jpg";
import { motion } from "framer-motion";
import { container, item } from "../components/ultis/animate";
const Home = () => {
  return (
    <div className="px-10 mt-10  md:mt-30 md:flex md:items-center md:flex-row-reverse md:justify-center">
      <motion.div
        initial={{ scale: 0.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        <img
          src={main}
          alt="rem"
          className="rounded-full w-[50%] mx-auto md:w-[75%] md:ml-auto"
        />
      </motion.div>
      <div className="text-center  mt-10">
        <motion.h2
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ delayChildren: 0.5, staggerChildren: 0.3 }}
          className="font-bold text-2xl md:text-6xl"
        >
          Front-End React Developer
        </motion.h2>
        <div className="my-10 text-2xl md:text-4xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            Hi.I'm <i className="font-bold text-blue-300"> Kaung Satt</i>.
          </motion.p>
          <motion.p
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            A passionate Front-end React Developer
          </motion.p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className=" max-w-md mx-auto flex items-center justify-between mb-5 overflow-hidden"
        >
          <motion.a
            href="https://twitter.com/KaungSatt22"
            target="_blank"
            variants={item}
          >
            <BsTwitter size={45} className=" cursor-pointer" />
          </motion.a>

          <motion.a
            href="https://github.com/KaungSatt22"
            target="_blank"
            variants={item}
          >
            <BsGithub size={45} className=" cursor-pointer" />
          </motion.a>
          <motion.a
            href="https://discordapp.com/users/heaven4138"
            target="_blank"
            variants={item}
          >
            <BsDiscord size={45} className=" cursor-pointer" />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/kaungsatt.heaven22/"
            target="_blank"
            variants={item}
          >
            <BsFacebook size={45} className=" cursor-pointer" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
