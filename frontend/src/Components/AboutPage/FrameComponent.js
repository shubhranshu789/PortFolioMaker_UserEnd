import "./CSS/FrameComponent.css";
import PropTypes from "prop-types";
import "./CSS/global.css";

import facebook from '../../Images/facebook.png';
import linkedIn from '../../Images/linkedIn.png';
import instagram from '../../Images/instagram.png';



const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`footer-icons-wrapper ${className}`}>
      <div className="footer-icons" data-scroll-to="footerIcons">
        <div className="icons">
          {/* <h1>lr</h1> */}
          <img
            className="phinstagram-logo-fill-icon"
            loading="lazy"
            alt=""
            src={instagram}
          />
          <img
            className="bilinkedin-icon"
            loading="lazy"
            alt=""
            src={linkedIn}
          />
          <img
            className="bienvelope-fill-icon"
            loading="lazy"
            alt=""
            src={facebook}
          />
        </div>
        <div className="madelyn-torff-2021-wrapper">
          <div className="madelyn-torff-2021">{`Madelyn Torff 2021 `}</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;