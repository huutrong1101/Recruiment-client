import axiosInstance from "../utils/AxiosInstance";

const createInterview = async (data: any) => {
  return await axiosInstance.post(`/recruiter/interviews`, data);
};

export const InterviewService = {
  createInterview,
};