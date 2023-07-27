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

export interface UserVerifySendParamsInterface {
  otp: string;
  email: string;
}
export interface JobInterface {
  jobId: string;
  name: string;
  jobType: string;
  quantity: number;
  benefit: string;
  salaryRange: string;
  requirement: string;
  location: string;
  description: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string | null;
  deadline: string;
  position: {
    positionId: string;
    name: string;
  };
  skills: {
    skillId: string;
    name: string;
  }[];
}

export interface JobListConfig {
  index?: number | string;
  size?: number | string;
  name?: string;
  type?: string;
  location?: string;
  posName?: string;
}

export interface EventInterface {
  id: string;
  title: string;
  name: string;
  description: string;
  img: string | null;
  author: string;
  linkContacts: {
    Instagram: string;
    LinkedIn: string;
    Twitter: string;
    Facebook: string;
    Gitlab: string;
  };
  startAt: string;
  deadline: string;
  time: string;
  location: string;
}
