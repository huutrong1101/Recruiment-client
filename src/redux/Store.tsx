import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "../pages/Home/slices/HomeSlice";
import NavbarSlice from "../components/Navbar/slices/NavbarSlice";

/// 
import CandidateRecentReducer from "./reducer/CandidateRecentSlice";
import InterviewRecentReducer from "./reducer/InterviewRecentSlice";

export const ApplicationStore = configureStore({
  reducer: {
    Home: HomeSlice,
    candidateRecent: CandidateRecentReducer,
    interviewRecent: InterviewRecentReducer,
    Navbar: NavbarSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof ApplicationStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof ApplicationStore.dispatch;
