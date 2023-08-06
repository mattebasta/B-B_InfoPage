import "./Supermarket.css";

const Supermarket = () => {
  return (
    <div className="backgroundSuper">
      <div className="bannerSuper" id="landing">
        Supermarket
      </div>
      <div className="superContainer">
        <p className="linkExplain">
          There are 3 supermarket near the structure <br /> you can find links
          below to get driving directions <br />
          Simply click on the link you prefer and open your favourite map app
        </p>
        <div className="superLinks">
          <a
            href="http://maps.apple.com/?q=37.08825761369096,15.159846916778568"
            rel="noreferrer"
            target="_blank"
          >
            <div className="superInfo">
              <p>COOP Supermarket</p>
              <p>2 minute | 750 m | €€</p>
            </div>
          </a>
            <a
              href="http://maps.apple.com/?q=37.079689,15.163045"
              rel="noreferrer"
              target="_blank"
            >
              <div className="superInfo">
            <p>EuroSpin Supermarket</p>
            <p>4 minute | 2 km | €</p>
          </div>
          </a>
          <a
              href="http://maps.apple.com/?q=37.08005594977314,15.164382697630419"
              rel="noreferrer"
              target="_blank"
          >
            <div className="superInfo">
              <p>Penny Supermarket</p>
              <p>6 minute | 2,3 km | €</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Supermarket;
