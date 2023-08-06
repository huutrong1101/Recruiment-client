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

const [click, setClick] = useState(false)
const handleClick = () => {
  setClick(!click)
}

const type = async (click:any) => {
  handleClick
  return await axiosInstance.post(`interviewer/question`, click);
  
}

export const InterviewService = {
  createInterview,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  error, 
  type
};