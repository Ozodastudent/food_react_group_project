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
import { Settings } from "./components/Settings/Settings.js";

function App() {
  return (
    <>
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
            </>
          }
        />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
