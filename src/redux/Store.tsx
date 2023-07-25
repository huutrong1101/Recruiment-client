import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "../pages/Home/slices/HomeSlice";
import NavbarSlice from "../components/Navbar/slices/NavbarSlice";

///
import CandidateRecentReducer from "./reducer/CandidateRecentSlice";
import InterviewRecentReducer from "./reducer/InterviewRecentSlice";
import AuthSlice from "./AuthSlice";
import CandidateListSlice from "./reducer/CandidateListSlice";
import RecJobListSlice from "./reducer/RecJobSlice";
// Admin
import AdminListJobRecentSlice from "./reducer/AdminListJobRecentSlice";
import AdminProfileRecentSlice from "./reducer/AdminProfileRecentSlice";
import AdminAcountListSlice from "./reducer/AdminListAcountRecentSlice";
import AdminListPassRecentSlice from "./reducer/AdminListPassRecentSlice";

export const ApplicationStore = configureStore({
  reducer: {
    Home: HomeSlice,
    candidateList: CandidateListSlice,
    candidateRecent: CandidateRecentReducer,
    interviewRecent: InterviewRecentReducer,
    Navbar: NavbarSlice,
    Auth: AuthSlice,
    recjobList: RecJobListSlice,

    // Admin
    adminmanagerjobList: AdminListJobRecentSlice,
    adminprofilesRecent: AdminProfileRecentSlice,
    adminacountList: AdminAcountListSlice,
    adminmanagerpassList: AdminListPassRecentSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof ApplicationStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof ApplicationStore.dispatch;
