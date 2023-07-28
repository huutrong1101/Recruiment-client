import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/Status";
import {Dispatch} from "@reduxjs/toolkit"
import axiosInstance from "../../utils/AxiosInstance";

const RecInterviewerSlice = createSlice({
    name:"RecInterviewerList",
    initialState:{
        recInterviewerList: [],
        recInterviewerListStatus: STATUS.IDLE,
        recInterviewerTotal: 0,
    },
    reducers :{
        setRecInterviewerList(state,action){
            state.recInterviewerList = action.payload
        },
        setRecInterviewerListStatus(state,action){
            state.recInterviewerListStatus = action.payload
        },
        setrecInterviewerTotal(state,action){
            state.recInterviewerTotal = action.payload
        },
    },
})

export default RecInterviewerSlice.reducer
export const {setRecInterviewerList, setRecInterviewerListStatus,setrecInterviewerTotal} = RecInterviewerSlice.actions

export const fetchRecInterviewerList =()=>{
    return async function fetchRecInterviewerListThunk(dispatch:Dispatch){
        dispatch(setRecInterviewerListStatus(STATUS.LOADING))
        try{
            const response = await axiosInstance.get(`recruiter/interviewers`);
            const data = await response.data
            dispatch(setRecInterviewerList(data.result.content))
            dispatch(setRecInterviewerListStatus(STATUS.IDLE))
        } catch(error){
            dispatch(setRecInterviewerListStatus(STATUS.ERROR))
        }
    }
}