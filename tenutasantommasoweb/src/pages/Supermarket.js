import React from "react"
import "./Supermarket.css";
import ReturnBTN from './component/upToPageButton.js';

const Supermarket = () => {
  return (
    <div className="backgroundSuper">
      <div className="bannerSuper" id="landing">
        Supermarket
      </div>
      <br /><br />
      <div className="superContainer">
        <p className="linkExplain">
          There are 3 supermarkets near the structure <br /> you can find links
          below to get driving directions <br />
          Simply click on the link you prefer and open your favourite map app
        </p>
        <div className="superLinks">
          <a
            href="https://www.google.com/maps/dir/?api=1&origin=37.092317,15.161946&destination=37.08825761369096,15.159846916778568&travelmode=driving"
            rel="noreferrer noopener"
            target="_blank"
          >
            <div className="superInfo">
              <p>COOP Supermarket</p>
              <p>2 minute | 750 m | €€</p>
            </div>
          </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&origin=37.092317,15.161946&destination=37.07983577403782,15.16277956254551&travelmode=driving"
              rel="noreferrer noopener"
              target="_blank"
            >
              <div className="superInfo">
            <p>EuroSpin Supermarket</p>
            <p>4 minute | 2 km | €</p>
          </div>
          </a>
          <a
              href="https://www.google.com/maps/dir/?api=1&origin=37.092317,15.161946&destination=37.07990298571543,15.162808965618872&travelmode=driving"
              rel="noreferrer noopener"
              target="_blank"
          >
            <div className="superInfo">
              <p>Penny Supermarket</p>
              <p>6 minute | 2,3 km | €</p>
            </div>
          </a>
        </div>
      </div>
      <ReturnBTN></ReturnBTN>
    </div>
  );
};

export default Supermarket;
