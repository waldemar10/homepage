import React, { useContext, useRef, useState, useEffect } from "react";
import { ProjectGalleryContext } from "../../../context/projectGalleryContext";
import { AboutMeContext } from "../../../context/aboutMeContext";
import { useResizeObserverContainer } from "../../../hooks/useResizeObserverContainer";
import { useIsMobile } from "../../../hooks/useIsMobile";
import HeroArrows from "./HeroArrows";
import HeroSeperator from "./HeroSeperator";
import Circle from "../../common/Circles";
import foto from "../../../images/Waldemar.jpg";

function HeroSection() {
  const isMobile = useIsMobile();
  const containerRef = useRef();
  const { dimensions } = useResizeObserverContainer(containerRef);
  const { scrollToProjectGallery } = useContext(ProjectGalleryContext);
  const { scrollToAboutMe } = useContext(AboutMeContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileSmall, setIsMobileSmall] = useState(window.innerWidth <= 400);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileSmall(window.innerWidth <= 400);
    };
    setIsLoaded(true);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const ImageProfile = () => {
    return (
      <div className="hero__content">
        <Circle
          x1={0}
          y1={0}
          radius={isMobileSmall ? 150 : 190}
          color="var(--font-color-dark)"
          dashed
          strokeWidth={2}
          animation
        />
        <a
          className="hero__image-box"
          onClick={!isMobile ? scrollToAboutMe : null}
          target="_blank"
          rel="noreferrer">
          <img src={foto} alt="Waldemar Justus Foto"></img>
        </a>
      </div>
    );
  };
  const HeroButton = () => {
    return (
      <button className="hero__button" onClick={scrollToProjectGallery}>
        <span>Meine Projekte</span>
      </button>
    );
  };
  return (
    <section className="hero">
      <div ref={containerRef} className="hero__container ">
        {isLoaded && (
          <HeroArrows
            isMobile={isMobile}
            isMobileSmall={isMobileSmall}
            dimensions={dimensions}
          />
        )}

        <div className="hero__content">
          <div className="hero__box">
            <span className="hero__greeting">Willkommen</span>
            <div className="hero__name">
              Ich bin <span className="hero__name--highlight">Waldemar</span>{" "}
              Justus <span className="hero__icon">👋</span>
            </div>
            {isMobile && (
              <>
                <ImageProfile />
                <HeroButton />
              </>
            )}
            <p className="hero__description">
              Meinen Bachelor habe ich seit Oktober 2024 erfolgreich in
              Computervisualistik und Design an der Hochschule Hamm-Lippstadt
              absolviert. Ausgewählte Projekte, die ich während des Studiums
              oder privat gemacht habe, werden hier vorgestellt.
            </p>

            {!isMobile && <HeroButton />}
          </div>
        </div>
        {!isMobile && <ImageProfile />}
      </div>
      {!isMobile && (
        <div className="hero__seperator">
          <HeroSeperator />
        </div>
      )}
    </section>
  );
}

export default HeroSection;
