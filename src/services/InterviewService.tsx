import axiosInstance from "../utils/AxiosInstance";

// const createInterview = async (data: any) => {
//   return await axiosInstance.post(`/recruiter/interviews`, data);
// };

const createQuestion = async (data: any) => {
  return await axiosInstance.post(`interviewer/question`, data);
};

const updateQuestion = async (data:any, questionID:string ) => {
  return await axiosInstance.put(`interviewer/question/${questionID}`, data);
}

export const InterviewService = {
  createQuestion,
  updateQuestion,
};