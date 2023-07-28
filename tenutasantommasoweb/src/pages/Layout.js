import { Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <div className="Homebackground">
        <div className="Banner">
          <p className="BannerText">Tenuta San Tommaso</p>
          <p className="BannerText"> Language</p>
        </div>
        <nav>
          <ul>
            <li>
              <HashLink smooth to="/#landing">
                <button className="homeButton">Home</button>
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/supermarket#landing">
                <button className="supButton">Supermarket</button>
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/restaurant#landing">
                <button className="restButton">Restaurants</button>
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/visit#landing">
                <button className="attrButton">Must Visit</button>
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/beach#landing">
                <button className="lidoButton">Equipped Beaches</button>
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
