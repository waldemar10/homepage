import React, { useContext, useRef, useState, useEffect } from "react";
import { ProjectGalleryContext } from "../../context/projectGalleryContext";
import { AboutMeContext } from "../../context/aboutMeContext";
import foto from "../../images/Waldemar.jpg";
import { useIsMobile } from "../../hooks/useIsMobile";
import Arrow from "../common/Arrows";
import Circle from "../common/Circles";
function HeroSection() {
  const isMobile = useIsMobile();
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 1200, height: 1200 });
  const { refProjectGallery } = useContext(ProjectGalleryContext);
  const { refAboutMe } = useContext(AboutMeContext);

  const [isMobileSmall, setIsMobileSmall] = useState(window.innerWidth <= 400);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileSmall(window.innerWidth <= 400);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    refProjectGallery.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToAboutMe = (e) => {
    e.preventDefault();
    refAboutMe.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const ArrowSvgDesktop = () => {
    return (
      <svg
        width="1200px"
        height="1200px"
        viewBox={`0 0 ${1200} ${1200}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Arrow
          x1={dimensions.width * 0.4}
          y1={dimensions.height * -0.1}
          length={dimensions.width * 0.25}
          angle={45}
          withArrow
          dashed
          color="var(--secondary-color)"
          strokeWidth={2}
          animation
        />
        <Arrow
          x1={dimensions.width * 0.5}
          y1={dimensions.height * 0.8}
          length={dimensions.width * 0.55}
          angle={45}
          withCircles
          color="var(--primary-color)"
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * 0.9}
          y1={dimensions.height * 0.92}
          length={dimensions.width * 0.25}
          angle={45}
          withArrow
          color="var(--secondary-color)"
          strokeWidth={2}
          animation
        />
        <Arrow
          x1={dimensions.width * 0.75}
          y1={dimensions.height * -0.1}
          length={dimensions.width * 0.21}
          angle={45}
          withCircles
          color="var(--secondary-color)"
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * 0.6}
          y1={dimensions.height * -0.05}
          length={dimensions.width * 0.1}
          angle={45}
          withCircles
          color="var(--primary-color)"
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * 0.7}
          y1={dimensions.height * 0.9}
          length={dimensions.width * 0.25}
          angle={45}
          withArrow
          dashed
          color="var(--primary-color)"
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * 0.4}
          y1={dimensions.height * 0.9}
          length={500}
          angle={45}
          withCircles
          color="var(--primary-color)"
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * 0.5}
          y1={dimensions.height * 0.93}
          length={500}
          angle={45}
          withCircles
          color="var(--secondary-color)"
          strokeWidth={2}
        />
      </svg>
    );
  };
  const ArrowSvgMobile = () => {
    return (
      <svg
        width="768px"
        height="768px"
        viewBox={`0 0 ${768} ${768}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Arrow
          x1={dimensions.width * -0.1}
          y1={dimensions.height * 0.1}
          length={dimensions.width * 0.35}
          angle={45}
          withArrow
          dashed
          color="var(--secondary-color)"
          strokeWidth={2}
          animation
        />
        <Arrow
          x1={dimensions.width * 0.8}
          y1={dimensions.height * 0.73}
          length={dimensions.width * 0.55}
          angle={45}
          withCircles
          color="var(--primary-color)"
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * 0.83}
          y1={dimensions.height * 0.62}
          length={dimensions.width * 0.45}
          angle={45}
          withArrow
          color="var(--secondary-color)"
          strokeWidth={2}
          animation
        />
        <Arrow
          x1={dimensions.width * -0.05}
          y1={dimensions.height * 0.55}
          length={dimensions.width * 0.35}
          angle={45}
          withCircles
          color="var(--secondary-color)"
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * -0.1}
          y1={dimensions.height * 0.59}
          length={dimensions.width * 0.3}
          angle={45}
          withCircles
          color="var(--primary-color)"
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * 0.7}
          y1={dimensions.height * 0.76}
          length={dimensions.width * 0.2}
          angle={45}
          withArrow
          dashed
          color="var(--primary-color)"
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * 0.9}
          y1={dimensions.height * 0.3}
          length={500}
          angle={45}
          withCircles
          color="var(--primary-color)"
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * 0.96}
          y1={dimensions.height * 0.6}
          length={500}
          angle={45}
          withCircles
          color="var(--secondary-color)"
          strokeWidth={2}
        />
      </svg>
    );
  };
  const ArrowSvgMobileSmall = () => {
    return (
      <svg
        width="768px"
        height="768px"
        viewBox={`0 0 ${768} ${768}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Arrow
          x1={dimensions.width * -0.15}
          y1={dimensions.height * 0.1}
          length={dimensions.width * 0.35}
          angle={45}
          withArrow
          dashed
          color="var(--secondary-color)"
          strokeWidth={2}
          animation
        />
        <Arrow
          x1={dimensions.width * 0.8}
          y1={dimensions.height * 0.66}
          length={dimensions.width * 0.55}
          angle={45}
          withCircles
          color="var(--primary-color)"
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * 0.83}
          y1={dimensions.height * 0.62}
          length={dimensions.width * 0.45}
          angle={45}
          withArrow
          color="var(--secondary-color)"
          strokeWidth={2}
          animation
        />
        <Arrow
          x1={dimensions.width * -0.05}
          y1={dimensions.height * 0.55}
          length={dimensions.width * 0.35}
          angle={45}
          withCircles
          color="var(--secondary-color)"
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * -0.1}
          y1={dimensions.height * 0.49}
          length={dimensions.width * 0.3}
          angle={45}
          withCircles
          color="var(--primary-color)"
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * -0.1}
          y1={dimensions.height * 0.58}
          length={dimensions.width * 0.25}
          angle={45}
          withArrow
          dashed
          color="var(--primary-color)"
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * 0.92}
          y1={dimensions.height * 0.2}
          length={500}
          angle={45}
          withCircles
          color="var(--primary-color)"
          strokeWidth={2}
        />
        <Arrow
          x1={dimensions.width * 0.96}
          y1={dimensions.height * 0.6}
          length={500}
          angle={45}
          withCircles
          color="var(--secondary-color)"
          strokeWidth={2}
        />
      </svg>
    );
  };
  const Seperator = () => {
    return (
      <div className="hero__arrows-seperator">
        <svg
          width="1200px"
          height="100px"
          viewBox={`0 0 ${1200} ${100}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Arrow
            x1={25}
            y1={25}
            length={600}
            withCircles
            dashed
            color="var(--font-color-light)"
            strokeWidth={2}
          />
          <Arrow
            x1={400}
            y1={55}
            length={400}
            withCircles
            color="var(--font-color-light)"
            strokeWidth={2}
          />
          <Arrow
            x1={900}
            y1={85}
            length={400}
            withArrow
            color="var(--font-color-light)"
            strokeWidth={2}
          />
          <Circle
            x1={15}
            y1={35}
            radius={50}
            color="var(--font-color-light)"
            dashed
            strokeWidth={2}
            
          />
          <Circle
            x1={1170}
            y1={-30}
            radius={30}
            color="var(--font-color-light)"
            dashed
            strokeWidth={2}
          />
        </svg>
      </div>
    );
  };
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
          onClick={!isMobile ? handleScrollToAboutMe : null}
          target="_blank"
          rel="noreferrer">
          <img src={foto} alt="Waldemar Justus Foto"></img>
        </a>
      </div>
    );
  };
  const HeroButton = () => {
    return (
      <button className="hero__button" onClick={handleScrollToProjects}>
        <span>Meine Projekte</span>
      </button>
    );
  };
  return (
    <section className="hero">
      <div ref={containerRef} className="hero__container ">
        <div className="hero__arrows">
          {!isMobile && <ArrowSvgDesktop />}
          {isMobile &&
            (isMobileSmall ? <ArrowSvgMobileSmall /> : <ArrowSvgMobile />)}
        </div>
        <div className="hero__content">
          <div className="hero__box">
            <span className="hero__greeting">Willkommen</span>
            <div className="hero__name">
              Ich bin <span className="hero__name--red">Waldemar</span> Justus{" "}
              <span className="hero__icon">👋</span>
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
          <Seperator />
        </div>
      )}
    </section>
  );
}

export default HeroSection;
