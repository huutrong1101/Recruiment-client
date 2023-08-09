import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/AxiosInstance";
import { Dispatch } from "@reduxjs/toolkit";
const CreateQuestionSlice = createSlice({
  name: "createQuestion",
  initialState: {
    createQuestion: [],
  },
  reducers: {
    setCreateQuestion(state, action) {
      state.createQuestion = action.payload;
    },
  },
});

export default CreateQuestionSlice.reducer;
export const setCreateQuestion = CreateQuestionSlice.actions;

export const postCreateQuestion = async (data: any) => {
  return await axiosInstance.post(`interviewer/question`, data);
};
