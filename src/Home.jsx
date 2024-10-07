import React from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";

export default function Home() {
 
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
}
