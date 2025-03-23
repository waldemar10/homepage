import React, { useContext, memo } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectsContext } from "../../context/projectsContext";
import allProjects from "../../utils/projectUtil";

function ProjectShowcase() {
  const { refProject, selectedProject,projects } = useContext(ProjectsContext);

  const Project = () => {
    if (!selectedProject) return null;
    const Comp = allProjects[selectedProject.tag];

    return <Comp />;
  };

  const IconBar = memo(({ selectedProject }) => {
    const {
      github_link: gitHub,
      code_languages: code,
      team_size: group,
      project_link: link,
    } = selectedProject;

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

  if (!selectedProject) return null;

  return (
    <>
    {projects && (
    <div id="projectShowcase" className="project-showcase">
      <span ref={refProject} className="project-showcase__headline">
        {selectedProject.title}
      </span>

      <div className="project-showcase__icons-box-wrapper">
        <IconBar selectedProject={selectedProject} />
      </div>
      <Project />
    </div>
    )}
    </>
  );
}

export default ProjectShowcase;
