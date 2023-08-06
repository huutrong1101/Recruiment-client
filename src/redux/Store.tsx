import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "../pages/Home/slices/HomeSlice";
import NavbarSlice from "../components/Navbar/slices/NavbarSlice";

/// 
import INTInterviewsReducer from "./reducer/INTInterviewsSlice";
import INTCandidatesReducer from "./reducer/INTCandidatesSlice";
import INTQuestionsReducer from "./reducer/INTQuestionsSlice";

// import SearchReducer from "./reducer/SearchSlice";
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
import QuestionListSlice from "./reducer/QuestionListSlice";
import RecInterviewerSilce from "./reducer/RecInterviewerSilce";
import AdminAcountUseProfileSlice from "./reducer/AdminAcountUseProfileSlice";
import RecEventSlice from "./reducer/RecEventSlice";
import JobDetailSlice from "../pages/JobDetail/slice/JobDetailSlice";
import UserInterviewSlice from "../pages/UserProfile/slices/UserInterviewSlice";
import RecdashboardSlice from "./reducer/RecdashboardSlice";

export const ApplicationStore = configureStore({
  reducer: {
    Home: HomeSlice,
    Job: JobSlice,
    candidateList: CandidateListSlice,
    userInterview: UserInterviewSlice,

    INTCandidates: INTCandidatesReducer,
    INTInterviews: INTInterviewsReducer,
    INTQuestions: INTQuestionsReducer,

    questionList: QuestionListSlice,

    // candidateRecent: CandidateRecentReducer,
    Navbar: NavbarSlice,
    Auth: AuthSlice,
    OneTimePassword: OneTimePasswordSlice,

    RecJobList: RecJobListSlice,
    RecInterviewerList: RecInterviewerSilce,
    RecDashboardList:RecdashboardSlice,

    // Admin
    adminmanagerjobList: AdminListJobRecentSlice,
    adminprofilesRecent: AdminProfileRecentSlice,
    adminacountList: AdminAcountListSlice,
    adminacountuseprofileRecent: AdminAcountUseProfileSlice,
    adminmanagerpassList: AdminListPassRecentSlice,
    //Recruiter
    recevent: RecEventSlice,

    JobDetail: JobDetailSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof ApplicationStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof ApplicationStore.dispatch;
