import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/Status";

const AdminAcountUseProfileSlice = createSlice({
  name: "adminacountuseprofileRecent",
  initialState: {
    adminacountuseprofileRecent: [],
    adminacountuseprofileRecentStatus: STATUS.IDLE,
  },
  reducers: {
    setAdminProfilesRecent(state, action) {
      state.adminacountuseprofileRecent = action.payload;
    },
    setAdminProfilesRecentStatus(state, action) {
      state.adminacountuseprofileRecentStatus = action.payload;
    },
  },
});

export default AdminAcountUseProfileSlice.reducer;
export const { setAdminProfilesRecent, setAdminProfilesRecentStatus } =
  AdminAcountUseProfileSlice.actions;

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
