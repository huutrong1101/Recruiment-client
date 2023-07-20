import { setEvents, setEventsStatus } from "../pages/Home/slices/HomeSlice";
import axiosInstance from "../utils/AxiosInstance";
import { Dispatch } from "@reduxjs/toolkit";
import { STATUS } from "../utils/Status";

async function getEvents(dispatch: Dispatch) {
  dispatch(setEventsStatus(STATUS.LOADING));
  try {
    const reponse = await axiosInstance.get("/events");
    const data = await reponse.data._embedded.events;
    dispatch(setEvents(data));
    dispatch(setEventsStatus(STATUS.IDLE));
  } catch (error) {
    dispatch(setEventsStatus(STATUS.ERROR));
  }
}

export const EventService = {
  getEvents,
};
