import React from "react";

import { store } from "../../App";

import { useContext } from "react";

const Cart = () => {
  const [count] = useContext(store);
  return (
    <div>
      <h1>number of items add in cart :{count}</h1>
    </div>
  );
};

export default Cart;
