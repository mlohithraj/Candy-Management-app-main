import React, { useContext } from "react";
import ContextData from "../ContextData";
import classes from './Cart.module.css'

const Cart = () => {
  const { cartdata } = useContext(ContextData);

  console.log(cartdata);

  return (
    <div className={classes.cart}>
      <button>
        <h1>Cart</h1>
        <h2>{cartdata}</h2>
      </button>
    </div>
  );
};

export default Cart;
