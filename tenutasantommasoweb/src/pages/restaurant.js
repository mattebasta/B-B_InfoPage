import './Restaurant.css'
import ReturnBTN from './component/upToPageButton.js';

const Restaurant = () => {
    return (
    <div className="backgroundRest">
      <div className="bannerRest" id="landing">
        Restaurants
      </div>
      <div>
        <p>Below you can find map link to restaurants and places where to eat typical dishes</p>
      </div>
      <div>
        <p>Bar Mazzarella</p>
        {/* <img src="" alt="" /> */}
        <p>Perfect for breakfast, in summertime we reccomend the "Granita di mandorla con brioche", <br />
        which is a typical breakfast in sicily.</p>
      </div>
      <div>
        <p>Memento7</p>
        {/* <img src="" alt="" /> */}
        <p>If you want to enjoy a good pizza 
          <br /> or some good dishes, this is the perfect place, opened only in the evening </p>
      </div>
      <div>
        <p>Onda Blu</p>
        {/* <img src="" alt="" /> */}
        <p>Good restaurant to eat fish dishes</p>
      </div>
        <ReturnBTN></ReturnBTN>
      </div>
    );
  };
  
  export default Restaurant;