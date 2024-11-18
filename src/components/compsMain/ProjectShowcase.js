import React, { useContext, memo } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { ProjectsContext } from "../../context/projectsContext";
import allProjects from "../../utils/projectUtil";
import "../../styles/projectShowcase.css";

function ProjectShowcase() {
  const { projects, refProject, selectedProject } = useContext(ProjectsContext);

  const Project = () => {
    const Comp = allProjects[selectedProject.id];

    return (
      <div key={selectedProject.id}>
        <Comp />
      </div>
    );
  };

  const IconBar = memo(({ selectedProject, projects }) => {
    const { GitHub: gitHub, Code: code, Group: group } = selectedProject;
    return (
      <>
        <div className="icons-box">
          <FontAwesomeIcon icon={faUserGroup} className="projectShowcase-icon" />
          <p className="projectShowcase-icons-text">{group}</p>
        </div>

        <div className="icons-box">
          <FontAwesomeIcon icon={faLaptopCode} className="projectShowcase-icon" />
          <p className="projectShowcase-icons-text">{code}</p>
        </div>

        <div className="icons-box">
          <FontAwesomeIcon icon={faGithub} className="projectShowcase-icon" />
          <a
            className="projectShowcase-icons-text"
            href={gitHub}
            target="_blank"
            rel="noreferrer">
            GitHub
          </a>
        </div>
        {selectedProject.Title === "Die Yoga-Website" ? (
          <div className="icons-box">
            <FontAwesomeIcon icon={faGlobe} className="projectShowcase-icon" />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://yoga.waljus.de/"
              className="projectShowcase-icons-text">
              Website
            </a>
          </div>
        ) : null}
        {selectedProject.Title === "LinguPingu" ? (
          <div className="icons-box">
            <FontAwesomeIcon icon={faGlobe} className="projectShowcase-icon" />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://lingupingu.waljus.de/"
              className="projectShowcase-icons-text">
              Website
            </a>
          </div>
        ) : null}
      </>
    );
  });

  return (
      <div id="projectShowcase" className="projectShowcase-box-wrapper">
        <div ref={refProject} className="projectShowcase-title-headline">
          {selectedProject.Title}
        </div>

        <div className="icons-box-wrapper">
          <IconBar selectedProject={selectedProject} projects={projects} />
        </div>
        <Project />
      </div>
  );
}
export default ProjectShowcase;
