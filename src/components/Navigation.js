import React from "react";
import { NavLink } from "react-router-dom";

export const NavLinks = () => (
  <ul>
    <li>
      <NavLink to="/signin">Sign In</NavLink>
    </li>
    <li>
      <NavLink to="signup">Sign Up</NavLink>
    </li>
  </ul>
);
export const ProtectedNavLinks = () => (
  <ul>
    <li>
      <NavLink to="/train">Train</NavLink>
    </li>
    <li>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </li>
    <li>
      <NavLink to="/logout">Log Out</NavLink>
    </li>
  </ul>
);
export const Navigation = ({ auth }) =>
  auth ? <ProtectedNavLinks /> : <NavLinks />;
