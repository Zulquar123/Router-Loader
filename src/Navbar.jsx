import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const style = (e) => {
    return {
      color: e.isActive ? "purple" : "",
      border: e.isActive ? "4px solid purple" : "",
      padding: e.isActive ? "3px 5px" : "",
      borderRadius: e.isActive ? "10px" : "",
      transitionDuration: e.isActive ? "100ms" : "",
    };
  };
  return (
    <nav className="flex gap-10 mt-4 justify-center font-bold text-5xl">
      <NavLink style={style} to="/">
        Home
      </NavLink>
      <NavLink style={style} to="/user">
        User
      </NavLink>
      <NavLink style={style} to="/about">
        About
      </NavLink>
    </nav>
  );
}
