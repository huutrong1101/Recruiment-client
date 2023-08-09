import { Dispatch, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/AxiosInstance";
import { STATUS } from "../../utils/Status";

const AdminListPassRecentSlice = createSlice({
  name: "adminmanagerpassList",
  initialState: {
    adminmanagerpassList: [],
    adminmanagerpassListStatus: STATUS.IDLE,
    totalListPassJobs: 0,
  },
  reducers: {
    setAdminManagerPassList(state, action) {
      state.adminmanagerpassList = action.payload;
    },
    setAdminManagerPassListStatus(state, action) {
      state.adminmanagerpassListStatus = action.payload;
    },
    setTotalListPassJobs(state, action) {
      state.totalListPassJobs = action.payload;
    },
  },
});
export default AdminListPassRecentSlice.reducer;

export const {
  setAdminManagerPassList,
  setAdminManagerPassListStatus,
  setTotalListPassJobs,
} = AdminListPassRecentSlice.actions;

export const fetchAdminManagerPassList = () => {
  return async function fetchAdminManagerPassListThunk(dispatch: Dispatch) {
    dispatch(setAdminManagerPassListStatus(STATUS.LOADING));
    try {
      const reponse = await axiosInstance.get("/admin/jobs/1?page=1&size=10");
      const data = await reponse.data;
      const totalListPassJobs = reponse.data.result.totalElements;
      console.log(data.result.content);
      dispatch(setTotalListPassJobs(totalListPassJobs));
      dispatch(setAdminManagerPassList(data.result.content));
      dispatch(setAdminManagerPassListStatus(STATUS.IDLE));
    } catch (error) {
      dispatch(setAdminManagerPassListStatus(STATUS.ERROR));
    }
  };
};
