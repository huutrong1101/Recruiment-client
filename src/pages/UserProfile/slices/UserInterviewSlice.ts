import { UserService } from "./../../../services/UserService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetUsersInterviewsParams } from "../../../services/services";

interface UserInterview {
  interviewId: string;
  interviewLink: string;
  time: Date;
}

interface UserAddedInterview {
  interviews: UserInterview[];
  loadingState: LoadingState;
}

type LoadingState = "idle" | "failed" | "fulfill" | "pending";

const initialState: UserAddedInterview = {
  interviews: [],
  loadingState: "idle",
};

export const getUserInterviews = createAsyncThunk(
  "UserInterview/getUserInterview",
  async (args: GetUsersInterviewsParams, thunkAPI) => {
    try {
      const response = await UserService.getUserInterviews(args);
      // console.log(response);
      const { result } = response.data;
      // alert("ho");
    } catch (err: any) {
      // console.log({ error: err.response.data });
      // const status = err.response.status;
      // if (status === 404) {
      //   thunkAPI.rejectWithValue({ message: "User is not a candidate" });
      // }
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

const UserAddedInterview = createSlice({
  name: "UserAddedInterview",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUserInterviews.pending, (state) => {
      state.loadingState = "pending";
      state.interviews = [];
    });
  },
});

export const {} = UserAddedInterview.actions;

export default UserAddedInterview.reducer;
