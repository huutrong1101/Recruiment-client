import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/Status";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
const BASE_URL_FAKE_DATA = `https://api.escuelajs.co/api/v1/`;

const CandidateRecentSlice = createSlice({
  name: "candidateRecent",
  initialState: {
    candidatesRecent: [],
    candidatesRecentStatus: STATUS.IDLE,
  },
  reducers: {
    setCandidatesRecent(state, action) {
      state.candidatesRecent = action.payload;
    },
    setCandidatesRecentStatus(state, action) {
      state.candidatesRecentStatus = action.payload;
    },
  },
});

export default CandidateRecentSlice.reducer;
export const { setCandidatesRecent, setCandidatesRecentStatus } =
  CandidateRecentSlice.actions;

export const fetchCandidateRecent = () => {
  return async function fetchCandidateRecentThunk(dispatch: Dispatch) {
    dispatch(setCandidatesRecentStatus(STATUS.LOADING));
    try {
      const reponse = await fetch(`${BASE_URL_FAKE_DATA}users`);
      const data = await reponse.json();
      dispatch(setCandidatesRecent(data));
      dispatch(setCandidatesRecentStatus(STATUS.IDLE));
    } catch (error) {
      dispatch(setCandidatesRecentStatus(STATUS.ERROR));
    }
  };
};
