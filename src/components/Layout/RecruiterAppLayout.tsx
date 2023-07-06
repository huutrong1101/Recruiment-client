import React from "react";
import { Outlet } from "react-router-dom";

export default function RecruiterAppLayout() {
  return (
    <div>
      {/* Recruiter app header  */}
      <div>Header</div>
      {/* Recruiter app container */}
      <div>
        {/* Left aside items */}
        <div>Left aside</div>
        {/* Container */}
        <Outlet />
        <div>Right aside</div>
      </div>
      {/* Recruiter footer */}
      <div>Footer</div>
    </div>
  );
}
