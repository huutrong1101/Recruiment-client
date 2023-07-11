import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

import Authenticate from "./pages/Authenticate/Authenticate";
import AuthenticateLogin from "./pages/Authenticate/AuthenticateLogin";
import AuthenticateSignUp from "./pages/Authenticate/AuthenticateSignUp";

import VerifyEmail from "./pages/VerifyEmail/VerifyEmail";
import UserAppLayout from "./components/Layout/UserAppLayout";
import AdminAppLayout from "./components/Layout/AdminAppLayout";
import RecruiterAppLayout from "./components/Layout/RecruiterAppLayout";

import Reccer_JobManagement from "./pages/Reccer/ReccerJobManagement";
import Reccer_dashboard from "./pages/Reccer/Reccerdashboard";
import Reccer_calender from "./pages/Reccer/Reccercalender";
import Reccer_InterviewerManagement from "./pages/Reccer/ReccerInterviewerManagement";
import Reccer_EventManagement from "./pages/Reccer/ReccerEventManagement";
import Reccer_candidateManagement from "./pages/Reccer/ReccercandidateManagement";

export default function App() {
  const activeMenu = false;
  return (

    <BrowserRouter>
      {/* Route switcher */}
      <Routes>
        <Route path="/" element={<UserAppLayout />}>
          <Route path="auth" element={<Authenticate />}>
            <Route index path="login" element={<AuthenticateLogin />} />
            <Route index path="signup" element={<AuthenticateSignUp />} />
            <Route index element={<AuthenticateLogin />} />
          </Route>
          <Route path="/verify-email" element={<VerifyEmail />}></Route>

          <Route index element={<Home />} />
        </Route>

        <Route path="/admin" element={<AdminAppLayout />}>
          {/* Define admin routes here */}
        </Route>

        <Route path="/recruiter" element={<RecruiterAppLayout />}>
          {/* Define recruiter routes here */}
          <Route path="dashboard"index element={<Reccer_dashboard />} />
          <Route path="job-management" index element={<Reccer_JobManagement/>}/>
          <Route path="calender" element={<Reccer_calender />} />
          <Route path="interviewer" element={<Reccer_InterviewerManagement />} />
          <Route path="event" element={<Reccer_EventManagement />} />
          <Route path="candidate" element={<Reccer_candidateManagement />} />
        </Route>

        {/* <Route path="/interviewer" element={<InterviewerAppLayout />}>
          {/* Define interviewer routes here *
        </Route> */}
      </Routes>
    </BrowserRouter>

  );
}
