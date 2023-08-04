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
export interface AppliedCandidateListConfig {
  name?: string;
  state?: string;
}

export interface RecInterviewerListConfig {
  page?: number | string;
  size?: number | string;
  name?: string;
  skill?: string;
}

export interface RecInterviewerInterface {
  email: string;
  phone: string;
  fullName: string;
  avatar: string;
  address: string;
  about: string;
  skills: {
    skillId: number;
    name: string;
  }[];
  projects: {
    projectId: string;
    projectName: string;
    positionInProject: string;
    description: string;
  }[];
  awards: {
    awardId: string;
    awardName: string;
    awardOrganization: string;
    awardWinningTime: string;
  }[];
  experiences: {
    experienceId: string;
    companyName: string;
    position: string;
    time: string;
  }[];
  courses: {
    courseId: string;
    courseName: string;
    trainningOrganizations: string;
    completionTime: string;
  }[];
  certificates: {
    certificateId: string;
    certificateName: string;
    certificateBody: string;
    certificationTime: string;
  }[];
  educations: {
    educationId: string;
    schoolName: string;
    specialized: string;
    certificate: string;
  }[];
  dateOfBirth: string;
  interviewerId: string;
}

export interface RecCandidateList {
  index?: number | string;
  size?: number | string;
  name?: string;
  skill?: string;
}
export interface RecCandidateInterface {
  email: string;
  phone: number | string;
  fullName: any;
  avatar: string;
  address: string;
  about: string;
  skills: {
    skillId: number;
    name: string;
  }[];
  projects: {
    projectId: string;
    projectName: string;
    positionInProject: string;
    description: string;
  }[];
  awards: {
    awardId: string;
    awardName: string;
    awardOrganization: string;
    awardWinningTime: string;
  }[];
  experiences: {
    experienceId: string;
    companyName: string;
    position: string;
    time: string;
  }[];
  courses: {
    courseId: string;
    courseName: string;
    trainningOrganizations: string;
    completionTime: string;
  }[];
  certificates: {
    certificateId: string;
    certificateName: string;
    certificateBody: string;
    certificationTime: string;
  }[];
  educations: {
    educationId: string;
    schoolName: string;
    specialized: string;
    certificate: string;
  }[];
  dateOfBirth: string;
  interviewerId: string;
}

export interface JobReccerListConfig {
  page?: number | string;
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
export interface AdminJobListConfig {
  page?: number | string;
  size?: number | string;
}
export interface AdminJobInterface {
  idJob: string;
  name: string;
  date: string;
  quantity: number;
  member: string;
}

export interface AdminJobPassInterface {
  name: string;
  date: string;
  phone: number;
  score: string;
}

export interface AdminJobPassListConfig {
  page?: number | string;
  size?: number | string;
  id?: number | string;
}
export interface AcountFrofileInterface {
  userId: string;
  name: string;
  createdAt: string;
  phone: number;
  address: string;
  blackDate: string;
  blackReason: string;
  email: string;
  role: string;
}
export interface AcountFrofileInterfaceConfig {}

export interface AcountInterface {
  name: string;
  date: string;
  phone: number;
  email: string;
  id: string;
}

export interface AcountConfig {
  index: number
  page?: number | string;
  size?: number | string;
  searchText?: string;
  searchBy?: string;
}

export interface QuestionListConfig{
  page?: number | string;
  size?: number | string;
  skill?: string
  type?: string
  note?: number | string,
  content?: string
}

export interface QuestionListInterface{
    skill: string
    type: string
    questionId?: number | string,
    note: number | string,
    content: string
  
}

export interface TypeListInterface{
  type: string
}

export interface SkillListInterface{
  skillId: number
  skill: string
}

export interface DataSearchInterface{
  skill?: string
  type?: string
}

export interface Pagable {
  page?: number | string;
  limit?: number | string;
}

export interface GetUsersInterviewsParams extends Pagable {}

export interface ResumeResponse {
  resumeId: string;

  socialActivity: null;
  upload: true;
  resumeUpload: "https://res.cloudinary.com/dc6weg8vp/image/upload/v1690873255/Recruiment%20Assets/CV/internship_resume.pdf.pdf";
  createAt: string;
  updateAt: string;
  name: string;
}

export type LoadingStatus = "pending" | "idle" | "failed" | "fulfill";
