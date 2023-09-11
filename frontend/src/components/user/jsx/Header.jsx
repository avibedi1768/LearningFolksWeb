import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../../img/logo.png";
import "../css/HeaderStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  // const navigate = useNavigate();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [shadow, setShadow] = useState(false);
  const changeShadow = () => {
    if (window.scrollY >= 100) {
      setShadow(true)
    } else {
      setShadow(false)
    }
  }

  window.addEventListener('scroll', changeShadow);

  return (
    <div id="fade-in-top" className={shadow ? "header_header header_shadow_header" : "header_header"}>
      <div className="left_section_header">
        <Link to="/">
          <img src={Logo} alt="learning" />
        </Link>
      </div>

      <div className={click ? "right_section_header active_header" : "right_section_header"}>

        <div className="mid_section_header">
          <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><a href="https://www.learningfolks.in/LFblog/blog.html">Blog</a></li>
            <li><Link to="/collaborate">Collaborate</Link></li>
            <li><a href="#">More »</a>
              <ul className="dropdown">
              
                <li><Link to="/about">About</Link></li>
                <li><Link to="/careers">Careers</Link></li>
              </ul>
            </li>
            <li><a href="https://courses.learningfolks.in/s/store" style={{ fontSize: '20px', color: 'blue' }}>Courses</a></li>
          </ul>
        </div>


        {/* <div className="button_container_header">
          <button onClick={() => navigate("/login")} className="btn_light_header">Log in</button>
          <button onClick={() => navigate("/signup")} className="btn_primary_header">Sign Up</button>
        </div> */}
      </div>

      <div className="hamburger_header">
        {click ? (<FaTimes size={20} className="hamburger_icon_header" onClick={handleClick} />) :
          (<FaBars size={20} className="hamburger_icon_header" onClick={handleClick} />)}
      </div>
    </div>
  );
};

export default Header;
