import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

export const Navbar = (props) => {
  const { image } = props;
  return (
    <li className="nav_item">
      <NavLink to="/" className="nav_link">
        {image}
      </NavLink>
    </li>
  );
};
