import "./Restaurant.css";
import ReturnBTN from "./component/upToPageButton.js";

const Restaurant = () => {
  return (
    <div className="backgroundRest">
      <div className="bannerRest" id="landing">
        Restaurants
      </div>
      <div>
        <p>
          Below you can find some reccomendations to eat traditional sicilian
          cuisine
        </p>
      </div>
      <div className="restContainer">
        <div className="BarDiv">
          <a
            href="https://www.google.com/maps/dir/?api=1&origin=37.092317,15.161946&destination=37.0887772362438,15.162200803554175&travelmode=driving"
            rel="noreferrer"
            target="_blank"
          >
            <p>Bar Mazzarella</p>
          </a>
          <p>
            Perfect for breakfast, in summertime we reccomend the "Granita di
            mandorla con brioche", <br />
            which is a typical breakfast in sicily. <sub>**made with almond</sub>
          </p>
        </div>
        <div className="mementoDiv">
          <a
            href="https://www.google.com/maps/dir/?api=1&origin=37.092317,15.161946&destination=37.081872,15.153473&travelmode=driving"
            rel="noreferrer"
            target="_blank"
          >
            <p>Memento7</p>
          </a>
          <p>
            If you want to enjoy a good pizza
            <br />
            this is the perfect place <sub>**opened only in the evening</sub>{" "}
          </p>
        </div>
        <div className="ondaBluDiv">
          <a
            href="https://www.google.com/maps/dir/?api=1&origin=37.092317,15.161946&destination=37.03267194770378,15.284107615542435&travelmode=driving"
            rel="noreferrer"
            target="_blank"
          >
            <p>Onda Blu</p>
          </a>
          <p>Good restaurant to eat typical fish dishes</p>
        </div>
      </div>
      <ReturnBTN></ReturnBTN>
    </div>
  );
};

export default Restaurant;
