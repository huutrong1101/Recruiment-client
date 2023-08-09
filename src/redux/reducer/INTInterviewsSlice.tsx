import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/Status";
import axiosInstance from "../../utils/AxiosInstance";
import { toast } from "react-toastify";

const INTInterviewsSlice = createSlice({
  name: "INTInterviews",
  initialState: {
    INTInterviews: [],
    INTInterviewsStatus: STATUS.IDLE,
    INTSingleInterview: [],
    INTSingleInterviewStatus: STATUS.IDLE,
    INTTotalPages: 0,
    INTTotalInterviews: 0,

    skills: [],
    types: [],
    skill: "",
    type: "",
    text: "",
  },
  reducers: {
    setType(state, action) {
      state.type = action.payload;
    },
    setSkill(state, action) {
      state.skill = action.payload;
    },
    setText(state, action) {
      state.text = action.payload;
    },
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
      .addCase(fetchINTInterviewsData.rejected, (state, action) => {
        if (action.error.message === "Request failed with status code 500") {
          state.INTInterviewsStatus = STATUS.ERROR500;
        } else if (
          action.error.message === "Request failed with status code 404"
        ) {
          state.INTInterviewsStatus = STATUS.ERROR404;
        } else {
          toast.error(`${action.error.message}`);
          state.INTInterviewsStatus = STATUS.IDLE;
        }
      })

      .addCase(fetchINTInterviewByID.pending, (state) => {
        state.INTSingleInterviewStatus = STATUS.LOADING;
      })
      .addCase(fetchINTInterviewByID.fulfilled, (state, action) => {
        state.INTSingleInterview = action.payload;
        state.INTSingleInterviewStatus = STATUS.IDLE;
      })
      .addCase(fetchINTInterviewByID.rejected, (state, action) => {
        if (action.error.message === "Request failed with status code 500") {
          state.INTSingleInterviewStatus = STATUS.ERROR500;
        } else if (
          action.error.message === "Request failed with status code 404"
        ) {
          state.INTSingleInterviewStatus = STATUS.ERROR404;
        } else {
          toast.error(`${action.error.message}`);
          state.INTSingleInterviewStatus = STATUS.IDLE;
        }
      })

      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.skills = action.payload;
      })
      .addCase(fetchTypes.fulfilled, (state, action) => {
        state.types = action.payload;
      });
  },
});

export default INTInterviewsSlice.reducer;
export const { setText, setSkill, setType } = INTInterviewsSlice.actions;

export const fetchINTInterviewsData = createAsyncThunk(
  "INTInterviews/fetchINTInterviewsData",
  async (query: string) => {
    const response = await axiosInstance.get(`/interviewer/interviews${query}`);
    return response.data.result;
  },
);

export const fetchINTInterviewByID = createAsyncThunk<any, string | undefined>(
  "INTInterviews/fetchINTInterviewByID",
  async (interviewID: string | undefined) => {
    const response = await axiosInstance.get(
      `/interviewer/interviews/${interviewID}`,
    );
    return response.data.result;
  },
);

export const fetchSkills = createAsyncThunk(
  "INTInterviews/fetchSkill",
  async () => {
    const response = await axiosInstance.get(`/interviewer/skills`);
    return response.data.result;
  },
);

export const fetchTypes = createAsyncThunk(
  "INTInterviews/fetchTypes",
  async () => {
    const response = await axiosInstance.get(`/interviewer/type-questions`);
    return response.data.result;
  },
);
