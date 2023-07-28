import axiosInstance from "../utils/AxiosInstance";
import { getLocalToken, hasLocalToken } from "../utils/localToken";
import { GetUsersInterviewsParams } from "./services";
import qs from "qs";

const getUserFromToken = async () => {
  if (!hasLocalToken()) {
    throw new Error(`Unable to load the token`);
  }
  return await axiosInstance.get(`/user/profile`, {
    headers: {
      Authorization: `Bearer ${getLocalToken()}`,
    },
  });
};

const changeUserAvatar = async (data: FormData) => {
  return await axiosInstance.put(`/user/avatar`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/**
 * Returns the interviews that owned by a candidate.
 */
const getUserInterviews = async ({ page, limit }: GetUsersInterviewsParams) => {
  const searchQuery = qs.stringify({ page: page || "1", limit: limit || "10" });
  return await axiosInstance.get(`/candidate/interviews?${searchQuery}`);
};

export const UserService = {
  getUserFromToken,
  changeUserAvatar,
  getUserInterviews,
};
