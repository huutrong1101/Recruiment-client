import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { STATUS } from "../../utils/Status";
import { getLocalToken } from "../../utils/localToken";
import axiosInstance from "../../utils/AxiosInstance";


interface INTQuestionsState {
    questionsForInterview: any[],
    searchQuestionsStatus: STATUS,
    searchQuestions: any[]
}

const initialState: INTQuestionsState = {
    questionsForInterview: [],
    searchQuestionsStatus: STATUS.IDLE,
    searchQuestions: [],
};

const INTQuestionsSlice = createSlice({
    name: 'INTQuestions',
    initialState,
    reducers: {
        assignQuestions(state, action){
            const isQuestionExist = state.questionsForInterview.find(question => question.questionId === action.payload.questionId);
            if(!isQuestionExist) state.questionsForInterview.push(action.payload);
        },
        removeQuestions(state, action){
            state.questionsForInterview = state.questionsForInterview.filter(question => question.questionId !== action.payload.questionId);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchINTQuestionData.pending, (state) => {
                state.searchQuestionsStatus = STATUS.LOADING;
            })
            .addCase(fetchINTQuestionData.fulfilled, (state, action) => {
                state.searchQuestions = action.payload;
                state.searchQuestionsStatus = STATUS.IDLE;
            })
            .addCase(fetchINTQuestionData.rejected, (state) => {
                state.searchQuestionsStatus = STATUS.IDLE;
                state.searchQuestions = [];
            })
    }
});

export default INTQuestionsSlice.reducer;
export const {assignQuestions, removeQuestions} = INTQuestionsSlice.actions;

export const fetchINTQuestionData = createAsyncThunk(
    'INTQuestions/fetchINTQuestionData',
    async(query : string = "") => {
        const response = await axiosInstance.get(`/interviewer/question${query}`,{
            headers: {
              Authorization: `Bearer ${getLocalToken()}`,
            },
          });
        return response.data.result;
    }
)
