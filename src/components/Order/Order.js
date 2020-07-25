import React from "react";

import classes from "./Order.module.css";

const order = (props) => {
  const ingredients = [];
  console.log(props.ingredients);
  for (let ingredientName in props.ingredients) {
    if (props.ingredients[ingredientName] === 0) {
      console.log(`none of: ${ingredientName}`);
    } else {
      ingredients.push({
        name: ingredientName,
        amount: props.ingredients[ingredientName],
      });
    }
  }

  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
      >
        {ig.name} X {ig.amount}
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>${props.price}</strong>
      </p>
    </div>
  );
};

export default order;
