import axiosInstance from "../utils/AxiosInstance";
import {
  UserLoginParamsInterface,
  UserRegisterParamsInterface,
  UserVerifySendParamsInterface,
} from "./services";

async function register({
  fullName,
  email,
  phone,
  password,
  confirmPassword,
}: UserRegisterParamsInterface) {
  return axiosInstance.post(`/auth/register`, {
    fullName,
    email,
    phone,
    password,
    confirmPassword,
  });
}

function login({ credentialId, password }: UserLoginParamsInterface) {
  return axiosInstance.post(`/auth/login`, { credentialId, password });
}

function verifyOtp({ otp, email }: UserVerifySendParamsInterface) {
  if (otp === null || email === null || otp === "" || email === "") {
    throw new Error(`Invalid parameters`);
  }

  return axiosInstance.post(`/auth/verifyOTP`, { otp, email });
}

export const AuthService = {
  register,
  login,
  verifyOtp,
};
