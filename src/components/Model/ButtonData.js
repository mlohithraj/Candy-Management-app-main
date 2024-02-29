import React, { useContext, useState } from "react";
import ContextData from "../ContextData";

const ButtonData = () => {
  const [inputdata, setinputdata] = useState();
  const { totalcartvalue } = useContext(ContextData);

  const BuyOneClickHandler = (event) => {
    event.preventDefault();
    // console.log(event.target.value)
    const ClickO1 = event.target.value;
    setinputdata(ClickO1);
    totalcartvalue(1);
  };

  const BuyTwoClickHandler = (event) => {
    event.preventDefault();
    // console.log(event.target.value)
    const ClickO2 = event.target.value;
    setinputdata(ClickO2);
    totalcartvalue(2);
  };

  const BuyThreeClickHandler = (event) => {
    event.preventDefault();
    // console.log(event.target.value)
    const ClickO3 = event.target.value;
    setinputdata(ClickO3);
    totalcartvalue(3);
  };
  return (
    <div>
      <button onClick={BuyOneClickHandler}>BuyOne</button>
      <button onClick={BuyTwoClickHandler}>BuyTwo</button>
      <button onClick={BuyThreeClickHandler}>BuyThree</button>
    </div>
  );
};

export default ButtonData;
