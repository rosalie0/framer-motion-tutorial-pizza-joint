import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  // You can call these keys whatever makes sense to you.
  // EG Initial, hidden, etc...
  hidden: {
    opacity: 0, // invisible,
    x: "100vw", // off screen Right
  },
  visible: {
    opacity: 1, // visible,
    x: 0, // default x position
  },
};
const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.5 }}
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              whileHover={{
                scale: 1.3,
                // when you use scale you need to think about the transform origin.
                // for this one we need to specify its X origin as 0.
                originX: 0,
                color: "yellow",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="next"
        >
          <Link to="/toppings">
            <motion.button // while hover gets the same key value pairs as animate!
              whileHover={{
                scale: 1.1,
                // give it a white glowing effect
                textShadow: "0px 0px 8px white",
                boxShadow: "0px 0px 8px white",
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
