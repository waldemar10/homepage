import React, { useContext } from "react";
import { ProjectSelectionContext } from "../../context/projectSelectionContext";

function HeroSection() {
  const { refProjectSelection } = useContext(ProjectSelectionContext);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    refProjectSelection.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <span className="hero__greeting">Willkommen</span>
      <div className="hero__content">
        <div className="hero__name">
          Ich bin <span>Waldemar Justus</span> <span className="hero__icon">👋</span>
        </div>
        <p className="hero__description">
          Meinen Bachelor habe ich seit Oktober 2024 erfolgreich in
          Computervisualistik und Design an der Hochschule Hamm-Lippstadt
          absolviert. Ausgewählte Projekte, die ich während des Studiums oder
          privat gemacht habe, werden hier vorgestellt.
        </p>
        <button className="hero__button" onClick={handleScrollToProjects}>
          <span>Projekte</span>
        </button>
      </div>
      <div className="line" />
    </section>
  );
}

export default HeroSection;
