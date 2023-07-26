import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { STATUS } from '../../utils/Status';
import axiosInstance from "../../utils/AxiosInstance";
import { getLocalToken } from "../../utils/localToken";
import { toast } from "react-toastify";


const INTCandidatesSlice = createSlice({
    name: 'INTCandidates',
    initialState: {
        INTCandidates: [],
        INTCandidatesStatus: STATUS.IDLE
    }, 
    reducers: {
      setINTCandidates(state, action){
        state.INTCandidates = action.payload;
      },
      setINTCandidatesStatus(state, action){
        state.INTCandidatesStatus = action.payload;
      }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchINTCandidatesData.pending, (state) => {
            state.INTCandidatesStatus = STATUS.LOADING;
          })
          .addCase(fetchINTCandidatesData.fulfilled, (state, action) => {
            state.INTCandidates = action.payload.content;
            state.INTCandidatesStatus = STATUS.IDLE;
          })
          .addCase(fetchINTCandidatesData.rejected, (state, action) => {
            state.INTCandidatesStatus = STATUS.ERROR;
          });
      }
});

export const {setINTCandidates, setINTCandidatesStatus} = INTCandidatesSlice.actions;
export default INTCandidatesSlice.reducer;

export const fetchINTCandidatesData = createAsyncThunk(
    'INTcandidates/fetchINTCandidatesData', 
    async (data, thunkAPI) => {
      try{
        const response = await axiosInstance.get(`/interviewer/candidates`,{
          headers: {
            Authorization: `Bearer ${getLocalToken()}`,
          },
        });
        return response.data.result;
      }catch(error : any){
        toast.error(`${error}`);
        thunkAPI.dispatch(setINTCandidatesStatus(STATUS.ERROR));
      }
    }
);

export const fetchINTCandidatesByID = createAsyncThunk(
  'INTcandidates/fetchINTCandidatesByID', 
  async (interviewID : string | undefined, thunkAPI) => {
    try{
      const response = await axiosInstance.get(`/interviewer/candidates/${interviewID}`,{
        headers: {
          Authorization: `Bearer ${getLocalToken()}`,
        },
      });
      return response.data.result;
    }catch(error : any){
      toast.error(`${error}`)
      thunkAPI.dispatch(setINTCandidatesStatus(STATUS.ERROR));
    }
  }
);