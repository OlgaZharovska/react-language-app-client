import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Icon } from "../components/common/Icon";

export const NavLinks = () => (
  <ul>
    <li className="navigation__item">
      <NavLink className="navigation__link" to="/signin">
        <Icon name="remove" />
      </NavLink>
    </li>
    <li className="navigation__item">
      <NavLink className="navigation__link" to="/signup">
        Sign Up
      </NavLink>
    </li>
  </ul>
);
export const ProtectedNavLinks = () => (
  <ul>
    <li className="navigation__item">
      <a href="/train" class="navigation__link">
        <Icon name="train" size="45px" />
        <span className="nav-text">Train</span>
      </a>
    </li>
    <li className="navigation__item">
      <Link className="navigation__link" to="/phrases">
        <Icon name="phrases" size="45px" />
        <span className="nav-text">Phrases</span>
      </Link>
    </li>
    <li className="navigation__item">
      <Link className="navigation__link" to="/dashboard">
        <Icon name="remove" size="45px" />
        <span className="nav-text">Dashboard</span>
      </Link>
    </li>
    <li className="navigation__item">
      <Link className="navigation__link" to="/logout">
        <Icon name="remove" size="45px" />
        <span className="nav-text">Log Out</span>
      </Link>
    </li>
  </ul>
);
const Navigation = ({ auth }) => (
  <nav className="navigation">
    <ul className="navigation__list">
      {auth ? <ProtectedNavLinks /> : <NavLinks />}
    </ul>
  </nav>
);

export default withRouter(Navigation);
