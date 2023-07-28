import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/Status";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import axiosInstance from "../../utils/AxiosInstance";
const BASE_URL_FAKE_DATA = `https://api.escuelajs.co/api/v1/`;
// const BASE_URL_FAKE_DATA = `http://localhost:8080/api/v1/`;

const CandidateListSlice = createSlice({
  name: "candidateList",
  initialState: {
    candidatesList: [],
    candidatesListStatus: STATUS.IDLE,
  },
  reducers: {
    setCandidatesList(state, action) {
      state.candidatesList = action.payload;
    },
    setCandidatesListStatus(state, action) {
      state.candidatesListStatus = action.payload;
    },
  },
});

export default CandidateListSlice.reducer;
export const { setCandidatesList, setCandidatesListStatus } =
  CandidateListSlice.actions;

export const fetchCandidateList = () => {
  return async function fetchCandidateListThunk(dispatch: Dispatch) {
    dispatch(setCandidatesListStatus(STATUS.LOADING));
    try {
      const reponse = await fetch(`${BASE_URL_FAKE_DATA}users`);
      const data = await reponse.json();
      dispatch(setCandidatesList(data));
      dispatch(setCandidatesListStatus(STATUS.IDLE));
    } catch (error) {
      dispatch(setCandidatesListStatus(STATUS.ERROR));
    }
  };
};
