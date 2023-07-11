import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

import Authenticate from "./pages/Authenticate/Authenticate";
import AuthenticateLogin from "./pages/Authenticate/AuthenticateLogin";
import AuthenticateSignUp from "./pages/Authenticate/AuthenticateSignUp";
import VerifyEmail from "./pages/EmailConfirmation/IncompleteConfirmEmail";
import UserAppLayout from "./components/Layout/UserAppLayout";
import AdminAppLayout from "./components/Layout/AdminAppLayout";
import RecruiterAppLayout from "./components/Layout/RecruiterAppLayout";
import InterviewerAppLayout from "./components/Layout/InterviewerAppLayout";

import Jobs from "./pages/Jobs/Jobs";
import Events from "./pages/Events/Events";
import EmailConfirmationLayout from "./pages/EmailConfirmation/EmailConfirmationLayout";
import IncompleteConfirmEmail from "./pages/EmailConfirmation/IncompleteConfirmEmail";
import CompleteConfirmEmail from "./pages/EmailConfirmation/CompleteConfirmEmail";
import ReccerDashboard from "./pages/Reccer/Reccer_dashboard";
import CandidateProfile from "./pages/Reccer/CandidateProfile";
import CandidateList from "./pages/Reccer/CandidateList";
import JobDetail from "./pages/JobDetail/JobDetail";

import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminProfile from "./pages/Admin/AdminProfile";
import AdminChangePosition from "./pages/Admin/AdminChangePosition";
import AddBlacklist from "./pages/Admin/AddBlacklist";
import ManagetJobList from "./components/AdminManagerList/ManagetJobList";

export default function App() {
  const activeMenu = false;
  return (
    // <<<<<<< src/App.tsx
    <BrowserRouter>
      {/* Route switcher */}

      <Routes>
        <Route path="/" element={<UserAppLayout />}>
          <Route path="auth" element={<Authenticate />}>
            <Route index path="login" element={<AuthenticateLogin />} />
            <Route index path="signup" element={<AuthenticateSignUp />} />
            <Route index element={<AuthenticateLogin />} />
          </Route>
          <Route path="/email" element={<EmailConfirmationLayout />}>
            <Route path="incomplete" element={<IncompleteConfirmEmail />} />
            <Route path="complete" element={<CompleteConfirmEmail />} />
          </Route>

          <Route path="/jobs/:jobId" element={<JobDetail />} />

          <Route index element={<Home />} />
          <Route index path="jobs" element={<Jobs />} />
          <Route index path="events" element={<Events />} />
        </Route>

         <Route path="/admin" element={<AdminAppLayout />}>

            <Route path="AdminDashboard" index element={<AdminDashboard />} />
          <Route path="/email" element={<EmailConfirmationLayout />}>
            <Route path="AdminProfile" index element={<AdminProfile />} />
            <Route path="incomplete" element={<IncompleteConfirmEmail />} />
            <Route path="AdminJobManager" index element={<ManagetJobList />} />
            <Route path="complete" element={<CompleteConfirmEmail />} />

          </Route>
            <Route

              path="ChangPosition"
          <Route path="/jobs/:jobId" element={<JobDetail />} />
              index

              element={<AdminChangePosition />}
          <Route index element={<Home />} />
            />
          <Route index path="jobs" element={<Jobs />} />
            <Route path="AddBlacklist" index element={<AddBlacklist />} />
          <Route index path="events" element={<Events />} />
          </Route>


        <Route path="/recruiter" element={<RecruiterAppLayout />}>
          {/* Define recruiter routes here */}
          <Route path="dashboard" index element={<ReccerDashboard />} />
          <Route path="candidateinfo" index element={<CandidateProfile />} />
          <Route path="candidatelist" index element={<CandidateList />} />
        </Route>

        <Route path="/interviewer" element={<InterviewerAppLayout />}>
          {/* Define interviewer routes here */}
        </Route>
        <Route path="/" element={<CandidateProfile />} />
      </Routes>

    </BrowserRouter>
  );
}
