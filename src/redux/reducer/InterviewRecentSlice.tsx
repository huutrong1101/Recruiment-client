import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from '../../utils/Status';
import { Dispatch } from '@reduxjs/toolkit';
const BASE_URL_FAKE_DATA = `https://api.escuelajs.co/api/v1/`;


const InterviewRecentSlice = createSlice({
    name: 'interviewRecent',
    initialState: {
        interviewsRecent: [],
        interviewsRecentStatus: STATUS.IDLE
    },
    reducers: {
        setInterviewsRecent(state, action){
            state.interviewsRecent = action.payload;
        },
        setInterviewsRecentStatus(state, action){
            state.interviewsRecentStatus = action.payload;
        }
    }
});

export default InterviewRecentSlice.reducer;
export const { setInterviewsRecent, setInterviewsRecentStatus } =  InterviewRecentSlice.actions;

export const fetchInterviewRecent = () => {
    return async function fetchInterviewRecentThunk(dispatch : Dispatch){
        dispatch(setInterviewsRecentStatus(STATUS.LOADING));
        try{
            const reponse = await fetch(`${BASE_URL_FAKE_DATA}products`);
            const data = await reponse.json();
            dispatch(setInterviewsRecent(data));
            dispatch(setInterviewsRecentStatus(STATUS.IDLE));
        }catch(error){
            dispatch(setInterviewsRecentStatus(STATUS.ERROR));
        }
    };
}