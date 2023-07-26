import React from "react";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { item } from "../components/ultis/animate";
import { motion } from "framer-motion";

const Card = ({ imgSrc, website, github, name }) => {
  return (
    <motion.div
      className="border border-black p-5 rounded-lg relative"
      variants={item}
    >
      <div>
        <img
          src={imgSrc}
          className=" w-[20rem] lg:w-[35rem] object-contain"
          alt=""
        />
      </div>
      <div className="lg:absolute lg:inset-0 lg:w-full lg:h-full lg:bg-black lg:opacity-0 lg:top-20 lg:hover:opacity-100 lg:hover:top-0 lg:hover:duration-700">
        <h2 className="lg:text-white text-center mt-[2rem] text-xl font-bold">
          {name} Project
        </h2>
        <div className="flex justify-center items-center mt-5 gap-[5rem] lg:mt-[5rem]">
          <a href={github}>
            <div className="border-2 border-black p-2 lg:p-3 rounded-lg lg:border-white">
              <BsGithub size={45} className="lg:text-white" />
            </div>
          </a>

          <a href={website}>
            <div className="border-2 border-black p-2 lg:p-3  rounded-lg lg:border-white">
              <BsGlobe size={45} className="lg:text-white" />
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
