import React from "react";
import "./Skills.css";
import PHP_logo from "../../Images/PHP_logo.png";
import Laravel_logo from "../../Images/Laravel_logo.png";
import MySQL_logo from "../../Images/MySQL_logo.png";
import SQL_logo from "../../Images/SQL_logo.png";
import OOP_logo from "../../Images/OOP_logo.png";
import RESTfulAPIs_logo from "../../Images/RESTfulAPIs_logo.png";
import HTML5_logo from "../../Images/HTML5_logo.png";
import CSS3_logo from "../../Images/CSS3_logo.png";
import JavaScript_logo from "../../Images/JavaScript_logo.png";
import TypeScript_logo from "../../Images/TypeScript_logo.png";
import ReactJs_logo from "../../Images/ReactJs_logo.png";
import NextJs_logo from "../../Images/NextJs_logo.png";
import ReduxToolkit_logo from "../../Images/ReduxToolkit_logo.png";
import TailwindCSS_logo from "../../Images/TailwindCSS_logo.png";
import ReactQuery_logo from "../../Images/ReactQuery_logo.png";
import WebSocket_logo from "../../Images/WebSocket_logo.png";
import Git_logo from "../../Images/Git_logo.png";
import GitHub_logo from "../../Images/GitHub_logo.png";
import Postman_logo from "../../Images/Postman_logo.png";
import Docker_logo from "../../Images/Docker_logo.png";

const Skills = () => {
  return (
    <section id="skills">
      <h1 className="skills-title">Skills</h1>

      <div className="skills-content">
        <div className="skills-logoandname">
          <img className="skills-logo" src={PHP_logo} alt="PHP" />
          <p className="skills-logo-name">PHP</p>
        </div>

        <div className="skills-logoandname">
          <img className="skills-logo" src={Laravel_logo} alt="Laravel" />
          <p className="skills-logo-name">Laravel</p>
        </div>

        <div className="skills-logoandname">
          <img className="skills-logo" src={MySQL_logo} alt="MySQL" />
          <p className="skills-logo-name">MySQL</p>
        </div>

        <div className="skills-logoandname">
          <img className="skills-logo" src={SQL_logo} alt="SQL" />
          <p className="skills-logo-name">SQL</p>
        </div>

        <div className="skills-logoandname">
          <img className="skills-logo" src={OOP_logo} alt="OOP" />
          <p className="skills-logo-name">OOP</p>
        </div>

        <div className="skills-logoandname">
          <img
            className="skills-logo"
            src={RESTfulAPIs_logo}
            alt="RESTful APIs"
          />
          <p className="skills-logo-name">RESTful APIs</p>
        </div>

        <div className="skills-logoandname">
          <img className="skills-logo" src={HTML5_logo} alt="HTML" />
          <p className="skills-logo-name">HTML</p>
        </div>

        <div className="skills-logoandname">
          <img className="skills-logo" src={CSS3_logo} alt="CSS" />
          <p className="skills-logo-name">CSS</p>
        </div>

        <div className="skills-logoandname">
          <img className="skills-logo" src={JavaScript_logo} alt="JavaScript" />
          <p className="skills-logo-name">JavaScript</p>
        </div>

        <div className="skills-logoandname">
          <img className="skills-logo" src={TypeScript_logo} alt="TypeScript" />
          <p className="skills-logo-name">TypeScript</p>
        </div>

        <div className="skills-logoandname">
          <img className="skills-logo" src={ReactJs_logo} alt="React.js" />
          <p className="skills-logo-name">React.js</p>
        </div>

        <div className="skills-logoandname">
          <img className="skills-logo" src={NextJs_logo} alt="Next.js" />
          <p className="skills-logo-name">Next.js</p>
        </div>

        <div className="skills-logoandname">
          <img
            className="skills-logo"
            src={ReduxToolkit_logo}
            alt="Redux Toolkit"
          />
          <p className="skills-logo-name">Redux Toolkit</p>
        </div>

        <div className="skills-logoandname">
          <img
            className="skills-logo"
            src={TailwindCSS_logo}
            alt="Tailwind CSS"
          />
          <p className="skills-logo-name">Tailwind CSS</p>
        </div>

        <div className="skills-logoandname">
          <img
            className="skills-logo"
            src={ReactQuery_logo}
            alt="React Query"
          />
          <p className="skills-logo-name">React Query</p>
        </div>

        <div className="skills-logoandname">
          <img className="skills-logo" src={WebSocket_logo} alt="WebSockets" />
          <p className="skills-logo-name">WebSockets</p>
        </div>

        <div className="skills-logoandname">
          <img className="skills-logo" src={Git_logo} alt="Git" />
          <p className="skills-logo-name">Git</p>
        </div>

        <div className="skills-logoandname">
          <img className="skills-logo" src={GitHub_logo} alt="GitHub" />
          <p className="skills-logo-name">GitHub</p>
        </div>

        <div className="skills-logoandname">
          <img className="skills-logo" src={Postman_logo} alt="Postman" />
          <p className="skills-logo-name">Postman</p>
        </div>

        <div className="skills-logoandname">
          <img className="skills-logo" src={Docker_logo} alt="Docker" />
          <p className="skills-logo-name">Docker</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
