import React from "react";

import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
import Button from "../../UI/Button/Button";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>${props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <div className={classes.ActionBtns}>
      <Button btnType="btn--accent" clicked={() => props.ingredientsCleared()}>
        Start Over
      </Button>
      <Button
        btnType="btn--primary"
        disabled={!props.purchasable}
        clicked={props.ordered}
      >
        ORDER NOW
      </Button>
    </div>
  </div>
);
export default buildControls;
