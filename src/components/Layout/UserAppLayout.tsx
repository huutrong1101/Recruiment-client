import React from "react";
import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";
import { Outlet } from "react-router-dom";

export default function UserAppLayout() {
  return (
    <>
      <Navbar />

      <Container>
        <Outlet />
      </Container>
    </>
  );
}
