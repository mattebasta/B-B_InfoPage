import React from "react"
import { Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { Axios } from "axios";
import "./Layout.css";


const Layout = () => {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
/** const used to take all the information inserted in the registration form */
// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [phone, setPhone] = useState(0);
// const [startdate, setStartDate] = useState("");
// const [enddate, setEndDate] = useState("");

// const addbooking = () => {
//   Axios.post('http://localhost:3001/create', {
//   name: name,
//   email: email,
//   phone: phone,
//   startdate: startdate,
//   enddate: enddate,
//   }).then(() => {
//   window.alert("Thank you for your reservation, you will soon receive an email with a resume")
//   });
// };

  return (
    <>
      <div className="Homebackground">
        <div className="Banner">
          <p className="BannerText" onClick={scrollToTop}>Tenuta San Tommaso</p>
        </div>
        <div className="WelcomeText">
          <div className="upText">WELCOME TO</div>
          <div className="midText">TENUTA SAN TOMMASO</div>
          <div className="downText">CLICK BUTTONS BELOW FOR MORE...</div>
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

            <HashLink smooth to="/contact#landing">
              <button className="contactButton">Helpful <br></br> Numbers</button>
            </HashLink>
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
