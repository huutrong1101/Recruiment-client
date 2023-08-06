import axiosInstance from "../utils/AxiosInstance";
import { useState } from "react";
const createInterview = async (data: any) => {
  return await axiosInstance.post(`/recruiter/interviews`, data);
};

const createQuestion = async (data: any) => {
  return await axiosInstance.post(`interviewer/question`, data);
};

const updateQuestion = async (data: any, questionID: string) => {
  return await axiosInstance.put(`interviewer/question/${questionID}`, data);
}

const deleteQuestion = async (questionID: string) => {
  return await axiosInstance.delete('interviewer/question/' + questionID)
}

const error = async (data: any) => {
  return await axiosInstance.post(`interviewer/question`, data);
}


export const InterviewService = {
  createInterview,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  error, 
};