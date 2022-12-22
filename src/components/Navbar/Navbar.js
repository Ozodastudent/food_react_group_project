import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import {
  Logo,
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
} from "../../assets/images/icons/icons.js";
export const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav_list">
        <li className="logo">
          <NavLink to="/" className="logo">
            <Logo />
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="/link" className="nav_link">
            <Icon1 />
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="" className="nav_link">
            <Icon2 />
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="" className="nav_link">
            <Icon3 />
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="" className="nav_link">
            <Icon4 />
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="" className="nav_link">
            <Icon5 />
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="" className="nav_link">
            <Icon6 />
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="" className="nav_link">
            <Icon7 />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
