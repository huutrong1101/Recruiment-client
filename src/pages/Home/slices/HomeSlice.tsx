import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../../utils/Status";

const initialState = {
  events: [],
  eventsStatus: STATUS.IDLE,
  totalEvents: 0,
  jobs: [],
  totalJobs: 0,
  jobsStatus: STATUS.IDLE,
};

const HomeSlice = createSlice({
  name: "Home",
  initialState,
  reducers: {
    setJobs(state, action) {
      state.jobs = action.payload;
    },
    setTotalJobs(state, action) {
      state.totalJobs = action.payload;
    },
    setJobsStatus(state, action) {
      state.jobsStatus = action.payload;
<<<<<<< HEAD
=======
    },
    setEvents(state, action) {
      state.events = action.payload;
    },
    setEventsStatus(state, action) {
      state.eventsStatus = action.payload;
    },
    setTotalEvents(state, action) {
      state.totalEvents = action.payload;
>>>>>>> 343d44cfbf7837a21922134c90a057bc9434ab74
    },
  },
});

<<<<<<< HEAD
export const { setJobs, setJobsStatus, setTotalJobs } = HomeSlice.actions;
=======
export const {
  setJobs,
  setJobsStatus,
  setTotalJobs,
  setEventsStatus,
  setEvents,
  setTotalEvents,
} = HomeSlice.actions;
>>>>>>> 343d44cfbf7837a21922134c90a057bc9434ab74

export default HomeSlice.reducer;
