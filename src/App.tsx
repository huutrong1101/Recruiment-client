import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AdminAppLayout from "./components/Layout/AdminAppLayout";

///
import Login from "./pages/Authenticate/AuthenticateLogin";
import classNames from "classnames";
import Authenticate from "./pages/Authenticate/Authenticate";
import AuthenticateLogin from "./pages/Authenticate/AuthenticateLogin";
import AuthenticateSignUp from "./pages/Authenticate/AuthenticateSignUp";

import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminProfile from "./pages/Admin/AdminProfile";
import AdminChangePosition from "./pages/Admin/AdminChangePosition";
import AddBlacklist from "./pages/Admin/AddBlacklist";
import ManagetJobList from "./components/AdminManagerList/ManagetJobList";

export default function App() {
  return (
    <BrowserRouter>
      {/* Header navbar */}
      {/* Route switcher */}
      <div className={classNames(``)}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/" element={<Authenticate />}>
            <Route index path="login" element={<AuthenticateLogin />} />
            <Route index path="signup" element={<AuthenticateSignUp />} />
            <Route index element={<Login />} />
          </Route>
          <Route path="/admin" element={<AdminAppLayout />}>
            <Route path="AdminDashboard" index element={<AdminDashboard />} />
            <Route path="AdminProfile" index element={<AdminProfile />} />
            <Route path="AdminJobManager" index element={<ManagetJobList />} />

            <Route
              path="ChangPosition"
              index
              element={<AdminChangePosition />}
            />
            <Route path="AddBlacklist" index element={<AddBlacklist />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
