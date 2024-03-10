import { FaRegStar } from "react-icons/fa";
import "./header.css";

const Header = () => {
  return (
    <div className="header">

      <div className="headerContainer">
        <h1 className="headerContainer-h1">
          Web application for transfers to airports, hotels, tourist sites, etc.
        </h1>
        <div className="headerContainerInputButton">
          <div class="headerLabel_input mb-3">
            <label>Email address:</label>
            <input type="email" className="headerImputMail" placeholder="Enter email" />
          </div>
          <button type="submit" className="headerContainer-button">
            Subscribe
          </button>
        </div>
      </div>

      <div className="headerLayout">
        <h3 className="headerLayout-h3">
          Friendly and professional drivers
        </h3>
        <div className="headerLayout-star">
          <FaRegStar className="headerStarIcon"/>
          <FaRegStar className="headerStarIcon"/>
          <FaRegStar className="headerStarIcon"/>
          <FaRegStar className="headerStarIcon"/>
          <FaRegStar className="headerStarIcon"/>
        </div>
      </div>

    </div>
  );
};

export default Header;
