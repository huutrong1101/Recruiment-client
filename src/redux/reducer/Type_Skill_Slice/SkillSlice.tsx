import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/AxiosInstance";
const SkillSlice = createSlice({
  name: "SkillList",
  initialState: {
    skillList: [],
  },
  reducers: {
    setSkillList(state, action) {
      state.skillList = action.payload;
    },
  },
});

export default SkillSlice.reducer;
export const { setSkillList } = SkillSlice.actions;
