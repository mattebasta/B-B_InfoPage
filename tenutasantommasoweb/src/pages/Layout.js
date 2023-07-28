import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <div className="Banner">
        <p className="BannerText">Tenuta San Tommaso</p>
        <p className="BannerText"> Language</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <button className="homeButton">Home</button>
            </Link>
          </li>
          <li>
            <Link to="/supermarket">
              <button className="supButton">Supermarket</button>
            </Link>
          </li>
          <li>
            <Link to="/restaurant">
              <button className="restButton">Restaurants</button>
            </Link>
          </li>
          <li>
            <Link to="/visit">
              <button className="attrButton">Must Visit</button>
            </Link>
          </li>
          <li>
            <Link to="/beach">
              <button className="lidoButton">Equipped Beaches</button>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
