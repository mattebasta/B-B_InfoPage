import React from "react"
import "./Restaurant.css";
import ReturnBTN from "./component/upToPageButton.js";
import barImg from "./img/MazzarellaCafe_after.png";
import memImg from "./img/Memento_after.jpeg";
import ondBluImg from "./img/ondaBluRestaurant_after.jpeg";
import tavernetta from "./img/LaTavernetta.jpeg";
import ReginaLucia from './img/Rest_ReginaLucia-UPSCALED.png'

const Restaurant = () => {
  return (
    <div className="backgroundRest">
      <div className="bannerRest" id="landing">
        Restaurants
      </div>
      <div className="upTextRest">
        <p>
          Below you can find some reccomendations to eat traditional sicilian
          cuisine
        </p>
      </div>
      <div className="restContainer">
        
        <a
          href="https://www.google.com/maps/dir/?api=1&origin=37.092317,15.161946&destination=37.0887772362438,15.162200803554175&travelmode=driving"
          rel="noreferrer"
          target="_blank"
        >
          <div className="BarDiv">
            <div className="barInfo">
              <img src={barImg} alt="bar" />
              <p><sub>€ | Closed on Tuesday</sub></p>
            </div>
            <div>
              <p>Bar Mazzarella</p>
              <p>
                Perfect for breakfast <br /> in summertime we reccomend the "Granita
                di mandorla con brioche"* <br />
                which is a typical breakfast in sicily <br />
                <sub><sub>*made with almond</sub></sub>
              </p>
            </div>
          </div>
        </a>
        <br />
        <a
          href="https://www.google.com/maps/dir/?api=1&origin=37.092317,15.161946&destination=37.081872,15.153473&travelmode=driving"
          rel="noreferrer"
          target="_blank"
        >
          <div className="mementoDiv">
          <div className="mementoInfo">
            <img src={memImg} alt="memento" />
            <p><sub>€€ | closed on Tuesday</sub></p>
          </div>
          <div>
              <p>Memento7</p>
              <p>
                If you want to enjoy a good pizza
                <br />
                this is the perfect place <br />  <sub>**opened only in the evening</sub>
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://www.google.com/maps/dir/?api=1&origin=37.092317,15.161946&destination=37.03267194770378,15.284107615542435&travelmode=driving"
          rel="noreferrer"
          target="_blank"
        >
          <div className="ondaBluDiv">
            <div className="ondaBluInfo">
              <img src={ondBluImg} alt="ondaBlu" />
              <p><sub> €€ | closed on Monday </sub></p>
            </div>
            <div>
              <p>Onda Blu</p>
              <p>Good restaurant to eat typical fish dishes <br />
                while you can enjoy the seaside of syracuse
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://www.google.com/maps/dir/?api=1&origin=37.092317,15.161946&destination=37.06233205704212,15.292782627424025&travelmode=driving"
          rel="noreferrer"
          target="_blank"
        >
          <div className="tavPieDiv">
          <div className="tavPieInfo">
            <img src={tavernetta} alt="tavernetta" />
            <p><sub>€€ | closed on thursday</sub></p>
          </div>
          <div>
              <p>La Tavernetta da Piero</p>
              <p>Enjoy fish and other local deliciousness <br />
                in a small street, which is situated in Ortygia island.
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://www.google.com/maps/dir/?api=1&origin=37.092317,15.161946&destination=37.058799278126216,15.293036321208719&travelmode=driving"
          rel="noreferrer"
          target="_blank"
        >
          <div className="regLuDiv">
            <div className="regLuInfo">
              <img src={ReginaLucia} alt="Regina Lucia" />
              <p><sub>€€€ | closed on Tuesday </sub></p>
            </div>
            <div>
              <p>Regina Lucia</p>
              <p>Excellent restaurant to try out gourmet dishes <br />
                made with the typical ingredients of sicily <br />
                while sitting in "Piazza D'Uomo"
                </p>
            </div>
          </div>
        </a>
      </div>
      <ReturnBTN></ReturnBTN>
    </div>
  );
};

export default Restaurant;
