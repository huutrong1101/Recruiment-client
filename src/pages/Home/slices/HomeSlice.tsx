import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../../utils/Status";

const initialState = {
  events: [],
  eventsStatus: STATUS.IDLE,
};

const HomeSlice = createSlice({
  name: "Home",
  initialState,
  reducers: {
    setEvents(state, action) {
      state.events = action.payload;
    },
    setEventsStatus(state, action) {
      state.eventsStatus = action.payload;
    },
  },
});

export const { setEvents, setEventsStatus } = HomeSlice.actions;

export default HomeSlice.reducer;
