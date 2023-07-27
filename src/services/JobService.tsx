import axiosInstance from "../utils/AxiosInstance";
import { Dispatch } from "@reduxjs/toolkit";
import { STATUS } from "../utils/Status";
import {
  setJobs,
  setJobsStatus,
  setTotalJobs,
} from "../pages/Home/slices/HomeSlice";

async function getJobs(dispatch: Dispatch) {
  dispatch(setJobsStatus(STATUS.LOADING));
  try {
    const response = await axiosInstance.get("jobs");
    const data = response.data.result.content;
    const totalJobs = response.data.result.totalElements;
    dispatch(setJobs(data));
    dispatch(setTotalJobs(totalJobs));
    dispatch(setJobsStatus(STATUS.IDLE));
  } catch (error) {
    dispatch(setJobsStatus(STATUS.ERROR));
  }
}

export const JobService = {
  getJobs,
};
