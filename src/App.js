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
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import "./assets/styles/styles.scss";
import "./index.scss";
import { Header } from "./components/Header/Header.js";
import { Maincardlist } from "./components/Maincards/Maincardlist.js";
import { Maincardheader } from "./components/Maincards/Maincardheader/Maincardheader.js";

import { Second } from "./components/Second/Second";

import { Orders } from "./components/Orders/Orders.js";

import { Dashboard } from "./pages/Dashboard/Dashboard.js";

function App() {

  return (
    <>
      <nav className="nav">
        <ul className="nav_list list-unstyled">
          <div className="nav_logo">
            <Navbar image={<Logo />} />
          </div>
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
      
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Orders />
              <main className="main-part">
                <div className="main-width">
                  <Maincardheader />
                  <Maincardlist />
                </div>
              </main>
            </>
          }
        />
        <Route path="/link" element={<Second />} />
        <Route
          path="/dashboard"
          element={
            <>
              <Dashboard />
              <Orders />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
