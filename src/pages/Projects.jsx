import React from "react";
import { motion } from "framer-motion";
import { container } from "../components/ultis/animate";

import MovieImg from "../images/Movie.png";
import RecipeImg from "../images/recipe.png";
import QuoteImg from "../images/quote.png";
import EcommerceImg from "../images/ecommerce.png";
import ShoppingImg from "../images/shopping.png";
import Card from "../components/Card";

export const Projects = () => {
  let imagesArr = [
    {
      id: 1,
      imgSrc: MovieImg,
      website: "https://k-react-movie.netlify.app/",
      github: "https://github.com/KaungSatt22/react-movie",
      name: "Movie",
    },
    {
      id: 2,
      imgSrc: RecipeImg,
      website: "https://k-react-recipe.netlify.app/",
      github: "https://github.com/KaungSatt22/react-recipe",
      name: "Recipe",
    },
    {
      id: 3,
      imgSrc: QuoteImg,
      website: "https://k-react-quote.netlify.app/",
      github: "https://github.com/KaungSatt22/react-quote",
      name: "Quote",
    },
    {
      id: 4,
      imgSrc: EcommerceImg,
      website: "https://k-react-ecommerce.netlify.app/",
      github: "https://github.com/KaungSatt22/react_ecommerce",
      name: "Ecommerce",
    },
    {
      id: 5,
      imgSrc: ShoppingImg,
      website: "https://k-react-shopping.netlify.app/",
      github: "https://github.com/KaungSatt22/react-shopping",
      name: "Shopping",
    },
  ];
  return (
    <div>
      <h2 className="text-center text-4xl font-bold mt-5">Projects</h2>
      <motion.div
        className="container mx-auto mt-20 flex flex-col lg:flex-row lg:flex-wrap gap-[5rem] justify-center items-center lg:justify-between p-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {imagesArr.map((arr) => (
          <Card key={arr.id} {...arr} />
        ))}
      </motion.div>
    </div>
  );
};
