import axiosInstance from "../utils/AxiosInstance";
import { getLocalToken, hasLocalToken } from "../utils/localToken";

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

export const UserService = {
  getUserFromToken,
};
