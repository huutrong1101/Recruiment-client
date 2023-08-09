import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/Status";
import { Dispatch } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/AxiosInstance";

const RecEventSlice = createSlice({
  name: "RecEventRecent",
  initialState: {
    RecEventRecent: [],
    RecEventRecentStatus: STATUS.IDLE,
  },
  reducers: {
    setAdminProfilesRecent(state, action) {
      state.RecEventRecent = action.payload;
    },
    setAdminProfilesRecentStatus(state, action) {
      state.RecEventRecentStatus = action.payload;
    },
  },
});

export default RecEventSlice.reducer;
export const { setAdminProfilesRecent, setAdminProfilesRecentStatus } =
  RecEventSlice.actions;

export const fetchAdminProfileRecent = () => {
  // return async function fetchAdminProfileRecentThunk(dispatch : Dispatch){
  //     dispatch(setAdminProfilesRecentStatus(STATUS.LOADING));
  //     try{
  //         const reponse = await axiosInstance.get("admin/users/:userId");
  //         const data = await reponse.data;
  //         console.log(data.result);
  //         dispatch(setAdminProfilesRecent(data.result));
  //         dispatch(setAdminProfilesRecentStatus(STATUS.IDLE));
  //     }catch(error){
  //         dispatch(setAdminProfilesRecentStatus(STATUS.ERROR));
  //     }
  // };
};
