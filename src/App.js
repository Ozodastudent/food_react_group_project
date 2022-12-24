import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import "./assets/styles/styles.scss";
import "./index.scss";
import { Header } from "./components/Header/Header";
import { Maincardlist } from "./components/Maincards/Maincardlist";
import { Maincardheader } from "./components/Maincards/Maincardheader/Maincardheader";
import { Second } from "./components/Second/Second";
import { Orders } from "./components/Orders/Orders";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Settings } from "./components/Settings/Settings";
import { Message } from "./components/Message/Message";
import { Notif } from "./components/NotifPage/Notif";
import { Logout } from "./components/Logout/Logout";

function App() {
  return (
    <body>
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
        <Route path="/message" element={<Message />} />
        <Route path="/notification" element={<Notif />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </body>
  );
}

export default App;
