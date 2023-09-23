import React from "react"
import "./Visit.css"
import ReturnBTN from "./component/upToPageButton"
import ortigiaIMG from "./img/ortigia.jpeg"
import castManiace from "./img/castManiace.jpeg"
import catacombe from "./img/catacombe.jpeg"
import duomo from "./img/duomo.jpeg"
import fontDiana from "./img/fontDiana.jpeg"
import fonteAretusa from "./img/fonteAretusa.jpeg"
import orDionisio from "./img/Orecchio-di-Dionisio.jpg"
import santuario from "./img/santuario.jpeg"
import teatGreco from "./img/teatroGreco.jpeg"
import tecnoparco from "./img/tecnoparco-archimede.jpg"
import tempioAp from "./img/tempioAp.jpeg"

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
              <p>isola di ortigia</p>
            </div>
          </div>
          <div className="tempioApDiv">
            <div className="polaroid">
              <img src={tempioAp} alt="tempioApollo" />
              <p>Tempio di apollo</p>
            </div>
          </div>
          <div className="fontanaDianaDiv">
            <div className="polaroid">
            <img src={fontDiana} alt="fontanaDiana" />
            <p>Fontana Diana</p>
            </div>
          </div>
          <div className="duomoDiv">
            <div className="polaroid">
            <img src={duomo} alt="duomo" />
            <p>Duomo di Siracusa</p>
            </div>
          </div>
          <div className="fonteArDiv">
            <div className="polaroid">
            <img src={fonteAretusa} alt="fonteAretusa" />
            <p>Fonte aretusa</p>
            </div>
          </div>
          <div className="castManiaceDiv">
            <div className="polaroid">
            <img src={castManiace} alt="castManiace" />
            <p>castello maniace</p>
            </div>
          </div>
          <div className="teatGrecoDiv">
            <div className="polaroid">
            <img src={teatGreco} alt="teatroGreco" />
            <p>teatro greco</p>
            </div>
          </div>
          <div className="santuarioDiv">
            <div className="polaroid">
            <img src={santuario} alt="santuario" />
            <p>santuario <br /> Madonna delle lacrime</p>
            </div>
          </div>
          <div className="catacombeDiv">
            <div className="polaroid">
            <img src={catacombe} alt="catacombe" />
            <p>catacombe di san giovanni</p>
            </div>
          </div>
          <div className="orecDionisioDiv">
            <div className="polaroid">
            <img src={orDionisio} alt="orecchioDioniso" />
            <p>orecchio di Dionisio</p>
            </div>
          </div>
          <div className="archDiv">
            <div className="polaroid">
            <img src={tecnoparco} alt="tecnoparco" />
            <p>tecnoparco archimede</p>
            </div>
          </div>
        </div> 
        <ReturnBTN></ReturnBTN>
      </div>
    );
  };
  
  export default Visit;