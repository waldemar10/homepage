import React, { useContext, useRef, useState, useEffect } from "react";
import { ProjectGalleryContext } from "../../../context/projectGalleryContext";
import { AboutMeContext } from "../../../context/aboutMeContext";
import { useResizeObserverContainer } from "../../../hooks/useResizeObserverContainer";
import { useIsMobile } from "../../../hooks/useIsMobile";
import HeroArrows from "./HeroArrows";
import HeroSeperator from "./HeroSeperator";
import Circle from "../../common/Circles";
import foto from "../../../images/Waldemar.jpg";
import { useTranslation } from "react-i18next";
function HeroSection() {
  const isMobile = useIsMobile();
  const containerRef = useRef();
  const { dimensions } = useResizeObserverContainer(containerRef);
  const { scrollToProjectGallery } = useContext(ProjectGalleryContext);
  const { scrollToAboutMe } = useContext(AboutMeContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileSmall, setIsMobileSmall] = useState(window.innerWidth <= 400);
  const { t } = useTranslation("common");
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
          color="var(--arrow-color-1)"
          dashed
          strokeWidth={2}
          animation
        />
        <a
          className="hero__image-box"
          onClick={!isMobile ? scrollToAboutMe : null}
          target="_blank"
          rel="noreferrer">
          <img src={foto} alt={t("hero.alt","")}></img>
        </a>
      </div>
    );
  };
  const HeroButton = () => {
    return (
      <button className="hero__button" onClick={scrollToProjectGallery}>
        <span>{t("hero.buttonText","")}</span>
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
            <span className="hero__greeting">{t("hero.greeting","")}</span>
            <div className="hero__name">
            {t("hero.introduction.part1","")} <span className="hero__name--highlight">{t("hero.introduction.part2","")}</span>{" "}
            {t("hero.introduction.part3","")} <span className="hero__icon">{t("hero.introduction.part4","")}</span>
            </div>
            {isMobile && (
              <>
                <ImageProfile />
                <HeroButton />
              </>
            )}
            <p className="hero__description">
            {t("hero.description","")}
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
