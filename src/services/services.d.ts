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
  limit?: number | string;
  name?: string;
  category?: string;
  location?: string;
  jobType?: string;
}
