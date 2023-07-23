import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../../utils/Status";

const initialState = {
  events: [],
  jobs: [],
  jobsStatus: STATUS.IDLE,
};

const HomeSlice = createSlice({
  name: "Home",
  initialState,
  reducers: {
    setJobs(state, action) {
      state.jobs = action.payload;
    },
    setJobsStatus(state, action) {
      state.jobsStatus = action.payload;
    },
  },
});

export const { setJobs, setJobsStatus } = HomeSlice.actions;

export default HomeSlice.reducer;
