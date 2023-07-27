import axiosInstance from "../utils/AxiosInstance";
import { Dispatch } from "@reduxjs/toolkit";
import { STATUS } from "../utils/Status";

import {
  setJobs,
  setJobsStatus,
  setLocation,
  setPosition,
  setTotalJobs,
  setType,
} from "../redux/JobSlice";

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

async function getPosition(dispatch: Dispatch) {
  dispatch(setJobsStatus(STATUS.LOADING));
  try {
    const response = await axiosInstance.get("jobs/position");
    const data = response.data.result;
    dispatch(setPosition(data));
    dispatch(setJobsStatus(STATUS.IDLE));
  } catch (error) {
    dispatch(setJobsStatus(STATUS.ERROR));
  }
}

async function getType(dispatch: Dispatch) {
  dispatch(setJobsStatus(STATUS.LOADING));
  try {
    const response = await axiosInstance.get("jobs/type");
    const data = response.data.result;
    dispatch(setType(data));
    dispatch(setJobsStatus(STATUS.IDLE));
  } catch (error) {
    dispatch(setJobsStatus(STATUS.ERROR));
  }
}

async function getLocation(dispatch: Dispatch) {
  dispatch(setJobsStatus(STATUS.LOADING));
  try {
    const response = await axiosInstance.get("jobs/location");
    const data = response.data.result;
    dispatch(setLocation(data));
    dispatch(setJobsStatus(STATUS.IDLE));
  } catch (error) {
    dispatch(setJobsStatus(STATUS.ERROR));
  }
}

export const JobService = {
  getJobs,
  getPosition,
  getType,
  getLocation,
};
