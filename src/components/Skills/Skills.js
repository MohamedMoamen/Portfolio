import React from 'react'
import "./Skills.css";
import HTML5_logo from "../../Images/HTML5_logo.png";
import CSS3_logo from "../../Images/CSS3_logo.png"
import JavaScript_logo from "../../Images/JavaScript_logo.png";
import TypeScript_logo from "../../Images/TypeScript_logo.png";
import TailwindCSS_logo from "../../Images/TailwindCSS_logo.png";
import ReactJs_logo from "../../Images/ReactJs_logo.png";
import NextJs_logo from "../../Images/NextJs_logo.png";
import ReduxToolkit_logo from "../../Images/ReduxToolkit_logo.png";
import MaterialUI_logo from "../../Images/Material UI_logo.png";
import Git_GitHub_logo from "../../Images/Git_GitHub_logo.png"

const Skills = () => {
  return (
    <div id="skills">
        <h1 className="skills-title">Skills</h1>
        <div className="skills-content">
            <div className="skills-logoandname">
                <img className="skills-logo" src={HTML5_logo} alt=""/>
                <p className="skills-logo-name"> HTML5</p>
            </div>
            <div className="skills-logoandname">
                <img className="skills-logo" src={CSS3_logo} alt=""/>
                <p className="skills-logo-name"> CSS3</p>
            </div>
            <div className="skills-logoandname">
                <img className="skills-logo" src={JavaScript_logo} alt=""/>
                <p className="skills-logo-name"> JavaScript</p>
            </div>
            <div className="skills-logoandname">
                <img className="skills-logo" src={TypeScript_logo} alt=""/>
                <p className="skills-logo-name"> TypeScript</p>
            </div>
            <div className="skills-logoandname">
                <img className="skills-logo" src={TailwindCSS_logo} alt=""/>
                <p className="skills-logo-name"> Tailwind CSS</p>
            </div>
            <div className="skills-logoandname">
                <img className="skills-logo" src={ReactJs_logo} alt=""/>
                <p className="skills-logo-name"> ReactJs</p>
            </div>
            <div className="skills-logoandname">
                <img className="skills-logo" src={NextJs_logo} alt=""/>
                <p className="skills-logo-name"> NextJs</p>
            </div>
            <div className="skills-logoandname">
                <img className="skills-logo" src={ReduxToolkit_logo} alt=""/>
                <p className="skills-logo-name"> Redux Toolkit</p>
            </div>
            <div className="skills-logoandname">
                <img className="skills-logo" src={MaterialUI_logo} alt=""/>
                <p className="skills-logo-name"> Material UI</p>
            </div>
            <div className="skills-logoandname">
                <img className="skills-logo" src={Git_GitHub_logo} alt=""/>
                <p className="skills-logo-name"> Git/GitHub</p>
            </div>
        </div>

    </div>
  )
}

export default Skills