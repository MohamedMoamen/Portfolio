import React from "react";
import "./Intro.css";
import Personal_Photo from "../../Images/Personal_Photo2.png";

const Intro = () => {
  return (
    <section id="intro">
      <img
        src={Personal_Photo}
        alt="Mohamed Moamen"
        className="intro-personal-photo"
      />
      <div className="intro-content">
        <span>
          I'm <span className="intro-name">Mohamed Moamen</span>
        </span>
        <br />
        <span className="intro-title">
          Full Stack Developer | PHP Laravel & React.js
        </span>
        <br />
        <span className="intro-paragraph">
          Building responsive web applications, RESTful APIs, and real-time
          systems using modern backend and frontend technologies
        </span>
        <a
          href="/Mohamed Moamen Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="intro-resume">My Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Intro;
