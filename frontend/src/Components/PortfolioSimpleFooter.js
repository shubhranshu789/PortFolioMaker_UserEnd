// import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent1 from "./FrameComponent1";
// import FrameComponent from "../components/FrameComponent";
import FrameComponent from "./FrameComponent";
// import Header from "../components/Header";
import Header from "./Header";
// import Projects from "../components/Projects";
import Projects from "./Projects";
import img1 from "../Images/Capture.JPG";

import logo from '../Images/HomePics/logo.webp'
import brand from '../Images/HomePics/brand.JPG'
import creative from '../Images/HomePics/cretives1.JPG'
import presentation from '../Images/HomePics/presentation1.JPG'
import social from '../Images/HomePics/social.jpg'
import uidesign from '../Images/HomePics/uidesign1.JPG'

import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

import "./CSS/PortfolioSimpleFooter.css";
import "./CSS/global.css";

const PortfolioSimpleFooter = () => {
  const navigate = useNavigate();
  useEffect(() => {
   
  }, []);

  return (
    <div className="portfolio-simple-footer">
      <FrameComponent1 />
      <Header />
      <section className="projects-wrapper">
        <Projects />
      </section>
      <div className="psf-box">

        {/* <div className="psf-container">
          <Link to={"/viewlogo"}>
            <img className="" src={img1} alt="" />
          </Link>
          <h2>Logos</h2>
        </div> */}

        <div className="psf-container">
          <Link to={"/viewlogo"}>
            <img className="" src={logo} alt="" />
            <div className="overlay"></div>
          </Link>
          <h2>Logos</h2>
        </div>

        <div className="psf-container">
          <Link to={"/brandview"}>
            <img className="" src={brand} alt="" />
            <div className="overlay"></div>
          </Link>
          <h2>Brand Identity Projects</h2>
        </div>

        <div className="psf-container">
          <Link to={"/listeningview"}>
            <img className="" src={creative} alt="" />
            <div className="overlay"></div>
          </Link>
          <h2> Social Media Graphics</h2>
        </div>


        <div className="psf-container">
          <Link to={"/presentationview"}>
            <img className="" src={presentation} alt="" />
            <div className="overlay"></div>
          </Link>
          <h2>UI Designs</h2>
        </div>

        <div className="psf-container">
          <Link to={"/graphicsview"}>
            <img className="" src={social} alt="" />
            <div className="overlay"></div>
          </Link>
          <h2>UI Designs</h2>
        </div>

        
        <div className="psf-container">
          <Link to={"/uidesignview"}>
            <img className="" src={uidesign} alt="" />
            <div className="overlay"></div>
          </Link>
          <h2>UI Designs</h2>
        </div>


        
        
        
      </div>

      <FrameComponent />
    </div>
  );
};

export default PortfolioSimpleFooter;
