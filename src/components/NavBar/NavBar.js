import React, { useState } from 'react'
import "./NavBar.css";
import {Link} from "react-scroll";
import M_logo from "../../Images/M_logo.png";
import Contact_logo from "../../Images/Contact_logo.png";
import Burger_menu_icon from "../../Images/Burger_menu_icon.png";

const NavBar = () => {
  const [showMenu,setShowMenu]=useState(false);
  return (
    <div className="navbar">
        <img src={M_logo} alt="" className="navbar-logo"/>
        <div className="navbar-menu">
            <Link to="intro" activeClass="active" spy={true} smooth={true} duration={500} offset={-80} className="navbar-menu-item">Home</Link>
            <Link to="about" activeClass="active" spy={true} smooth={true} duration={500} offset={-80} className="navbar-menu-item">About</Link>
            <Link to="skills" activeClass="active" spy={true} smooth={true} duration={500} offset={-80} className="navbar-menu-item">Skills</Link>
            <Link to="projects" activeClass="active" spy={true} smooth={true} duration={500} offset={-80} className="navbar-menu-item">Projects</Link>
            <Link className="navbar-menu-item">Projects</Link>
        </div>
        <Link to="contact" smooth={true} duration={500} offset={-80}>
        <button className="navbar-button" >
                <img src={Contact_logo} alt="" className="navbar-contact-logo"/>Contact Me
        </button>
        </Link>
        <img src={Burger_menu_icon} alt="" className="mobmenu" onClick={()=>{setShowMenu(!showMenu)}}/>
        <div className="navbar-burgermenu" style={{display:showMenu?"flex":"none"}}>
            <Link to="intro" activeClass="active" spy={true} smooth={true} duration={500} offset={-80} className="navbar-burgermenu-item" onClick={()=>{setShowMenu(false)}}>Home</Link>
            <Link to="about" activeClass="active" spy={true} smooth={true} duration={500} offset={-80} className="navbar-burgermenu-item" onClick={()=>{setShowMenu(false)}}>About</Link>
            <Link to="skills" activeClass="active" spy={true} smooth={true} duration={500} offset={-80} className="navbar-burgermenu-item" onClick={()=>{setShowMenu(false)}}>Skills</Link>
            <Link className="navbar-burgermenu-item" onClick={()=>{setShowMenu(false)}}>Projects</Link>
            <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500} offset={-80} className="navbar-burgermenu-item" onClick={()=>{setShowMenu(false)}}>Contact</Link>
        </div>
      </div>
  )
}

export default NavBar