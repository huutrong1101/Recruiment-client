import React from "react";
import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

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
