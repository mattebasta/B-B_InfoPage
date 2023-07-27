import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <div className="Banner">
        <p className="BannerText">Cose</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link to="/supermarket">
              <button>Supermarket</button>
            </Link>
          </li>
          <li>
            <Link to="/restaurant">
              <button>Restaurants</button>
            </Link>
          </li>
          <li>
            <Link to="/visit">
              <button>Must Visit</button>
            </Link>
          </li>
          <li>
            <Link to="/beach">
              <button>Equipped Beaches</button>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
