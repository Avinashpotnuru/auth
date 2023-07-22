import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  cartArray: [],
  displayName: {
    helperData: null,
  },
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartArray = [...state.cartArray, action.payload];
      // state.cartArray = state.cartArray.push(action.payload);
    },
    removeItem: (state, action) => {
      // console.log("action.payload", action.payload);
      state.cartArray = state.cartArray.filter(
        (item, idx) => idx !== action.payload
      );
    },

    add: (state, action) => {
      state.count += 1;
    },
    minus: (state, action) => {
      state.count -= 1;
    },

    addValue: (state, action) => {
      state.count += action.payload;
      console.log(action.payload);
    },
    display: (state, action) => {
      state.displayName.helperData = action.payload;
      console.log("display", action.payload);
    },
  },
});

export const { add, removeItem, addItem, minus, addValue, display } =
  cartSlice.actions;

export default cartSlice.reducer;
