import "./CSS/FrameComponent1.css";
import PropTypes from "prop-types";
import "./CSS/global.css";
// import Headerpic from "..Images/eminem.png"
// import Headerpic from '../Images/eminem.png';
import Headerpic from '../Images/akash.png';
import { Link } from "react-router-dom";

import { useCallback } from "react";


const FrameComponent1 = ({ className = "" }) => {

  const onTabDefault1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='projectsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);




  return (
    <section  style={{display : "flex" }} className={`frame-parent ${className}`}>
      <div className="intro-wrapper">
        <div className="intro">
          <b className="uiux-designer"> UI/UX Designer</b>
          <div className="content">
            <h1 className="title">Hello, my name is Akash Yadav</h1>
            <div className="subheadline">
              <div className="text">
              I specialize in crafting seamless digital experiences that blend aesthetic appeal with functional efficiency. With a strong foundation in both design and development, I create intuitive interfaces that prioritize user engagement and satisfaction.
              </div>
            </div>
            <div className="buttons">
              <button onClick={onTabDefault1Click} className="button-primary">
                <div className="text1">Projects</div>
              </button>
              <button className="button-secondary">
                <a href="https://wa.me/916306710581" target="_blank" rel="noopener noreferrer">
                  <div className="text2">Connect</div>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img className="image-icon" loading="lazy" alt="" src={Headerpic} />
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;