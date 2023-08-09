import { createSlice } from "@reduxjs/toolkit";

interface UserSubmittedJobInterface {
  // jobs: [];
}

const initialState: UserSubmittedJobInterface = {};

const UserSubmittedJob = createSlice({
  name: "UserSubmittedJob",
  initialState,
  reducers: {},
});

export const {} = UserSubmittedJob.actions;

export default UserSubmittedJob.reducer;
