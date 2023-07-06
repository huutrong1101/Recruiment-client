import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Authenticate/AuthenticateLogin";
import classNames from "classnames";
import Authenticate from "./pages/Authenticate/Authenticate";
import AuthenticateLogin from "./pages/Authenticate/AuthenticateLogin";
import AuthenticateSignUp from "./pages/Authenticate/AuthenticateSignUp";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail";
import Container from "./components/Container/Container";
import UserAppLayout from "./components/UserAppLayout/UserAppLayout";

export default function App() {
  return (
    <BrowserRouter>
      {/* Route switcher */}

      <Routes>
        <Route path="/" element={<UserAppLayout />}>
          <Route path="auth" element={<Authenticate />}>
            <Route index path="login" element={<AuthenticateLogin />} />
            <Route index path="signup" element={<AuthenticateSignUp />} />
            <Route index element={<Login />} />
          </Route>
          <Route path="/verify-email" element={<VerifyEmail />}></Route>

          <Route path="/" index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
