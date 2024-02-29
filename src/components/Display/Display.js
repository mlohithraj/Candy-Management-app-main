import React, { useContext } from "react";
import ContextData from "../ContextData";
import ButtonData from "../Model/ButtonData";
import classes from './Display.module.css'

const Display = () => {
  const { products } = useContext(ContextData);
  return (
    <div className={classes.display}>
      <h1>Diplay</h1>
      {products.map((pro) => {
        return (
          <p>
            {pro.candyname} - {pro.describtion} - Rs. {pro.price}
            <ButtonData />
          </p>
        );
      })}
    </div>
  );
};

export default Display;
