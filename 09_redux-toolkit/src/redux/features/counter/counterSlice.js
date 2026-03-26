import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  name: "ahmad",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      console.log("increment state", state);
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    incrementByAmount: (state, action) => {
      console.log(action);
      state.count += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
