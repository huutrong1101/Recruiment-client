import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

import Authenticate from "./pages/Authenticate/Authenticate";
import AuthenticateLogin from "./pages/Authenticate/AuthenticateLogin";
import AuthenticateSignUp from "./pages/Authenticate/AuthenticateSignUp";

import UserAppLayout from "./components/Layout/UserAppLayout";

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
import ReccerInterviewerDetail from "./pages/Reccer/InterviewerDetail";
import CandidateProfile from "./pages/Reccer/CandidateProfile";
import {
  CandidateRecent,
  InterviewRecent,
  InterviewDetail,
  INTCandidateDetail,
} from "./pages/Interviewer/InterviewerPages";
import UserProfileLayout from "./pages/UserProfile/UserProfileLayout";
import UserProfileMyProfile from "./pages/UserProfile/UserProfileMyProfile";
import UserProfileInterviews from "./pages/UserProfile/UserProfileInterviews/UserProfileInterviews";
import UserProfileSubmittedJob from "./pages/UserProfile/UserProfileSubmittedJob";

import ReccerJobDetail from "./pages/Reccer/Jobs/ReccerJobDetail";
import Addjob from "./pages/Reccer/Jobs/Addjob";
import ManagementAppLayOut from "./components/Layout/ManagementAppLayOut/ManagementAppLayOut";
import ReccerCandidateManagement from "./pages/Reccer/ReccercandidateManagement";

import RecEventDetail from "./pages/Reccer/RecEventDetail";
import AddEvent from "./components/AddEvent/AddEvent";
import ListCandiPass from "./components/AdminManagerList/ListCandiPass";
import DeleteBlacklist from "./pages/Admin/DeleteBlacklist";
import CreateCV from "./pages/CreateCV/CreateCV";
import RequestTest from "./pages/RequestTest/RequestTest";
import InterviewSched from "./pages/Reccer/Interview/InterviewSched";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { authLogout, fetchUserFromToken } from "./redux/AuthSlice";
import { useTokenAuthorize } from "./hooks/useTokenAuthorize";
// import { EventService } from "./services/JobService";
import UserProfileMyInformation from "./pages/UserProfile/UserProfileMyInformation";
import { JobService } from "./services/JobService";
import Logout from "./pages/Logout/Logout";
import OneTimePasswordVerify from "./pages/OneTimePasswordVerify/OneTimePasswordVerify";
import { EventService } from "./services/EventService";
import CandidateDetail from "./pages/Reccer/CandidateDetail";
import UserProfileMyResume from "./pages/UserProfile/UserProfileMyResume";
import ReccerEditJob from "./pages/Reccer/Jobs/EditJob";

export default function App() {
  useTokenAuthorize();

  const dispatch = useAppDispatch();

  useEffect(() => {
    JobService.getJobs(dispatch);
    JobService.getLocation(dispatch);
    JobService.getPosition(dispatch);
    JobService.getType(dispatch);
    EventService.getEvents(dispatch);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserAppLayout />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="/jobs/:jobId" element={<JobDetail />} />
          <Route path="events" element={<Events />} />
          <Route path="/events/:eventId" element={<EventDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="create-cv" element={<CreateCV />} />

          <Route path="auth" element={<Authenticate />}>
            <Route path="login" element={<AuthenticateLogin />} />
            <Route path="signup" element={<AuthenticateSignUp />} />
            <Route element={<AuthenticateLogin />} />
          </Route>

          <Route path="otp" element={<OneTimePasswordVerify />} />

          <Route path="/email" element={<EmailConfirmationLayout />}>
            <Route path="incomplete" element={<IncompleteConfirmEmail />} />
            <Route path="complete" element={<CompleteConfirmEmail />} />
          </Route>

          <Route path="/profile" element={<UserProfileLayout />}>
            <Route index element={<UserProfileMyProfile />} />
            <Route path="resume" element={<UserProfileMyResume />} />
            <Route path="information" element={<UserProfileMyInformation />} />
            <Route path="interviews" element={<UserProfileInterviews />} />
            <Route
              path="submitted-jobs"
              element={<UserProfileSubmittedJob />}
            />
          </Route>
          <Route path="/test-request" element={<RequestTest />} />
          <Route path="/logout" element={<Logout />} />
        </Route>

        <Route path="/admin" element={<ManagementAppLayOut />}>
          <Route path="users" index element={<AdminDashboard />} />
          <Route path="users/:userId" element={<AdminChangePosition />} />
          <Route path="users/blacklist/:userId" element={<AddBlacklist />} />
          <Route path="blacklist/:userId" element={<DeleteBlacklist />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="jobs/:jobId" element={<ListCandiPass />} />
          <Route path="jobs" element={<ManagetJobList />} />
        </Route>

        <Route path="/recruiter" element={<ManagementAppLayOut />}>
          {/* Define recruiter routes here */}
          <Route path="dashboard" index element={<ReccerDashboard />} />
          <Route path="candidate-info" element={<CandidateProfile />} />
          <Route path="applied-candidates" element={<ReccerCandidateManagement />} />
          <Route path="applied-candidates/:userId" element={<CandidateDetail />} />

          <Route path="jobs" element={<ReccerJobManagement />} />
          <Route path="calender" element={<Reccercalender />} />
          <Route
            path="interviewers"
            element={<ReccerInterviewerManagement />}
          />
          <Route
            path="interviewers/:interviewerId"
            element={<ReccerInterviewerDetail />}
          />

          <Route path="jobdetail/:jobId" element={<ReccerJobDetail />} />
          <Route path="jobdetail/:jobId/edit" element={<ReccerEditJob />} />
          <Route path="addjob" element={<Addjob />} />

          <Route path="events" element={<ReccerEventManagement />} />
          <Route path="events/:eventId" element={<RecEventDetail />} />
          <Route path="events-add" element={<AddEvent />} />

          <Route path="event-manager" element={<ReccerEventManagement />} />

          <Route
            path="jobdetail/:jobId/interview-schedule/:userId"
            element={<InterviewSched />}
          />
        </Route>

        <Route path="/interviewer" element={<ManagementAppLayOut />}>
          {/* Define interviewer routes here */}
          <Route path="interview-recent" element={<InterviewRecent />} />
          <Route path="interview-recent/:id" element={<InterviewDetail />} />
          <Route path="interview-question" element={<ManageQuestion />} />
          <Route path="candidate-recent" element={<CandidateRecent />} />
          <Route
            path="candidate-recent/:id"
            element={<INTCandidateDetail />}
          />
          <Route index path="candidate-recent/:id/score-page" element={<ScorePage />} />
        </Route>
        <Route path="/interviewer" element={<ManagementAppLayOut />}>
          {/* Define interviewer routes here */}
          {/* <Route index path ="/manageQuestion" element={<ManageQuestion />} /> */}
          <Route index path="manage-question" element={<ManageQuestion />} />
          <Route index path="score-page" element={<ScorePage />} />
        </Route>

        {/* <Route path="/test" element={Test} /> */}
      </Routes>
    </BrowserRouter>
  );
}
