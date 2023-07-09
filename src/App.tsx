import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

import Authenticate from "./pages/Authenticate/Authenticate";
import AuthenticateLogin from "./pages/Authenticate/AuthenticateLogin";
import AuthenticateSignUp from "./pages/Authenticate/AuthenticateSignUp";
import UserAppLayout from "./components/Layout/UserAppLayout";
import AdminAppLayout from "./components/Layout/AdminAppLayout";
import RecruiterAppLayout from "./components/Layout/RecruiterAppLayout";
import InterviewerAppLayout from "./components/Layout/InterviewerAppLayout";
import Jobs from "./pages/Jobs/Jobs";
import Events from "./pages/Events/Events";
import EventDetail from "./pages/EventDetail/EventDetail";
import Contact from "./pages/Contact/Contact";
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
import Reccer_JobManagement from "./pages/Reccer/Reccer_JobManagement";
import Reccer_dashboard from "./pages/Reccer/Reccer_dashboard";
import Reccer_calender from "./pages/Reccer/Reccer_calender";
import Reccer_InterviewerManagement from "./pages/Reccer/Reccer_InterviewerManagement";
import Reccer_EventManagement from "./pages/Reccer/Reccer_EventManagement";

export default function App() {
  return (
    <BrowserRouter>
      {/* Route switcher */}
      
      <Routes>
        <Route path="/" element={<UserAppLayout />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="/jobs/:jobId" element={<JobDetail />} />
          <Route path="events" element={<Events />} />

          <Route path="/events/:eventId" element={<EventDetail />} />
          <Route path="contact" element={<Contact />} />

          <Route path="auth" element={<Authenticate />}>
            <Route path="login" element={<AuthenticateLogin />} />
            <Route path="signup" element={<AuthenticateSignUp />} />
            <Route element={<AuthenticateLogin />} />
          </Route>

          <Route path="/email" element={<EmailConfirmationLayout />}>
            <Route path="incomplete" element={<IncompleteConfirmEmail />} />
            <Route path="complete" element={<CompleteConfirmEmail />} />
          </Route>
        </Route>

        <Route path="/admin" element={<AdminAppLayout />}>
          <Route path="AdminDashboard" index element={<AdminDashboard />} />
          <Route path="ChangPosition" element={<AdminChangePosition />} />

          <Route path="AddBlacklist" element={<AddBlacklist />} />
          <Route path="AdminProfile" element={<AdminProfile />} />
          <Route path="AdminJobManager" element={<ManagetJobList />} />
        </Route>

        <Route path="/recruiter" element={<RecruiterAppLayout />}>
          {/* Define recruiter routes here */}
          <Route path="dashboard" index element={<ReccerDashboard />} />
          <Route path="candidateinfo" index element={<CandidateProfile />} />
          <Route path="candidatelist" index element={<CandidateList />} />
          <Route path="dashboard"index element={<Reccer_dashboard />} />
          <Route path="job-management" index element={<Reccer_JobManagement/>}/>
          <Route path="calender" element={<Reccer_calender />} />
          <Route path="interviewer" element={<Reccer_InterviewerManagement />} />
          <Route path="candidate" element={<Reccer_EventManagement />} />
        </Route>

        <Route path="/interviewer" element={<InterviewerAppLayout />}>
          {/* Define interviewer routes here */}
        </Route>

        {/* <Route path="/" element={<CandidateProfile />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
