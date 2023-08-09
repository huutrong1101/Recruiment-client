import { Dispatch, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/AxiosInstance";
import { STATUS } from "../../utils/Status";

const AdminListJobRecentSlice = createSlice({
  name: "adminmanagerjobList",
  initialState: {
    adminmanagerJobList: [],
    adminmanagerjobListStatus: STATUS.IDLE,
    totalListJobs: 0,
  },
  reducers: {
    setAdminManagerJobList(state, action) {
      state.adminmanagerJobList = action.payload;
    },
    setAdminManagerJobListStatus(state, action) {
      state.adminmanagerjobListStatus = action.payload;
    },
    setTotalListJobs(state, action) {
      state.totalListJobs = action.payload;
    },
  },
});
export default AdminListJobRecentSlice.reducer;

export const {
  setAdminManagerJobList,
  setAdminManagerJobListStatus,
  setTotalListJobs,
} = AdminListJobRecentSlice.actions;

export const fetchAdminManagerJobList = () => {
  return async function fetchAdminManagerJobListThunk(dispatch: Dispatch) {
    dispatch(setAdminManagerJobListStatus(STATUS.LOADING));
    try {
      const reponse = await axiosInstance.get("admin/jobs?size=8&page=1");
      const data = await reponse.data;
      const totalListJobs = reponse.data.result.totalElements;

      dispatch(setTotalListJobs(totalListJobs));
      dispatch(setAdminManagerJobList(data.result.content));
      dispatch(setAdminManagerJobListStatus(STATUS.IDLE));
    } catch (error) {
      dispatch(setAdminManagerJobListStatus(STATUS.ERROR));
    }
  };
};
