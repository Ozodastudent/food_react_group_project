import "./settings.scss";
import {
  HeartIcon,
  HeartIconPink,
  HomeIcon,
  HomeIconPink,
  FlowerIcon,
  FlowerIconWhite,
  Notif,
  NotifPink,
  SecurIcon,
  SecurIconPink,
  AboutIcon,
  AboutIconPink,
} from "../../assets/images/icons/icons";
import { Link } from "react-router-dom";
import { Settingsheader } from "./Settingsheader/Settingsheader";


export const Settings = () => {
  return (
    <div className="setting_part">
      <h2 className="setting_part_title">Settings</h2>
      <div className="d-flex">
      <div className="setting_part_box">
        <ul className="setting_list">
          <li className="setting_list_item">
            <Link
              to=""
              className="setting_list_link"
              // className={({ isActive }) =>
              //   isActive ? "setting_list_link nav_active" : "setting_list_link"
              // }
            >
              <HeartIcon />
              <div className="nav_link_text">
                <p className="setting_list_link_one">Appereance</p>
                <p className="setting_list_link_two">
                  Dark and Light mode, Font size
                </p>
              </div>
            </Link>
          </li>
          <li className="setting_list_item">
            <Link to="" className="setting_list_link">
              <HomeIcon />
              <div className="nav_link_text">
                <p className="setting_list_link_one">Your Restaurant</p>
                <p className="setting_list_link_two">
                  Dark and Light mode, Font size
                </p>
              </div>
            </Link>
          </li>
          <li className="setting_list_item">
            <Link to="" className="setting_list_link">
              <FlowerIconWhite />
              <div className="nav_link_text">
                <p className="setting_list_link_one">Products Management</p>
                <p className="setting_list_link_two">
                  Manage your product, pricing, etc
                </p>
              </div>
            </Link>
          </li>
          <li className="setting_list_item">
            <Link to="" className="setting_list_link">
              <Notif />
              <div className="nav_link_text">
                <p className="setting_list_link_one">Notifications</p>
                <p className="setting_list_link_two">
                  Customize your notifications
                </p>
              </div>
            </Link>
          </li>
          <li className="setting_list_item">
            <Link to="" className="setting_list_link">
              <SecurIcon />
              <div className="nav_link_text">
                <p className="setting_list_link_one">Security</p>
                <p className="setting_list_link_two">
                  Configure Password, PIN, etc
                </p>
              </div>
            </Link>
          </li>
          <li className="setting_list_item">
            <Link to="" className="setting_list_link">
              <SecurIcon />
              <div className="nav_link_text">
                <p className="setting_list_link_one">Security</p>
                <p className="setting_list_link_two">
                  Configure Password, PIN, etc
                </p>
              </div>
            </Link>
          </li>
          <li className="setting_list_item">
            <Link to="" className="setting_list_link">
              <AboutIcon />
              <div className="nav_link_text">
                <p className="setting_list_link_one">About Us</p>
                <p className="setting_list_link_two">
                  Find out more about Posly
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="adminmainpage">
         <Settingsheader />
      </div>
      </div>
    </div>
  );
};
