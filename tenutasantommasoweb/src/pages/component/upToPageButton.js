import "./upToPageButton.css"
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function StartPoint() {
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
    <div className="toTopDiv">
        <button onClick={scrollToTop} className="backToTopBTN">
            <BsFillArrowUpCircleFill size={40}></BsFillArrowUpCircleFill>
        </button>
    </div>
    );
}

export default StartPoint;
