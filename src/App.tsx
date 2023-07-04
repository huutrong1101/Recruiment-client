import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      {/* Header navbar */}
      <Navbar />

      {/* Route switcher */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
