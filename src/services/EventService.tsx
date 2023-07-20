import axiosInstance from "../utils/AxiosInstance";

async function getEvents() {
  return axiosInstance.get("/events");
}

export const EventService = {
  getEvents,
};
