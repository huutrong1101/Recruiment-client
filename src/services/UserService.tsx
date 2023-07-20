import axiosInstance from "../utils/AxiosInstance";

const getUserFromToken = async (jwtToken: string) => {
  if (jwtToken === undefined || jwtToken === null) {
    throw new Error(`jwtToken parameter cannot be undefined or null`);
  }

  return await axiosInstance.get(`/api/user/profile`, {
    headers: { Authorization: `Bearer ${jwtToken}` },
  });
};

export const UserService = {
  getUserFromToken,
};
