import axios from "axios";
import { toast } from "react-toastify";
import { getLocalToken, hasLocalToken } from "./localToken";

const headers = hasLocalToken()
  ? {
      Authorization: `Bearer ${getLocalToken()}`,
    }
  : {};

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers,
});

axiosInstance.interceptors.response.use(
  function (response) {
    //
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    toast.error(`There was an error: (${error.message})`);
    console.log(error);

    return Promise.reject(error);
  },
);

export default axiosInstance;
