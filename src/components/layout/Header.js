import React, { useState, useRef, useContext, useEffect } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";
import { ProjectSelectionContext } from "../../context/projectSelectionContext";
import { AboutMeContext } from "../../context/aboutMeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import "../../styles/header.css";
function Header() {
  const { refProjectSelection } = useContext(ProjectSelectionContext);
  const { refAboutMe } = useContext(AboutMeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let isMobile = useIsMobile();
  const navBoxRef = useRef(null);

  const navToAnchor = (e, ref) => {
    if (document.readyState !== "complete") return;
    if (!ref.current) return;
    e.preventDefault();

    if (!isMobile) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      return;
    }

    const header = document.querySelector(".header-content-box");
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    const elementPosition =
      ref.current.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerHeight;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    closeMobileMenu();
  };

  useEffect(() => {
    if (!isMobile) return;
    const navMobileMenu = document.getElementById("nav-mobile-menu");
    const headerContent = document.querySelector(".header-content");
    if (!navMobileMenu || !window.scrollY === 0 ||!headerContent) return;

    const handleClickOnFullTop = () => {
      if (headerContent.classList.contains("header-content-background")) {
        headerContent.classList.remove("header-content-background");
      } else {
        headerContent.classList.add("header-content-background");
      }
    };

    navMobileMenu.addEventListener("click", handleClickOnFullTop);
    return () => {
      navMobileMenu.removeEventListener("click", handleClickOnFullTop);
    };
  }, [isMobile, isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobile) return;
    if (window.scrollY === 0) return;
    document
      .querySelector(".header-content")
      .classList.add("header-content-mobile-scroll");
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) return;
    const handleMobileHeaderOnScroll = () => {
      if (window.scrollY > 0) {
        document
          .querySelector(".header-content")
          .classList.add("header-content-mobile-scroll");
      } else {
        document
          .querySelector(".header-content")
          .classList.remove("header-content-mobile-scroll");
      }
    };
    window.addEventListener("scroll", handleMobileHeaderOnScroll);
    return () => {
      window.removeEventListener("scroll", handleMobileHeaderOnScroll);
    };
  }, [isMobile, isMobileMenuOpen]);

  const handleAnimationEnd = (e) => {
    if (e.animationName === "fadeOut") {
      setIsMobileMenuOpen(false);
    }
  };

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
    document.body.classList.add("body-no-scroll");
  };

  const closeMobileMenu = () => {
    if (!navBoxRef.current) return;
    const navBox = navBoxRef.current;
    navBox.classList.add("header-nav-box-mobile-hidden");

    navBox.addEventListener("animationend", handleAnimationEnd);
    document.body.classList.remove("body-no-scroll");
    return () => {
      navBox.removeEventListener("animationend", handleAnimationEnd);
    };
  };

  const MobileMenu = ({ isOpen }) => {
    if (!isOpen) return null;
    return (
      <nav ref={navBoxRef} className={`header-nav-box-mobile`}>
        <a className="header-nav" onClick={(e) => navToAnchor(e, refAboutMe)}>
          Über mich
        </a>
        <a
          className="header-nav"
          onClick={(e) => navToAnchor(e, refProjectSelection)}>
          Projekte
        </a>
        {/*  <a href="#/contact" target="_blank">
        Kontakt
      </a> */}
      </nav>
    );
  };
  return (
    <>
      <div className="header-placeholder" />

      <div className="header-content">
        <div className="header-content-box">
          <div className="header-logo-wrapper">
        
              <a href="/" className="header-logo-box">
                <svg
                  className="header-logo"
                  id="Ebene1"
                  viewBox="0 0 1017.86 796.07">
                  <defs>
                    <linearGradient
                      id="gradient-primary"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%">
                      <stop offset="0%" stopColor="var(--primary-color)" />
                      <stop offset="100%" stopColor="#5629f6" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#gradient-primary)"
                    className="cls-2"
                    d="M376.08,3.46L16.51,363.03c-22.01,22.01-22.01,57.71,0,79.72l349.85,349.85c7.4,7.4,20.04,2.16,20.04-8.3v-126.92c0-32.29-12.83-63.25-35.66-86.08l-159.51-159.51,169.22-169.22c22.83-22.83,35.66-53.8,35.66-86.08V11.76c0-10.46-12.65-15.7-20.04-8.3Z"
                  />
                  <path
                    fill="url(#gradient-primary)"
                    className="cls-1"
                    d="M641.77,3.46l359.57,359.57c22.01,22.01,22.01,57.71,0,79.72l-349.85,349.85c-7.4,7.4-20.04,2.16-20.04-8.3v-126.92c0-32.29,12.83-63.25,35.66-86.08l159.51-159.51-169.22-169.22c-22.83-22.83-35.66-53.8-35.66-86.08V11.76c0-10.46,12.65-15.7,20.04-8.3Z"
                  />
                </svg>
              </a>
            
            <h4>Waldemar Justus</h4>
          </div>

          {!isMobile ? (
            <nav className="header-nav-box">
              <a
                className="header-nav"
                onClick={(e) => navToAnchor(e, refAboutMe)}>
                Über mich
              </a>
              <a
                className="header-nav"
                onClick={(e) => navToAnchor(e, refProjectSelection)}>
                Projekte
              </a>
              {/*  <a href="#/contact" target="_blank">
              Kontakt
            </a> */}
            </nav>
          ) : (
            <FontAwesomeIcon
              id="nav-mobile-menu"
              className={`menu-icon ${
                isMobileMenuOpen ? "fa-close" : "fa-bars"
              }`}
              icon={isMobileMenuOpen ? faClose : faBars}
              onClick={() =>
                isMobileMenuOpen ? closeMobileMenu() : openMobileMenu()
              }
            />
          )}
        </div>
        <MobileMenu isOpen={isMobileMenuOpen} />
      </div>
    </>
  );
}

export default Header;
