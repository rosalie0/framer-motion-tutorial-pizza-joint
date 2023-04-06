import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <div className="toppings container">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              whileHover={{
                scale: 1.3,
                // when you use scale you need to think about the transform origin.
                // for this one we need to specify its X origin as 0.
                originX: 0,
                color: "rgb(255,255,0)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              key={topping}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button // while hover gets the same key value pairs as animate!
          whileHover={{
            scale: 1.1,
            // give it a white glowing effect
            textShadow: "0px 0px 8px white",
            boxShadow: "0px 0px 8px white",
          }}
        >
          Order
        </motion.button>
      </Link>
    </div>
  );
};

export default Toppings;
