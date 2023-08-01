import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/Status";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import axiosInstance from "../../utils/AxiosInstance";


const QuestionListSLice = createSlice({
    name: 'questionList',
    initialState: {
        questionList: [],
        questionListStatus: STATUS.IDLE,
        totalQuestions: 0,
        listType: [],
        listSkill: [],
    },
    reducers: {
        setQuestionList(state, action){
            state.questionList = action.payload
        },
        setQuestionStatus(state, action){
            state.questionListStatus = action.payload
        },
        setTotalQuestion(state, action){
            state.totalQuestions = action.payload
        },
        setListType(state, action){
            state.listType = action.payload
        },
        setListSkill(state, action){
            state.listType = action.payload
        },
    }
})

export default QuestionListSLice.reducer
export const {
    setQuestionList, 
    setQuestionStatus, 
    setTotalQuestion, 
    setListSkill, 
    setListType
} = QuestionListSLice.actions

export const fetchQuestionList = () => {
    return async function fetchQuestionThunk(dispatch : Dispatch){ 
        dispatch(setQuestionStatus(STATUS.LOADING));
        try{
            const reponse = await axiosInstance.get(`interviewer/question`);
            const data = await reponse.data;
            // console.log(data)
            dispatch(setQuestionList(data.result.content));
            // dispatch(setQuestionStatus(STATUS.IDLE));
        }catch(error){
            dispatch(setQuestionStatus(STATUS.ERROR));
        }
    };
}
