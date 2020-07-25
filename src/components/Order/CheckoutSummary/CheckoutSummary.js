import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes great!</h1>

      <Burger ingredients={props.ingredients} />
      <Button btnType="btn--accent" clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="btn--primary" clicked={props.checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
