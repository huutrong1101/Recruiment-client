import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/Status";
const BASE_URL_FAKE_DATA = `https://api.escuelajs.co/api/v1/`;

const INTInterviewsSlice = createSlice({
  name: "INTInterviews",
  initialState: {
    INTInterviews: [],
    INTInterviewsStatus: STATUS.IDLE,
    INTSingleInterview: [],
    INTSingleInterviewStatus: STATUS.IDLE,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchINTInterviewsData.pending, (state) => {
        state.INTInterviewsStatus = STATUS.LOADING;
      })
      .addCase(fetchINTInterviewsData.fulfilled, (state, action) => {
        state.INTInterviews = action.payload;
        state.INTInterviewsStatus = STATUS.IDLE;
      })
      .addCase(fetchINTInterviewsData.rejected, (state) => {
        state.INTInterviewsStatus = STATUS.ERROR;
      })
      .addCase(fetchINTInterviewByID.pending, (state) => {
        state.INTSingleInterviewStatus = STATUS.LOADING;
      })
      .addCase(fetchINTInterviewByID.fulfilled, (state, action) => {
        state.INTSingleInterview = action.payload;
        state.INTSingleInterviewStatus = STATUS.IDLE;
      })
      .addCase(fetchINTInterviewByID.rejected, (state) => {
        state.INTSingleInterviewStatus = STATUS.ERROR;
      })
  }
});

export default INTInterviewsSlice.reducer;

export const fetchINTInterviewsData = createAsyncThunk(
  'INTInterviews/fetchINTInterviewsData', 
  async () => {
    const reponse = await fetch(`${BASE_URL_FAKE_DATA}users`);
    const data = await reponse.json();
    return data;
  }
);

export const fetchINTInterviewByID = createAsyncThunk<any, string | undefined>(
  'INTInterviews/fetchINTInterviewByID', 
  async (interviewID : string | undefined) => {
    const reponse = await fetch(`${BASE_URL_FAKE_DATA}users/${interviewID}`);
    const data = await reponse.json();
    return data;
  }
);