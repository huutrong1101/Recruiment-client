import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/AxiosInstance";
const TypeSlice = createSlice({
  name: "typeList",
  initialState: {
    typeList: [],
  },
  reducers: {
    setTypeList(state, action) {
      state.typeList = action.payload;
    },
  },
});

export default TypeSlice.reducer;
export const { setTypeList } = TypeSlice.actions;
export const fetchTypeList = () => {
  return async function fetchTypeListThunk(dispatch: Dispatch) {
    const response = await axiosInstance.get(`interviewer/type-questions`);
    const data = await response.data;
    dispatch(setTypeList(data.result));
  };
};
