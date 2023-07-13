import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

import Authenticate from "./pages/Authenticate/Authenticate";
import AuthenticateLogin from "./pages/Authenticate/AuthenticateLogin";
import AuthenticateSignUp from "./pages/Authenticate/AuthenticateSignUp";

import UserAppLayout from "./components/Layout/UserAppLayout";
import InterviewerAppLayout from "./components/Layout/InterviewerAppLayout";

import Jobs from "./pages/Jobs/Jobs";
import Events from "./pages/Events/Events";
import EventDetail from "./pages/EventDetail/EventDetail";
import Contact from "./pages/Contact/Contact";
import EmailConfirmationLayout from "./pages/EmailConfirmation/EmailConfirmationLayout";
import IncompleteConfirmEmail from "./pages/EmailConfirmation/IncompleteConfirmEmail";
import CompleteConfirmEmail from "./pages/EmailConfirmation/CompleteConfirmEmail";

import JobDetail from "./pages/JobDetail/JobDetail";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminProfile from "./pages/Admin/AdminProfile";
import AdminChangePosition from "./pages/Admin/AdminChangePosition";
import AddBlacklist from "./pages/Admin/AddBlacklist";
import ManagetJobList from "./components/AdminManagerList/ManagetJobList";
import AboutUs from "./pages/AboutUs/AboutUs";
import ReccerJobManagement from "./pages/Reccer/ReccerJobManagement";
import ReccerDashboard from "./pages/Reccer/Reccerdashboard";
import Reccercalender from "./pages/Reccer/Reccercalender";
import ScorePage from "./pages/InterviewQuestion/ScorePage";
import ManageQuestion from "./pages/InterviewQuestion/ManageQuestion";

import ReccerInterviewerManagement from "./pages/Reccer/ReccerInterviewerManagement";
import ReccerEventManagement from "./pages/Reccer/ReccerEventManagement";
import ReccercandidateManagement from "./pages/Reccer/ReccercandidateManagement";
import ReccerInterviewerDetail from "./pages/Reccer/InterviewerDetail";
import CandidateList from "./pages/Reccer/CandidateList";
import CandidateProfile from "./pages/Reccer/CandidateProfile";


// Interviewer Pages
import {
  CandidateRecent,
  InterviewRecent,
  InterviewQuestion,
} from "./pages/Interviewer/InterviewerPages";

import ReccerJobDetail from "./pages/Reccer/Jobs/ReccerJobDetail";
import Addjob from "./pages/Reccer/Jobs/Addjob";
import ManagementAppLayOut from "./components/Layout/ManagementAppLayOut/ManagementAppLayOut";
import Reccer_InterviewerManagement from "./pages/Reccer/ReccerInterviewerManagement";
import Reccer_EventManagement from "./pages/Reccer/ReccerEventManagement";
import Reccer_candidateManagement from "./pages/Reccer/ReccercandidateManagement";

import RecEventDetail from "./pages/EventDetail/RecEventDetail";
import AddEvent from "./components/AddEvent/AddEvent";
import EventManager from "./components/EventManager/EventManager";
import ListCandiPass from "./components/AdminManagerList/ListCandiPass";
import DeleteBlacklist from "./pages/Admin/DeleteBlacklist";

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
          <Route path="about-us" element={<AboutUs />} />

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

        <Route path="/admin" element={<ManagementAppLayOut />}>
          <Route path="dashboard" index element={<AdminDashboard />} />
          <Route path="change-position" element={<AdminChangePosition />} />
          <Route path="add-blacklist" element={<AddBlacklist />} />
          <Route path="delete-blacklist" element={<DeleteBlacklist />} />

          <Route path="profile" element={<AdminProfile />} />
          <Route path="candidate-pass-list" element={<ListCandiPass />}/>
          <Route path="job-manager" element={<ManagetJobList />} />
        </Route>

        <Route path="/recruiter" element={<ManagementAppLayOut />}>
          {/* Define recruiter routes here */}
          <Route path="dashboard" index element={<ReccerDashboard />} />
          <Route path="candidate-info" element={<CandidateProfile />} />
          <Route path="candidate-list" element={<CandidateList />} />

          <Route path="job-management" element={<ReccerJobManagement />} />
          <Route path="calender" element={<Reccercalender />} />
          <Route path="interviewer"element={<ReccerInterviewerManagement />}/>
          <Route path="interviewer-profile"element={<ReccerInterviewerDetail />}/>

          <Route path="jobdetail" element={<ReccerJobDetail />} />
          <Route path="addjob" element={<Addjob />} />
          <Route path="interviewer" element={<ReccerInterviewerManagement />} />

          <Route path="event" element={<ReccerEventManagement />} />
          <Route path="candidate" element={<ReccercandidateManagement />} />
        </Route>

        <Route path="/interviewer" element={<ManagementAppLayOut />}>
          <Route path="interview-recent" element={<InterviewRecent />} />
          <Route path="interview-question" element={<InterviewQuestion />} />
          <Route path="candidate-recent" element={<CandidateRecent />} />
          <Route index path ="manageQuestion" element={<ManageQuestion />} />
          <Route index path ="scorePage" element={<ScorePage />} />

        </Route>
        <Route path="/interviewer" element={<ManagementAppLayOut />}>
          {/* Define interviewer routes here */}
          {/* <Route index path ="/manageQuestion" element={<ManageQuestion />} /> */}
          <Route index path="manageQuestion" element={<ManageQuestion />} />
          <Route index path="scorePage" element={<ScorePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
