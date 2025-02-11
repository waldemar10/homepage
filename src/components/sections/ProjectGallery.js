import React, { useContext, useEffect, useRef } from "react";
import { ProjectsContext } from "../../context/projectsContext";
import { ProjectGalleryContext } from "../../context/projectGalleryContext";

import LinguPingu from "../../images/Awd/excitedPingu.png";
import Yoga from "../../images/YogaWebsite/YogaStartscreen.jpg";
import SSP from "../../images/VC/Arena.jpg";

const projectImages = {
  "LinguPingu": LinguPingu,
  "Die Yoga-Website": Yoga,
  "Schere Stein Papier Ultimate": SSP,
};

const ProjectBox = ({ index, isSelected, title, image, onSelect }) => {
  return (
    <article
      className={`project-gallery__item ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(index,true)}
    >
      <img 
        src={image} 
        alt={title} 
        className="project-gallery__image" 
        style={{ filter: isSelected ? "brightness(100%)" : "brightness(30%)" }}
      />
      <span className="project-gallery__title">{title}</span>
    </article>
  );
};

const ProjectGallery = () => {
  const { handleSelectedProject, refProjectGallery } = useContext(ProjectGalleryContext);
  const { projects } = useContext(ProjectsContext);

  useEffect(() => {
    const savedProject = sessionStorage.getItem("WJ_HP_clickedProject");
    if (savedProject) {
      handleSelectedProject(savedProject, false);
    }
  }, []);

  return (
    <section ref={refProjectGallery} className="project-gallery">
      <h2 className="project-gallery__heading" id="project">Projekte</h2>

      <div className="project-gallery__grid" id="projectSelection-box-showcase">
        {projects.map((project, index) => (
          <ProjectBox
            key={`${project.Title}-${index}`}
            index={index}
            isSelected={project.isClicked}
            title={project.Title}
            image={projectImages[project.Title]}
            onSelect={handleSelectedProject}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
