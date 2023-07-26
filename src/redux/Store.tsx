import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "../pages/Home/slices/HomeSlice";
import NavbarSlice from "../components/Navbar/slices/NavbarSlice";

///
import CandidateRecentReducer from "./reducer/CandidateRecentSlice";
import InterviewRecentReducer from "./reducer/InterviewRecentSlice";
import AuthSlice from "./AuthSlice";
<<<<<<< HEAD
import OneTimePasswordSlice from "../pages/OneTimePasswordVerify/slices/OneTimePasswordSlice";
=======
import CandidateListSlice from "./reducer/CandidateListSlice";
>>>>>>> feat/add-one-time-password-response

export const ApplicationStore = configureStore({
  reducer: {
    Home: HomeSlice,
    candidateList: CandidateListSlice,
    candidateRecent: CandidateRecentReducer,
    interviewRecent: InterviewRecentReducer,
    Navbar: NavbarSlice,
    Auth: AuthSlice,
    OneTimePassword: OneTimePasswordSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof ApplicationStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof ApplicationStore.dispatch;
