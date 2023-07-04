import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import classNames from "classnames";

export default function App() {
  return (
    <BrowserRouter>
      {/* Header navbar */}
      <Navbar />

      {/* Route switcher */}
      <div className={classNames(`px-32`)}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
