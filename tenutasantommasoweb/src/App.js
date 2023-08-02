import { Routes, Route, MemoryRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Supermarket from "./pages/Supermarket";
import Restaurant from "./pages/Restaurant";
import Visit from './pages/Visit';
import Beach from "./pages/Beach";
import Contact from './pages/Contact'
import NoPage from "./pages/NoPage";



// TODO:
// Style pages and add content
// Add animation to buttons
// change background color (white maybe)
// add a welcome text
// add a button to copy links to clipboard(contact, other link of maps)
// add useful number

function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="supermarket" element={<Supermarket />} />
          <Route path="restaurant" element={<Restaurant />} />
          <Route path="visit" element={<Visit />} />
          <Route path="beach" element={<Beach />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

export default App