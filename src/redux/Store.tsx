import { configureStore } from "@reduxjs/toolkit";
import NavbarSlice from "../components/Navbar/slices/NavbarSlice";
import HomeSlice from "../pages/Home/slices/HomeSlice";

///
import INTCandidatesReducer from "./reducer/INTCandidatesSlice";
import INTInterviewsReducer from "./reducer/INTInterviewsSlice";
import INTQuestionsReducer from "./reducer/INTQuestionsSlice";

// import SearchReducer from "./reducer/SearchSlice";
import OneTimePasswordSlice from "../pages/OneTimePasswordVerify/slices/OneTimePasswordSlice";
import AuthSlice from "./AuthSlice";
import CandidateListSlice from "./reducer/CandidateListSlice";
import RecJobListSlice from "./reducer/RecJobSlice";
// Admin
import JobDetailSlice from "../pages/JobDetail/slice/JobDetailSlice";
import UserInterviewSlice from "../pages/UserProfile/slices/UserInterviewSlice";
import JobSlice from "./JobSlice";
import AdminAcountUseProfileSlice from "./reducer/AdminAcountUseProfileSlice";
import AdminAcountListSlice from "./reducer/AdminListAcountRecentSlice";
import AdminListJobRecentSlice from "./reducer/AdminListJobRecentSlice";
import AdminListPassRecentSlice from "./reducer/AdminListPassRecentSlice";
import AdminProfileRecentSlice from "./reducer/AdminProfileRecentSlice";
import QuestionListSlice from "./reducer/QuestionListSlice";
import RecEventSlice from "./reducer/RecEventSlice";
import RecInterviewerSilce from "./reducer/RecInterviewerSilce";
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
    RecDashboardList: RecdashboardSlice,

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
