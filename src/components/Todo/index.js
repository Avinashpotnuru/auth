import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../Store/CartSlice";

const Todo = () => {
  const [item, addItems] = useState("");

  const dispatch = useDispatch();

  const cartArray = useSelector((state) => state.CartSlice.cartArray);

  // console.log("cartArray", cartArray);
  useEffect(() => {}, [item]);

  const addItemHandler = () => {
    if (item) {
      dispatch(addItem(item));
      // console.log(item);
      addItems("");
    }
  };
  return (
    <div>
      <h1>todo</h1>
      <input
        onChange={(e) => addItems(e.target.value)}
        type="text"
        value={item}
        placeholder="enter item name"
      />

      <button onClick={addItemHandler}>add</button>
      <br />

      {cartArray.length ? (
        <div>
          {cartArray.map((item, idx) => {
            return (
              <div key={idx}>
                <h1 style={{ display: "inline-block" }}>{item}</h1>
                <button onClick={() => dispatch(removeItem(idx))}>
                  delete
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        "no data"
      )}
    </div>
  );
};

export default Todo;
