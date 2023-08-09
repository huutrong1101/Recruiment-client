import { Outlet } from "react-router-dom";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function UserAppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow">
        <Container>
          <Outlet />
        </Container>
      </div>

      <Footer />
    </div>
  );
}
