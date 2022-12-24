import React from "react";
import Image from "../../assets/images/main_food3.png";
import "./maincard.scss";

export const Maincard = () => {
  return (
    <>
      <li className="cards col-3">
        <img
          className="card-image"
          src={Image}
          width="149"
          height="135"
          alt="meal"
        />
        <div className="text-wrapper">
          <h3 className="card-title">Spicy seasoned seafood noodles</h3>
          <p className="card-text">$ 2.29</p>
          <p className="card-text2">20 Bowls available</p>
        </div>
      </li>
    </>
  );
};
