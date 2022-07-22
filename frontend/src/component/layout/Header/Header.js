import React, { Fragment } from "react";
import logo from "../../../images/imagine-logo.jpg";
import Favorite from '@material-ui/icons/Favorite';
import FaceIcon from '@material-ui/icons/Face';
import ContactSupport from '@material-ui/icons/ContactSupport';
import Instagram from '@material-ui/icons/Instagram';
import Info from '@material-ui/icons/Info';
import "./Header.css";
import Search from "../../../component/Product/Search";

const Header = () => {
  return (
    <Fragment>
    <div className='Navbar'>
        <div className='Navbar-1'>
          <a href="/">
            <img src={logo} alt="Logo"/>
          </a>
          </div>
          <div className='Navbar-2'>
          <a href="https://www.instagram.com/_sarthak_kashyap" className="a"> <Instagram /> </a>
          <Search/>
          </div>
          <div className='Navbar-3'>
          <a href="/Favorite" className="a"> <Favorite /> </a>
          <a href="mailto:sarthakkashyap190@gmail.com" className="a"><ContactSupport/></a>
          <a href="/about" className="a"><Info/></a>
          <a href="/login" className="a"> <FaceIcon /> </a>
        </div>
      </div>
    </Fragment>
    );
};

export default Header;
