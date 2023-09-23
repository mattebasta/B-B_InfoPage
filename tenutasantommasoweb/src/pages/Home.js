import React from "react"
import "./Home.css";
import Pool from "./img/pool.jpeg";
import Court from "./img/court.jpeg";
import AC from "./img/inside.jpeg";
import ReturnBTN from './component/upToPageButton.js';


const Home = () => {

  return (
    <div className="backgroundHome">
      <div className="bannerHome" id="landing">
        Resort
      </div>
      <div className="homeP">
        <div className="poolDiv">
          <img src={Pool} alt="pool" />
          <p>
            If you are not feeling in the right mood to go outside <br /> you
            can just stay here in the resort and relax by the pool
          </p>
        </div>
        <div className="sportDiv">
          <p>
            or maybe play some tennis <br /> or football.
          </p>
          <img src={Court} alt="court" />
        </div>
        <div className="acDiv">
          <img src={AC} alt="ac" />
          <p>
            maybe you just want some fresh air <br /> so staying inside with the
            AC on <br />
            suits your case best. <br />
            <sub>{"(Fresh drinks not included, only AC)"}</sub>
          </p>
        </div>
        <ReturnBTN></ReturnBTN>
      </div>
    </div>
  );
};

export default Home;
