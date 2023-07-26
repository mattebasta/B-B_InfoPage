import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Attraction from "./pages/attraction";
import Beach from "./pages/beach";
import Resort from "./pages/resort";
import Restaurant from "./pages/restaurant";
import Supermarket from "./pages/supMarket";

// TODO:
// Animation of all the text
// Use flex container for all the route buttons
// Add route pages
// Add style for buttons

function App() {
  return (
    <div className="MainDiv">
      <p>TENUTA SAN TOMMASO</p>
      <div className="Container1">
        <button className="languageBtn">choose language</button>
        <button className="helpBtn">need help?</button>
      </div>
      <div>
        <p>Welcome to our structure</p>
        <p>What do you need today?</p>
      </div>
      <BrowserRouter>
        <div className="Container2">
          <button>
            <Link to={"/supMarket"}>Nearest Supermarket</Link>
          </button>
          <button>
            <Link to={"/restaurant"}>Restaurants</Link>
          </button>
          <button>
            <Link to={"/attraction"}>What we can visit ?</Link>
          </button>
          <button>
            <Link to={"/beach"}>Equipped Beach</Link>
          </button>
          <button>
            <Link to={"/resort"}>What to do in the resort ?</Link>
          </button>
        </div>
        <Routes>
          <Route path="/attraction" element={<Attraction />}></Route>
          <Route path="/beach" element={<Beach />}></Route>
          <Route path="/resort" element={<Resort />}></Route>
          <Route path="/restaurant" element={<Restaurant />}></Route>
          <Route path="/supMarket" element={<Supermarket />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
