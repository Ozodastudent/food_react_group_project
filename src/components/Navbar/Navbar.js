import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import {
  Logo,
  Icon1,
  IconPink,
  Icon2,
  Icon2White,
  Icon3,
  Icon3White,
  Icon4,
  Icon4White,
  Icon5,
  Icon5White,
  Icon6,
  Icon6White,
  Icon7,
  Icon7White,
} from "../../assets/images/icons/icons.js";
export const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav_list">
        <li className="logo">
          <NavLink to="/" className="logo">
            <span className="logo_icon">
              <Logo />
            </span>
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="/" className="nav_link isActive">
            <span className="nav_icon">
              <IconPink />
            </span>
            <span className="nav_icon_none">
              <Icon1 />
            </span>
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink
            to="/link"
            className={({ isActive }) =>
              isActive ? "nav_link active" : "nav_link"
            }
          >
            <span className="nav_icon">
              <Icon2 />
            </span>
            <span className="nav_icon_none">
              <Icon2White />
            </span>
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="/dashboard" className="nav_link">
            <span className="nav_icon">
              <Icon3 />
            </span>
            <span className="nav_icon_none">
              <Icon3White />
            </span>
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="/" className="nav_link">
            <span className="nav_icon">
              <Icon4 />
            </span>
            <span className="nav_icon_none">
              <Icon4White />
            </span>
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="/" className="nav_link">
            <span className="nav_icon">
              <Icon5 />
            </span>
            <span className="nav_icon_none">
              <Icon5White />
            </span>
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="/settings" className="nav_link">
            <span className="nav_icon">
              <Icon6 />
            </span>
            <span className="nav_icon_none">
              <Icon6White />
            </span>
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="/" className="nav_link">
            <span className="nav_icon">
              <Icon7 />
            </span>
            <span className="nav_icon_none">
              <Icon7White />
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
