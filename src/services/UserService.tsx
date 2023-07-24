import axiosInstance from "../utils/AxiosInstance";

const getUserFromToken = async () => {
  return await axiosInstance.get(`/user/profile`);
};

export const UserService = {
  getUserFromToken,
};
