import React from "react";
import "./header.scss";
import { SearchIcon } from "../../assets/images/icons/icons";
export const Header = () => {
  return (
    <header className="header-bg">
       <div className="site_header">
       <div className="header_container">
        <div className="header_top d-flex justify-content-between align-items-center">
          <div className="header_top_titles">
            <h4 className="header_title_one">Jaegar Resto</h4>
            <time className="header_title_two">Tuesday, 2 Feb 2021</time>
          </div>
          <div className="header_top_search">
            <form>
              <div className="header_search_input_box d-flex">
                <div className="search_icon">
                  <SearchIcon />
                </div>
                <input
                  className="header_search_input"
                  type="search"
                  placeholder="Search for food, coffe, etc.."
                />
              </div>
            </form>
          </div>
        </div>
        <div className="header_bottom"></div>
      </div>
       </div>
    </header>
  );
};
