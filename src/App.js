import { Route, Routes } from "react-router-dom";
import {
  Logo,
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
} from "./assets/images/icons/icons.js";
import { Navbar } from "./components/Navbar/Navbar";
import "./assets/styles/styles.scss";
import "./index.scss";
import { Header } from "./components/Header/Header.js";
import { Orders } from "./components/Orders/Orders.js";

function App() {
  return (
    <>
      <nav className="nav">
        <ul className="nav_list list-unstyled">
          <Routes>
            <Route
              path="/"
              element={
                <div className="nav_logo">
                  <Navbar image={<Logo />} />
                </div>
              }
            />
          </Routes>
          <div className="nav_home">
            <Navbar image={<Icon1 />} />
          </div>
          <div className="nav_box">
            <Navbar image={<Icon2 />} />
          </div>
          <div className="nav_box">
            <Navbar image={<Icon3 />} />
          </div>
          <div className="nav_box">
            <Navbar image={<Icon4 />} />
          </div>
          <div className="nav_box">
            <Navbar image={<Icon5 />} />
          </div>
          <div className="nav_box">
            <Navbar image={<Icon6 />} />
          </div>
          <div className="nav_box">
            <Navbar image={<Icon7 />} />
          </div>
        </ul>
      </nav>
      <Header />
      <Orders />
    </>
  );
}

export default App;
