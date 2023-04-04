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
            <li key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{topping}</span>
            </li>
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
