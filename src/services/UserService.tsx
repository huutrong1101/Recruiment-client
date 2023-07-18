import axiosInstance from "../utils/AxiosInstance";

const getUserFromToken = async (jwtToken: string) => {
  if (jwtToken === undefined || jwtToken === null) {
    throw new Error(`jwtToken parameter cannot be undefined or null`);
  }

  return await axiosInstance.post(`/api/user/profile`);
};

export const UserService = {
  getUserFromToken,
};
