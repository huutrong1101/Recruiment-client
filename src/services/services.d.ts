export interface UserRegisterParamsInterface {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface UserLoginParamsInterface {
  credentialId: string;
  password: string;
}
