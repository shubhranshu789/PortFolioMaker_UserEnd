import { useCallback } from "react";
import "./CSS/Header.css";
import PropTypes from "prop-types";
import "./CSS/global.css";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ className = "" }) => {
  const onMadelynTorffTextClick = useCallback(() => {
    // Please sync "Portfolio - Simple Footer" to the project
  }, []);

  const onTabDefaultClick = useCallback(() => {
    // Please sync "Portfolio - Simple Footer" to the project
  }, []);

  const onSobreText2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='footerIcons']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate("/");
  };

  return (
    <header className={`header ${className}`}>
      <b className="madelyn-torff" onClick={onMadelynTorffTextClick}>
        <Link className="logo-link" to={"/"}>
          <b className="logo-text">AKASH</b>
          {/* <img src={AkashLogo} alt="" /> */}
        </Link>
      </b>

      <div className="nav-wrapper">
        <nav className="nav">
          <div className="tab-active">
            <a className="sobre">About</a>
            <div className="tab-active-child" />
          </div>

          <div
            onClick={() => {
              handleSubmit();
            }}
            className="tab-default"
          >
            {/* <Link style={{ textDecoration: "none" , color: "" }} to={'/addprojects'}></Link> */}
            <a className="sobre1">Projects</a>
            {/* <Link/> */}
          </div>

          <div className="tab-default1">
            <a className="sobre2" onClick={onSobreText2Click}>
              Contacts
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
