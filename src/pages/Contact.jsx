import React from "react";
import colla from "../images/collaboration.png";
import { motion } from "framer-motion";
import { container, aboutText } from "../components/ultis/animate";
const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center  md:mt-10 ">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={colla}
          alt="collaboration"
          className="w-[50%] mx-auto md:w-full md:ml-auto"
        />
      </motion.div>
      <motion.form
        method="POST"
        action="https://getform.io/f/6de6921d-ce4f-407e-a1db-c2a67ce052e3"
        className=" border-2 p-2 md:p-5 w-full  mx-auto rounded-lg md:ml-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={aboutText}>
          <label
            htmlFor="name"
            className="text-xl block text-center md:text-3xl"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-2 w-full p-2 outline-none md:text-xl"
            placeholder="Enter Your Name"
          />
        </motion.div>
        <motion.div variants={aboutText} className="my-5">
          <label
            htmlFor="email"
            className="block text-center text-xl md:text-3xl"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            className="border-2  w-full p-2 outline-none md:text-xl"
          />
        </motion.div>
        <motion.div variants={aboutText}>
          <label
            htmlFor="subject"
            className="block text-center text-xl md:text-3xl"
          >
            Message
          </label>
          <textarea
            className="border-2  w-full p-2 outline-none md:text-xl"
            rows={6}
            name="message"
            placeholder="Message"
            id="subject"
          ></textarea>
        </motion.div>
        <motion.button
          variants={aboutText}
          className="p-3 bg-blue-500 block w-full rounded-lg text-white text-xl hover:bg-red-500 transition-colors delay-150 ease-in"
        >
          Send
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Contact;
