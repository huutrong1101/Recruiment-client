import axiosInstance from "../utils/AxiosInstance";

export interface UserRegisterParamsInterface {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

async function register({
  fullName,
  email,
  phone,
  password,
  confirmPassword,
}: UserRegisterParamsInterface) {
  return axiosInstance.post(`/api/auth/register`, {
    fullName,
    email,
    phone,
    password,
    confirmPassword,
  });
}

function login() {}

export const AuthService = {
  register,
};
