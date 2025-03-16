import React, { useContext, memo } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectsContext } from "../../context/projectsContext";
import allProjects from "../../utils/projectUtil";

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
 
  const IconBar = memo(({ selectedProject }) => {
    const { GitHub: gitHub, Code: code, Group: group, Link: link } = selectedProject;
  
    const icons = [
      { condition: group, icon: faUserGroup, content: group },
      { condition: link, icon: faGlobe, link: link, text: "Website" },
      { condition: gitHub, icon: faGithub, link: gitHub, text: "GitHub" },
      { condition: code, icon: faLaptopCode, content: code },
    ];
  
    return (
      <>
        {icons
          .filter(({ condition }) => condition)
          .map(({ icon, content, link, text }, index) => (
            <div key={index} className="project-showcase__icon-box">
              <FontAwesomeIcon icon={icon} className="project-showcase__icon" />
              {link ? (
                <a href={link} target="_blank" rel="noreferrer">
                  {text}
                </a>
              ) : (
                <span>{content}</span>
              )}
            </div>
          ))}
      </>
    );
  });
  
  

  return (
    <div id="projectShowcase" className="project-showcase">
      <span ref={refProject} className="project-showcase__headline">
        {selectedProject.Title}
      </span>

      <div className="project-showcase__icons-box-wrapper">
        <IconBar selectedProject={selectedProject} projects={projects} />
      </div>
      <Project />
    </div>
  );
}

export default ProjectShowcase;
