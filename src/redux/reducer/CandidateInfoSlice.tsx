import { createSlice } from '@reduxjs/toolkit'
import { STATUS } from '../../utils/Status'
import { Dispatch } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/AxiosInstance";

const CandidateInfoSlice = createSlice({
    name: 'candidateInfo',
    initialState: {
        candidateInfo: [],

    },
    reducers: {
        setCandidateInfo(state, action) {
            state.candidateInfo = action.payload
        },

    }
})

export default CandidateInfoSlice.reducer
export const { setCandidateInfo } = CandidateInfoSlice.actions

export const fetchCandidateInfo = () => {
    return async function fetchCandidateInfoThunk(dispatch: Dispatch) {
        const reponse = await axiosInstance.get(`user/profile`);
        const data = await reponse.data;
        dispatch(setCandidateInfo(data.result))
    };
}
