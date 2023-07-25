import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../../utils/Status";

const initialState = {
  events: [],
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
    },
  },
});

export const { setJobs, setJobsStatus, setTotalJobs } = HomeSlice.actions;

export default HomeSlice.reducer;
