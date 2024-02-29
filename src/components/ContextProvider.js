import React, { useState } from "react";
import ContextData from "./ContextData";

const ContextProvider = (props) => {
  const [products, Setproducts] = useState([]);
  const [cartdata, Setcartdata] = useState(0);

  const addtocart = (newcandyname, newdescribtion, newprice) => {
    Setproducts((newaddtocart) => {
      return [
        ...newaddtocart,
        {
          candyname: newcandyname,
          describtion: newdescribtion,
          price: newprice,
          key: Math.random().toString()
        }
      ];
    });
  };

  const totalcartvalue = (newinputdata) => {
    const totalvalue = cartdata + newinputdata;
    Setcartdata(totalvalue);
  };

  return (
    <ContextData.Provider
      value={{ products, addtocart, totalcartvalue, cartdata }}
    >
      {props.children}
    </ContextData.Provider>
  );
};

export default ContextProvider;
