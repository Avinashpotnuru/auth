import React, { useState } from "react";

import { contextStore } from "../../App";

import { useContext } from "react";

import {
  add,
  minus,
  addValue,
  display,
  removeItem,
} from "../../Store/CartSlice";

import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  // const [count] = useContext(contextStore);

  const [inputt, setInput] = useState("");
  const itemsArray = useSelector((state) => state.CartSlice.cartArray);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>number of items add in cart :{itemsArray.length}</h1>
      {/* <input
        onChange={(e) => dispatch(display(setInput(e.target.value)))}
        type="text"
        placeholder="enter you name"
        value={inputt}
      />
      <h1>{inputt}</h1>
      <div>
        <button onClick={() => dispatch(add())}>add</button>
        <button onClick={() => dispatch(minus())}>minus</button>
        <button onClick={() => dispatch(addValue(50))}>add value</button>
      </div> */}
      <div>
        {itemsArray.length ? (
          <div>
            {itemsArray.map((item, idx) => (
              <>
                <h1 style={{ display: "inline-block" }}>{item}</h1>
                <button onClick={() => dispatch(removeItem(idx))}>
                  remove
                </button>
                <br />
              </>
            ))}
          </div>
        ) : (
          "no items in cart"
        )}
      </div>
    </div>
  );
};

export default Cart;
