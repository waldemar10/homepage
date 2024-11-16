import React, { useContext, useEffect} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { ProjectsContext } from "../../context/projectsContext";
import allProjects from "../../utils/projectUtil";
import "../../styles/showprojects.css";

function ShowProject() {
  const {
    projects,
    refProject,
    selectedProject
  } = useContext(ProjectsContext);
  useEffect(()=>{

  })
  const title = selectedProject.Title;

  const Project = () => {
    const Comp = allProjects[selectedProject.id];
    return (
      <div key={selectedProject.id}>
        <Comp />
      </div>
    );
  };
  const IconBar = () => {
    let  gitHub, code, group, requirements, modul;
    gitHub = selectedProject.GitHub;
    modul = selectedProject.Modul;
    code = selectedProject.Code;
    group = selectedProject.Group;
    requirements = selectedProject.Requirements;
    return (
      <>
        <div className="showproject-icons-and-text">
          <FontAwesomeIcon icon={faUserGroup} className="showproject-icon" />
          <p className="showproject-icons-text">{group}</p>
        </div>

        <div className="showproject-icons-and-text">
          <FontAwesomeIcon icon={faLaptopCode} className="showproject-icon" />
          <p className="showproject-icons-text">{code}</p>
        </div>

        <div className="showproject-icons-and-text">
          <FontAwesomeIcon icon={faGithub} className="showproject-icon" />
          <a
            className="showproject-icons-text"
            href={gitHub}
            target="_blank"
            rel="noreferrer">
            GitHub
          </a>
        </div>
        {projects[0].Title === "Die Yoga-Website" ? (
          <div className="showproject-icons-and-text">
            <FontAwesomeIcon icon={faGlobe} className="showproject-icon" />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://yoga.waljus.de/"
              className="showproject-icons-text">
              Website
            </a>
          </div>
        ) : null}
        {projects[0].Title === "LinguPingu" ? (
          <div className="showproject-icons-and-text">
            <FontAwesomeIcon icon={faGlobe} className="showproject-icon" />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://lingupingu.waljus.de/"
              className="showproject-icons-text">
              Website
            </a>
          </div>
        ) : null}
      </>
    );
  };
  return (
    <div id="showProject" className="showproject-box">
      <div id="showproject-box-wrapper" className="showproject-box-wrapper">
        {/* <div  className="showproject-modul-headline">
          {modul}
        </div> */}
        <div ref={refProject} className="showproject-title-headline">
          {title}
        </div>

        <div className="showproject-icons-box">
          <IconBar />
        </div>
        <Project />
      </div>
    </div>
  );
}
export default ShowProject;
