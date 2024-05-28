// import Header from "../components/Header";
// import FrameComponent from "../components/FrameComponent";

import Header from "./Header";
import FrameComponent from "./FrameComponent";
import "./CSS/global.css";

import { Link, useNavigate } from "react-router-dom";


// import "./CSS/AboutSimpleFooter.css";
import '../AboutPage/CSS/AboutSimpleFooter.css';
import AboutPic from '../../Images/akash1.png';

const AboutSimpleFooter = () => {
  return (
    <div className="about-simple-footer">
      <Header />
      <main className="about-simple-footer-inner">
        <section className="frame-parent1">
          <div className="frame-group">
            <div className="frame-wrapper">
              <div className="title-parent">
                <h1 className="title">About me</h1>
                <div className="text">
                "Passionate UI designer with a keen eye for detail and a love for creating intuitive, user-friendly interfaces. Expert in transforming complex ideas into engaging digital experiences that captivate users and drive results."
                </div>
                <Link style={{textDecoration : "none"}} to={'/'}>
                  <button className="button-primary">
                    <div className="text1">Explore</div>
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-2">
              <div className="bg-2-child" />
              <img
                className="pexels-artem-beliaikin-1832323-icon"
                loading="lazy"
                alt=""
                src={AboutPic}
              />
            </div>
          </div>
          <FrameComponent />
        </section>
      </main>
    </div>
  );
};

export default AboutSimpleFooter;