import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Supermarket from "./pages/Supermarket";
import Restaurant from "./pages/Restaurant";
import Visit from './pages/Visit';
import Beach from "./pages/Beach";
import NoPage from "./pages/NoPage";


// TODO:
// Style pages and add content
// Add animation to buttons
// change background color (white maybe)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="supermarket" element={<Supermarket />} />
          <Route path="restaurant" element={<Restaurant />} />
          <Route path="visit" element={<Visit />} />
          <Route path="beach" element={<Beach />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App