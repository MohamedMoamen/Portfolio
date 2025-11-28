import React from 'react'
import "./ProjectsItem.css";
const ProjectsItem = (project) => {
    function getLink(){
        // console.log(project.link);
        window.open(`${project.link}`,"_blank");
    }
    function getSourceCode(){
        window.open(`${project.sourcecode}`,"_blank");
    }
    return (
    <div className="projectsitem">
        <img className="projectsitem-image" src={project.image} alt=""/>
        <h3 className="projectsitem-projecttitle">{project.title}</h3>
        <h4 className="projectsitem-projecttype">{project.type}</h4>
        <p className="projectsitem-description">{project.description}</p>
        <div className="projectsitem-buttons">
           {!project.hideDemo && (
               <button onClick={getLink} className="projectsitem-button">Demo</button>
           )}
           <button onClick={getSourceCode} className="projectsitem-button">Source Code</button>
        </div>
    </div>
  )
}

export default ProjectsItem