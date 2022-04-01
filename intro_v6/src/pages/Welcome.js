import React from "react";
import { Link, Outlet } from "react-router-dom";
// Outlet is a placeholder to tell react where to insert nested router

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Link to="new-user">New User</Link>
      <Outlet />
    </section>
  );
};

export default Welcome;
