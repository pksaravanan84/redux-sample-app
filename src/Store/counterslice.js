import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    Increment: (state) => {
      state.value++;
    },
    Decrement: (state) => {
      state.value--;
    },
    AddBy: (state, action) => {
      state.value += action.payload;
    },
    ReduceBy: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { Increment, Decrement, AddBy, ReduceBy } = counterSlice.actions;

export default counterSlice.reducer;
