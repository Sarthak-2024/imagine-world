import React, { Fragment } from "react";
import logo from "../../../images/imagine.jpg";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import "./Footer.css";

const Footer = () => {
  return (
    <Fragment>
    <footer id="footer">  
        <div className="midFooter">
        <img src={logo} alt="ECOMMERCEHUT" />

        </div>
        
        <div className="rightFooter">
        <h4>Follow Me</h4>
        
        <a href="https://www.instagram.com/_sarthak_kashyap/?hl=en"><InstagramIcon/></a>
        <a href="https://www.facebook.com/sarthak.singhrajput.14"><FacebookIcon/></a>
        <a href="https://www.youtube.com/c/LordHuron/videos"><YouTubeIcon/></a>
        </div>
        </footer>
        <div className="copyright"><p>Copyrights 2022 &copy; SarthakSingh</p></div>
        </Fragment>
  );
};

export default Footer;