import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const HomeSlice = createSlice({
  name: "Home",
  initialState,
  reducers: {
    setCounter: (state, action) => {
      state.counter = action.payload;
    },
  },
});

export const { setCounter } = HomeSlice.actions;

export default HomeSlice.reducer;
