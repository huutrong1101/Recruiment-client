import React from "react";
import { Outlet } from "react-router-dom";

export default function AdminAppLayout() {
  return (
    <div>
      {/* Admin app header  */}
      <div>Header</div>
      {/* Admin app container */}
      <div>
        {/* Left aside items */}
        <div>Left aside</div>
        {/* Container */}
        <Outlet />
        <div>Right aside</div>
      </div>
      {/* Admin footer */}
      <div>Footer</div>
    </div>
  );
}
