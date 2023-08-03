import { Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Layout.css";


const Layout = () => {
  return (
    <>
      <div className="Homebackground">
        <div className="Banner">
          <p className="BannerText">Tenuta San Tommaso</p>
        </div>
        <div className="WelcomeText">
          <div className="upText">WELCOME TO</div>
          <div className="midText">TENUTA SAN TOMMASO</div>
          <div className="downText">CLICK BUTTONS BELOW FOR MORE</div>
        </div>
        <nav>
          <div className="containerFlexBoxButton">
            <HashLink smooth to="/#landing">
              <button className="houseButton">Resort</button>
            </HashLink>

            <HashLink smooth to="/supermarket#landing">
              <button className="supButton">Supermarket</button>
            </HashLink>

            <HashLink smooth to="/restaurant#landing">
              <button className="restButton">Restaurants</button>
            </HashLink>

            <HashLink smooth to="/visit#landing">
              <button className="attrButton">Must Visit</button>
            </HashLink>

            <HashLink smooth to="/beach#landing">
              <button className="lidoButton">Equipped <br></br> Beaches</button>
            </HashLink>

            <HashLink smooth to="/contact#landing">
              <button className="contactButton">Helpful <br></br> Numbers</button>
            </HashLink>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
