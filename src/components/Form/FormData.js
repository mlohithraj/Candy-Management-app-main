import React, { useContext, useState } from "react";
import ContextData from "../ContextData";
import classes from './FormData.module.css'

const FormData = () => {
  const [candyname, Setcandyname] = useState("");
  const { addtocart } = useContext(ContextData);
  const NameChangeHandler = (event) => {
    Setcandyname(event.target.value);
    // console.log(event.target.value)
  };

  const [description, Setdescription] = useState("");
  const descriptionChangeHandler = (event) => {
    Setdescription(event.target.value);
    // console.log(event.target.value)
  };

  const [price, Setprice] = useState("");
  const priceChangeHandler = (event) => {
    Setprice(event.target.value);
    // console.log(event.target.value)
  };

  const OnSubmitHandler = (event) => {
    event.preventDefault();
    console.log(candyname);
    console.log(description);
    console.log(price);

    addtocart(candyname, description, price);
    Setcandyname("");
    Setdescription("");
    Setprice("");
  };

  return (
    <div className={classes.form}>
      <h1>Candy Shop</h1>
      <label>Candy Name : </label>
      <input type="text" value={candyname} onChange={NameChangeHandler}></input>
      <br />
      <label>Description : </label>
      <input
        type="text"
        value={description}
        onChange={descriptionChangeHandler}
      ></input>
      <br />
      <label>Price : </label>
      <input type="number" value={price} onChange={priceChangeHandler}></input>
      <br />
      <button type="Submit" onClick={OnSubmitHandler}>
        Add
      </button>
    </div>
  );
};

export default FormData;
