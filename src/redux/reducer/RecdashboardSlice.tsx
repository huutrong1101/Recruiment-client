import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/Status";

const RecDashboardSlice = createSlice({
  name: "RecDashboardList",
  initialState: {
    recDashboardList: [],
    recDashboardListStatus: STATUS.IDLE,
  },
  reducers: {
    setrecDashboardList(state, action) {
      state.recDashboardList = action.payload;
    },
    setrecDashboardListStatus(state, action) {
      state.recDashboardListStatus = action.payload;
    },
  },
});

export default RecDashboardSlice.reducer;
export const { setrecDashboardList, setrecDashboardListStatus } =
  RecDashboardSlice.actions;
