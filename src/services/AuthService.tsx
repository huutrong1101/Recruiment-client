import axiosInstance from "../utils/AxiosInstance";
import {
  UserLoginParamsInterface,
  UserRegisterParamsInterface,
} from "./services";

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

function login({ credentialId, password }: UserLoginParamsInterface) {
  return axiosInstance.post(`/api/auth/login`, { credentialId, password });
}

export const AuthService = {
  register,
  login,
};
