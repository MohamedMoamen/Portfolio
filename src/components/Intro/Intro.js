import React from 'react'
import "./Intro.css";
import Personal_Photo from "../../Images/Personal_Photo2.png"
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <img src={Personal_Photo} alt="" className="intro-personal-photo"/>
        <div className="intro-content">
            <span>I'm <span className="intro-name">Mohamed Moamen</span></span>
            <br/>
            <span>Frontend Developer</span>
            <br/>
            <span className="intro-paragraph">crafting responsive, dynamic , and user-friendly web applications with<br/> modern technologies to bring your ideas to life.</span>
            <a href="/MohamedMoamenResume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="intro-resume">My Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Intro