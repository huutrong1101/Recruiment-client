import { Dispatch, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/AxiosInstance";
import { STATUS } from "../../utils/Status";

const AdminProfileRecentSlice = createSlice({
  name: "adminprofilesRecent",
  initialState: {
    adminprofilesRecent: [],
    adminprofilesRecentStatus: STATUS.IDLE,
  },
  reducers: {
    setAdminProfilesRecent(state, action) {
      state.adminprofilesRecent = action.payload;
    },
    setAdminProfilesRecentStatus(state, action) {
      state.adminprofilesRecentStatus = action.payload;
    },
  },
});

export default AdminProfileRecentSlice.reducer;
export const { setAdminProfilesRecent, setAdminProfilesRecentStatus } =
  AdminProfileRecentSlice.actions;

export const fetchAdminProfileRecent = () => {
  return async function fetchAdminProfileRecentThunk(dispatch: Dispatch) {
    dispatch(setAdminProfilesRecentStatus(STATUS.LOADING));
    try {
      const reponse = await axiosInstance.get("user/profile");
      const data = await reponse.data;
      console.log(data.result);
      dispatch(setAdminProfilesRecent(data.result));
      dispatch(setAdminProfilesRecentStatus(STATUS.IDLE));
    } catch (error) {
      dispatch(setAdminProfilesRecentStatus(STATUS.ERROR));
    }
  };
};
