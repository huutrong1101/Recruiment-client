import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { STATUS } from '../../utils/Status';
import axiosInstance from "../../utils/AxiosInstance";
import { getLocalToken } from "../../utils/localToken";
import { toast } from "react-toastify";


const INTCandidatesSlice = createSlice({
    name: 'INTCandidates',
    initialState: {
        INTCandidates: [],
        INTCandidatesStatus: STATUS.IDLE,
        INTSingleCandidate: [],
        INTSingleCandidateStatus: STATUS.IDLE,
        INTTotalCandidates: 0,
        INTTotalPages: 0
    }, 
    reducers: {
      setINTCandidates(state, action){
        state.INTCandidates = action.payload;
      },
      setINTCandidatesStatus(state, action){
        state.INTCandidatesStatus = action.payload;
      },
      setINTSingleCandidate(state, action){
        state.INTSingleCandidate = action.payload;
      },
      setINTSingleCandidateStatus(state, action){
        state.INTSingleCandidateStatus = action.payload;
      },

    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchINTCandidatesData.pending, (state) => {
            state.INTCandidatesStatus = STATUS.LOADING;
          })
          .addCase(fetchINTCandidatesData.fulfilled, (state, action) => {
            state.INTCandidates = action.payload.content;
            state.INTTotalCandidates = action.payload.totalElements;
            state.INTTotalPages = action.payload.totalPages;
            state.INTCandidatesStatus = STATUS.IDLE;
          })
          .addCase(fetchINTCandidatesData.rejected, (state, action) => {
            toast.error(`${action.error.message}`)
            state.INTCandidatesStatus = STATUS.ERROR;
          })


          .addCase(fetchINTCandidatesByID.pending, (state) => {
            state.INTSingleCandidateStatus = STATUS.LOADING;
          })
          .addCase(fetchINTCandidatesByID.fulfilled, (state, action) => {
            state.INTSingleCandidate = action.payload;
            state.INTSingleCandidateStatus = STATUS.IDLE;

          })
          .addCase(fetchINTCandidatesByID.rejected, (state, action) => {
            toast.error(`${action.error.message}`)
            state.INTSingleCandidateStatus = STATUS.ERROR;
          });
      }
});

export const {setINTCandidates, setINTCandidatesStatus, 
              setINTSingleCandidate, setINTSingleCandidateStatus} = INTCandidatesSlice.actions;
export default INTCandidatesSlice.reducer;

export const fetchINTCandidatesData = createAsyncThunk(
    'INTcandidates/fetchINTCandidatesData', 
    async (query : string, thunkAPI) => {
        const response = await axiosInstance.get(`/interviewer/candidates${query}`);
        return response.data.result;
    }
);

export const fetchINTCandidatesByID = createAsyncThunk(
  'INTcandidates/fetchINTCandidatesByID', 
  async (interviewID : any, thunkAPI) => {
      const response = await axiosInstance.get(`/interviewer/candidates/${interviewID}`);
      return response.data.result;
  }
);


