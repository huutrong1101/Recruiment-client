import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "../pages/Home/slices/HomeSlice";
import NavbarSlice from "../components/Navbar/slices/NavbarSlice";

///
import CandidateRecentReducer from "./reducer/CandidateRecentSlice";
import INTInterviewsReducer from "./reducer/INTInterviewsSlice";
import INTCandidatesReducer from "./reducer/INTCandidatesSlice"
import SearchReducer from "./reducer/SearchSlice";
import AuthSlice from "./AuthSlice";
import OneTimePasswordSlice from "../pages/OneTimePasswordVerify/slices/OneTimePasswordSlice";
import CandidateListSlice from "./reducer/CandidateListSlice";
import RecJobListSlice from "./reducer/RecJobSlice";
// Admin
import AdminListJobRecentSlice from "./reducer/AdminListJobRecentSlice";
import AdminProfileRecentSlice from "./reducer/AdminProfileRecentSlice";
import AdminAcountListSlice from "./reducer/AdminListAcountRecentSlice";
import AdminListPassRecentSlice from "./reducer/AdminListPassRecentSlice";
import JobSlice from "./JobSlice";

export const ApplicationStore = configureStore({
  reducer: {
    Home: HomeSlice,
    Job: JobSlice,
    candidateList: CandidateListSlice,
    INTCandidates: INTCandidatesReducer,
    INTInterviews: INTInterviewsReducer,
    searchFeature: SearchReducer,
    candidateRecent: CandidateRecentReducer,
    Navbar: NavbarSlice,
    Auth: AuthSlice,
    OneTimePassword: OneTimePasswordSlice,

    RecJobList: RecJobListSlice,
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
