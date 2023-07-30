import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/Status";
import { getLocalToken } from "../../utils/localToken";
import axiosInstance from "../../utils/AxiosInstance";

const INTInterviewsSlice = createSlice({
  name: "INTInterviews",
  initialState: {
    INTInterviews: [],
    INTInterviewsStatus: STATUS.IDLE,
    INTSingleInterview: [],
    INTSingleInterviewStatus: STATUS.IDLE,
    INTTotalPages: 0,
    INTTotalInterviews: 0
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchINTInterviewsData.pending, (state) => {
        state.INTInterviewsStatus = STATUS.LOADING;
      })
      .addCase(fetchINTInterviewsData.fulfilled, (state, action) => {
        state.INTInterviews = action.payload.content;
        state.INTTotalPages = action.payload.totalPages;
        state.INTTotalInterviews = action.payload.totalElements;
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
  async (query : string) => {
    const response = await axiosInstance.get(`/interviewer/interviews${query}`,{
      headers: {
        Authorization: `Bearer ${getLocalToken()}`,
      },
    });
    return response.data.result;
  }
);

export const fetchINTInterviewByID = createAsyncThunk<any, string | undefined>(
  'INTInterviews/fetchINTInterviewByID', 
  async (interviewID : string | undefined) => {
    const response = await axiosInstance.get(`/interviewer/interviews/${interviewID}`,{
      headers: {
        Authorization: `Bearer ${getLocalToken()}`,
      },
    });
    return response.data.result;
  }
); 