import "./Restaurant.css";
import ReturnBTN from "./component/upToPageButton.js";
import barImg from "./img/MazzarellaCafe_after.png";
import memImg from "./img/Memento_after.jpeg";
import ondBluImg from "./img/ondaBluRestaurant_after.jpeg";

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
        <a
          href="https://www.google.com/maps/dir/?api=1&origin=37.092317,15.161946&destination=37.0887772362438,15.162200803554175&travelmode=driving"
          rel="noreferrer"
          target="_blank"
        >
          <div className="BarDiv">
            <img src={barImg} alt="bar" />
            <div>
              <p>Bar Mazzarella</p>
              <p>
                Perfect for breakfast, in summertime we reccomend the "Granita
                di mandorla con brioche" <br />
                which is a typical breakfast in sicily <br />
                <sub>**made with almond</sub>
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://www.google.com/maps/dir/?api=1&origin=37.092317,15.161946&destination=37.081872,15.153473&travelmode=driving"
          rel="noreferrer"
          target="_blank"
        >
          <div className="mementoDiv">
            <img src={memImg} alt="memento" />
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
            <img src={ondBluImg} alt="ondaBlu" />
            <div>
              <p>Onda Blu</p>
              <p>Good restaurant to eat typical fish dishes</p>
            </div>
          </div>
        </a>
      </div>
      <ReturnBTN></ReturnBTN>
    </div>
  );
};

export default Restaurant;
