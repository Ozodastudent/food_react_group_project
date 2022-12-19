import React from "react";
import "./navbar.scss";

export const Navbar = (props) => {
  const { image } = props;
  return (
    <li className="nav_item">
      <a href="/" className="nav_link">
        {image}
      </a>
    </li>
  );
};
