
import { useCallback } from "react";
import "./CSS/Header.css";

import PropTypes from "prop-types";
import "./CSS/global.css";

import { Link } from "react-router-dom";

import AkashLogo from '../Images/akashLogo.JPG'



const Header = ({ className = "" }) => {
  const onTabDefaultClick = useCallback(() => {
    // Please sync "About - Simple Footer" to the project
  }, []);

  const onTabDefault1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='projectsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSobreText2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='footerIcons']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <header className={`header ${className}`}>
      <Link className="logo-link" to={'/'}>
        <b className="logo-text">AKASH</b>
        {/* <img src={AkashLogo} alt="" /> */}
    </Link>
      <nav className="nav-wrapper">
        <nav className="nav">


            {/* <Link style={{ textDecoration: "none" , color: "black" }} to={'/addprojects'}>
              <div className="tab-default" onClick={onTabDefaultClick}>
                <div className="sobreNew">Add Projects</div>
              </div>
            </Link> */}

        <Link style={{ textDecoration: "none" , color: "black" }} to={"/about"}>
          <div className="tab-default" onClick={onTabDefaultClick}>
            <div className="sobre">About</div>
          </div>
        </Link>


          <div className="tab-default1" onClick={onTabDefault1Click}>
            <div className="sobre1">Projects</div>
          </div>
          <div className="tab-default2">
            <div className="sobre2" onClick={onSobreText2Click}>
              Contacts
            </div>
          </div>

          
        </nav>
      </nav>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;