import React, { useContext, useEffect} from "react";
import { ProjectsContext } from "../../context/projectsContext";
import { ProjectGalleryContext } from "../../context/projectGalleryContext";

import LinguPingu from "../../images/Awd/Lingu.jpg";
import Yoga from "../../images/YogaWebsite/YogaStartscreen.jpg";
import SSP from "../../images/VC/Arena.jpg";

const projectImages = {
  "PWA LinguPingu": LinguPingu,
  "Die Yoga-Website": Yoga,
  "Schere Stein Papier Ultimate": SSP,
};

const ProjectBox = ({ index, isSelected, title, image, code, onSelect }) => {
  return (
    <article
      className={`project-gallery__item ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(index, true)}
      style={{
        filter: isSelected
          ? "grayscale(0) brightness(1)"
          : "grayscale(1) brightness(0.5)",
      }}>
      <img src={image} alt={title} className="project-gallery__image" />
      <div className="project-gallery__box">
        <div className="project-gallery__title">{title}</div>
        <p>{code}</p>
      </div>
    </article>
  );
};

const ProjectGallery = () => {
  const { handleSelectedProject, refProjectGallery } = useContext(
    ProjectGalleryContext
  );
  const { projects } = useContext(ProjectsContext);

  useEffect(() => {
    const savedProject = sessionStorage.getItem("WJ_HP_clickedProject");
    if (savedProject) {
      handleSelectedProject(savedProject, false);
    }
  }, []);

  return (
    <section ref={refProjectGallery} className="project-gallery">
      <h2 className="project-gallery__heading" id="project">
        Projekte
      </h2>

      <div className="project-gallery__grid" id="projectSelection-box-showcase">
        {projects.map((project, index) => (
          <ProjectBox
            key={`${project.Title}-${index}`}
            index={index}
            isSelected={project.isClicked}
            title={project.Title}
            image={projectImages[project.Title]}
            code={project.Code}
            onSelect={handleSelectedProject}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
