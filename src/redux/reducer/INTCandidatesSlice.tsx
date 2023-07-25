import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { STATUS } from '../../utils/Status';
const BASE_URL_FAKE_DATA = `https://api.escuelajs.co/api/v1/`;


const INTCandidatesSlice = createSlice({
    name: 'INTCandidates',
    initialState: {
        INTCandidates: [],
        INTCandidatesStatus: STATUS.IDLE
    }, 
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchINTCandidatesData.pending, (state) => {
            state.INTCandidatesStatus = STATUS.LOADING;
          })
          .addCase(fetchINTCandidatesData.fulfilled, (state, action) => {
            state.INTCandidates = action.payload;
            state.INTCandidatesStatus = STATUS.IDLE;
          })
          .addCase(fetchINTCandidatesData.rejected, (state) => {
            state.INTCandidatesStatus = STATUS.ERROR;
          });
      }
});

export default INTCandidatesSlice.reducer;

export const fetchINTCandidatesData = createAsyncThunk(
    'INTcandidates/fetchINTCandidatesData', 
    async () => {
        const reponse = await fetch(`${BASE_URL_FAKE_DATA}users`);
        const data = await reponse.json();
        return data;
    }
);