import axiosInstance from "../utils/AxiosInstance";

const createQuestion = async (data: any) => {
    return await axiosInstance.post(`/interviewer/question`, data);
  };

  const updateQuestion = async (data:any, questionId: string) => {
    return await axiosInstance.put(`/interviewer/question/${questionId}`, data);
  };

  export const InterviewService = {
    createQuestion,
    updateQuestion
  };
  