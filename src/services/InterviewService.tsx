import axiosInstance from "../utils/AxiosInstance";

const createInterview = async (data: any) => {
  return await axiosInstance.post(`/recruiter/interviews`, data);
};

const updateQuestion = async (data:any, questionID:string ) => {
  return await axiosInstance.put(`/recruiter/interviews/${questionID}`, data);
}

export const InterviewService = {
  createInterview,
  updateQuestion,
};