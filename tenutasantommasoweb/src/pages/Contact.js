import "./Contact.css"
import ReturnBTN from "./component/upToPageButton"
import { FaAmbulance } from "react-icons/fa"
import { GrUserPolice } from "react-icons/gr"
import { MdFireTruck } from "react-icons/md"
import { BsWhatsapp } from "react-icons/bs"

const Contact = () => {
    return (
      <div className="backgroundContact">
        <div id="landing" className="bannerContact">Helpful Numbers</div>
        <div className="contactContainer">
          <div className="contact">
            <BsWhatsapp size={40}></BsWhatsapp>
            <p>
              for any questions or problems regarding the resort <br />
              you can contact Giuseppe via whatsapp <br />
              +39 3331317992
            </p>
          </div>
          <div className="contact">
            <MdFireTruck size={40}></MdFireTruck>
            <p>
              firefighters <br />
              call 115
            </p>
          </div>
          <div className="contact">
            <GrUserPolice size={40}></GrUserPolice>
            <p>
              Police <br />
              call 113
            </p>
          </div>
          <div className="contact">
            <FaAmbulance size={40}></FaAmbulance>
            <p>
              ambulance <br />
              call 118
            </p>
          </div>
        </div>
        <ReturnBTN></ReturnBTN>
      </div>
    );
  };
  export default Contact;