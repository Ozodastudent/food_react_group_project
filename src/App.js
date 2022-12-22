import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import "./assets/styles/styles.scss";
import "./index.scss";
import { Header } from "./components/Header/Header.js";
import { Orders } from "./components/Orders/Orders.js";
import { Maincardlist } from "./components/Maincards/Maincardlist.js";
import { Maincardheader } from "./components/Maincards/Maincardheader/Maincardheader.js";
import { Second } from "./components/Second/Second";

function App() {
  const fakedata = Array(10).fill(1);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/link" element={<Second />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Orders />
              {/* <main className="main-part">
                <div className="main-width">
                  <Maincardheader />
                  <Maincardlist />
                </div>
              </main> */}
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
