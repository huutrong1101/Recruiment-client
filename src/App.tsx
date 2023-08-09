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
import { useAppDispatch } from "./hooks/hooks";
import { useTokenAuthorize } from "./hooks/useTokenAuthorize";
// import { EventService } from "./services/JobService";
import UserProfileMyInformation from "./pages/UserProfile/UserProfileMyInformation";
import { JobService } from "./services/JobService";
import Logout from "./pages/Logout/Logout";
import OneTimePasswordVerify from "./pages/OneTimePasswordVerify/OneTimePasswordVerify";
import { EventService } from "./services/EventService";
import PrintResume from "./pages/PrintResume/PrintResume";
import CandidateDetail from "./pages/Reccer/CandidateDetail";
import UserProfileMyResume from "./pages/UserProfile/UserProfileMyResume";
import ReccerEditJob from "./pages/Reccer/Jobs/EditJob";
import FilterNonLogin from "./components/Routers/FilterNonLogin";
import FilterCandidate from "./components/Routers/FilterCandidate";
import FilterAdmin from "./components/Routers/FilterAdmin";
import FilterInterviewer from "./components/Routers/FilterInterviewer";
import FilterRecruiter from "./components/Routers/FilterRecruiter";
import NotFound from "./components/NotFound/NotFound";
import AdminProflieUser from "./pages/Admin/AdminProflieUser";
import AdminAcountDelete from "./components/AdminManagerList/AdminAcountDelete";
import ForgetPasswordLayout from "./pages/ForgetPassword/ForgetPasswordLayout";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import ConfirmPassword from "./pages/ForgetPassword/ConfirmPassword";

export default function App() {
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
          <Route path="/logout" element={<Logout />} />
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

          {/* This route is accepted when user is not logged in */}
          <Route element={<FilterNonLogin />}>
            <Route path="/email" element={<EmailConfirmationLayout />}>
              <Route path="incomplete" element={<IncompleteConfirmEmail />} />
              <Route path="complete" element={<CompleteConfirmEmail />} />
            </Route>
            <Route path="otp" element={<OneTimePasswordVerify />} />
            <Route path="/forget-password" element={<ForgetPasswordLayout />}>
              <Route index element={<ForgetPassword />} />
              <Route path="confirm-password" element={<ConfirmPassword />} />
            </Route>
          </Route>

          {/* This route is only accepted when user is logged in and/or token is not broken  */}
          <Route element={<FilterCandidate />}>
            <Route path="/profile" element={<UserProfileLayout />}>
              <Route index element={<UserProfileMyProfile />} />
              <Route path="resume" element={<UserProfileMyResume />} />
              <Route
                path="information"
                element={<UserProfileMyInformation />}
              />
              <Route path="interviews" element={<UserProfileInterviews />} />
              <Route
                path="submitted-jobs"
                element={<UserProfileSubmittedJob />}
              />
            </Route>
            <Route path="/print-resume" element={<PrintResume />} />
            <Route path="/test-request" element={<RequestTest />} />
          </Route>
        </Route>

        <Route element={<FilterAdmin />}>
          <Route path="/admin" element={<ManagementAppLayOut />}>
            <Route path="users" index element={<AdminDashboard />} />
            <Route path="users/:userId" index element={<AdminProflieUser />} />
            <Route path="userscreate" element={<AdminChangePosition />} />
            <Route path="users/blacklist/:userId" element={<AddBlacklist />} />
            <Route path="accountsDeleted" element={<AdminAcountDelete />} />
            <Route path="blacklist/:userId" element={<DeleteBlacklist />} />
            <Route path="profile" element={<AdminProfile />} />
            <Route path="jobs/:jobId" element={<ListCandiPass />} />
            <Route path="jobs" element={<ManagetJobList />} />
          </Route>
        </Route>

        <Route element={<FilterRecruiter />}>
          <Route path="/recruiter" element={<ManagementAppLayOut />}>
            {/* Define recruiter routes here */}
            <Route path="dashboard" index element={<ReccerDashboard />} />
            <Route path="candidate-info" element={<CandidateProfile />} />
            <Route path="candidates" element={<ReccerCandidateManagement />} />
            <Route path="candidates/:userId" element={<CandidateDetail />} />

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
        </Route>

        <Route element={<FilterInterviewer />}>
          <Route path="/interviewer" element={<ManagementAppLayOut />}>
            {/* Define interviewer routes here */}
            <Route path="interview-recent" element={<InterviewRecent />} />
            <Route path="interview-recent/:id" element={<InterviewDetail />} />
            <Route path="candidate-recent" element={<CandidateRecent />} />
            <Route
              path="candidate-recent/:id"
              element={<INTCandidateDetail />}
            />
            <Route
              index
              path="interview-recent/:id/score-page"
              element={<ScorePage />}
            />
            <Route index path="question" element={<ManageQuestion />} />
          </Route>
        </Route>

        {/* <Route path="/test" element={Test} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
