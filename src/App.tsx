import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Authenticate/AuthenticateLogin";
import classNames from "classnames";
import Authenticate from "./pages/Authenticate/Authenticate";
import AuthenticateLogin from "./pages/Authenticate/AuthenticateLogin";
import AuthenticateSignUp from "./pages/Authenticate/AuthenticateSignUp";
import ReccerDashboard from "./pages/Reccer/Reccer_dashboard";
import Nav_Rec from "./components/Navbar_Rec/Nav_Rec";
import Sidebar_Rec from "./components/Sidebar_Rec/Sidebar_Rec";

export default function App() {
  const activeMenu = false;
  return (
    <div>
      <BrowserRouter>
        <div className="">
          {activeMenu ? (
            <div className="">
              <Sidebar_Rec/>
            </div>
          ) : (
            <div className="">
              <Sidebar_Rec/>
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'min-h-screen md:ml-72 w-full  '
                : 'w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static navbar w-full ">
              {/* <Nav_Rec/> */}
            </div>
          </div>
          <div>
            <Routes>
              <Route path="/default" element="Default"/>
              <Route path="/calender" element="Calender"/>
              <Route path="/interviewer" element="Interviewer"/>
              <Route path="/candidate" element="Candidate"/>
              <Route path="/job" element="Jobs"/>
              <Route path="/event" element="Event"/>

            </Routes>
          </div>
          <div className="fixed md:static w-1/3 ">
            {/* RightSideBar */}
          </div>


        </div>
      </BrowserRouter>
    </div>
  );
}
