import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Authenticate/AuthenticateLogin";
import classNames from "classnames";
import Authenticate from "./pages/Authenticate/Authenticate";
import AuthenticateLogin from "./pages/Authenticate/AuthenticateLogin";
import AuthenticateSignUp from "./pages/Authenticate/AuthenticateSignUp";

export default function App() {
  return (
    <BrowserRouter>
      {/* Header navbar */}
      <Navbar />

      {/* Route switcher */}
      <div className={classNames(`px-32`)}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/" element={<Authenticate />}>
            <Route index path="login" element={<AuthenticateLogin />} />
            <Route index path="signup" element={<AuthenticateSignUp />} />
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
