import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "../pages/Home/slices/HomeSlice";

/// 
import CandidateRecentReducer from "./reducer/CandidateRecentSlice";
import InterviewRecentReducer from "./reducer/InterviewRecentSlice";

export const ApplicationStore = configureStore({
  reducer: {
    Home: HomeSlice,
    candidateRecent: CandidateRecentReducer,
    interviewRecent: InterviewRecentReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof ApplicationStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof ApplicationStore.dispatch;
