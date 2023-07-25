import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "../pages/Home/slices/HomeSlice";
import NavbarSlice from "../components/Navbar/slices/NavbarSlice";

///
import CandidateRecentReducer from "./reducer/CandidateRecentSlice";
import INTInterviewsReducer from "./reducer/INTInterviewsSlice";
import INTCandidatesReducer from "./reducer/INTCandidatesSlice"
import SearchReducer from "./reducer/SearchSlice";
import AuthSlice from "./AuthSlice";
import CandidateListSlice from "./reducer/CandidateListSlice";

export const ApplicationStore = configureStore({
  reducer: {
    Home: HomeSlice,
    candidateList: CandidateListSlice,
    INTCandidates: INTCandidatesReducer,
    INTInterviews: INTInterviewsReducer,
    searchFeature: SearchReducer,
    candidateRecent: CandidateRecentReducer,
    Navbar: NavbarSlice,
    Auth: AuthSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof ApplicationStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof ApplicationStore.dispatch;
