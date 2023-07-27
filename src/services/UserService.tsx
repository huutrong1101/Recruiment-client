import axiosInstance from "../utils/AxiosInstance";
import { getLocalToken, hasLocalToken } from "../utils/localToken";

const getUserFromToken = async () => {
  if (!hasLocalToken()) {
    throw new Error(`Unable to load the token`);
  }
  return await axiosInstance.get(`/user/profile`, {
    // headers: {
    //   Authorization: `Bearer ${getLocalToken()}`,
    // },
  });
};

const changeUserAvatar = async (data: FormData) => {
  return await axiosInstance.put(`/user/avatar`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const UserService = {
  getUserFromToken,
  changeUserAvatar,
};
