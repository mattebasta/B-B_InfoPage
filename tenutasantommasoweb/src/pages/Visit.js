import "./Visit.css"
import ReturnBTN from "./component/upToPageButton"
import ortigiaIMG from "./img/ortigia.jpeg"


const Visit = () => {
    return (
      <div className="backgroundVisit">
        <div className="bannerVisit" id="landing">
          Must Visit
        </div>
        <div className="visitInfo">

        </div>
        <div className="visitPlaceContainer">
          <div className="ortigiaDiv">
            <div className="polaroid">
              <img src={ortigiaIMG} alt="ortigia" />
              <p>ortigia island</p>
            </div>
          </div>
          <div className="tempioApDiv">
            <div className="polaroid"></div>
            <img src="" alt="" />
          </div>
          <div className="fontanaDianaDiv">
            <div className="polaroid"></div>
            <img src="" alt="" />
          </div>
          <div className="duomoDiv">
            <div className="polaroid"></div>
            <img src="" alt="" />
          </div>
          <div className="fonteArDiv">
            <div className="polaroid"></div>
            <img src="" alt="" />
          </div>
          <div className="castManiaceDiv">
            <div className="polaroid"></div>
            <img src="" alt="" />
          </div>
          <div className="teatGrecoDiv">
            <div className="polaroid"></div>
            <img src="" alt="" />
          </div>
          <div className="santuarioDiv">
            <div className="polaroid"></div>
            <img src="" alt="" />
          </div>
          <div className="catacombeDiv">
            <div className="polaroid"></div>
            <img src="" alt="" />
          </div>
          <div className="orecDionisioDiv">
            <div className="polaroid"></div>
            <img src="" alt="" />
          </div>
          <div className="archDiv">
            <div className="polaroid"></div>
            <img src="" alt="" />
          </div>
        </div> 
        <ReturnBTN></ReturnBTN>
      </div>
    );
  };
  
  export default Visit;