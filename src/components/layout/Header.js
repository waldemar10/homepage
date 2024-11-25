import React, { useState, useRef, useContext, useEffect } from "react";
import { ProjectSelectionContext } from "../../context/projectSelectionContext";
import { AboutMeContext } from "../../context/aboutMeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import "../../styles/header.css";
function Header() {
  const { refProjectSelection } = useContext(ProjectSelectionContext);
  const { refAboutMe } = useContext(AboutMeContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navToAnker = (e, ref) => {
    if (document.readyState !== "complete") return;
    e.preventDefault();
    ref.current.scrollIntoView({ behavior: "smooth" });
    if (!isMobile) return;
    closeMobileMenu();
  };
  const navBoxRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    const handleScroll = () => {
      if (window.scrollY > 0) {
        document
          .querySelector(".header-content")
          .classList.add("header-content-scroll");
      } else {
        document
          .querySelector(".header-content")
          .classList.remove("header-content-scroll");
      }
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
    document.body.classList.add("body-no-scroll");
  };
  const handleAnimationEnd = (e) => {
    if (e.animationName === "fadeOut") {
      setIsMobileMenuOpen(false);
    }
  };

  const closeMobileMenu = () => {
    navBoxRef.current.classList.add("header-nav-box-mobile-hidden");
    const navBox = navBoxRef.current;
    if (navBox) {
      navBox.addEventListener("animationend", handleAnimationEnd);
    }
    document.body.classList.remove("body-no-scroll");
    return () => {
      if (navBox) {
        navBox.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  };

  return (
    <>
      <div className="header-placeholder" />

      <div className="header-content">
        <div className="header-content-box">
          <div className="header-logo-wrapper">
            <div className="header-logo-box">
              <a href="/">
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
            </div>
            <h3>Waldemar Justus</h3>
          </div>

          {!isMobile ? (
            <nav className="header-nav-box">
              <a onClick={(e) => navToAnker(e, refAboutMe)}>Über mich</a>
              <a onClick={(e) => navToAnker(e, refProjectSelection)}>
                Projekte
              </a>
              {/*  <a href="#/contact" target="_blank">
              Kontakt
            </a> */}
            </nav>
          ) : (
            <FontAwesomeIcon
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
        {isMobileMenuOpen && (
          <nav ref={navBoxRef} className={`header-nav-box-mobile`}>
            <a onClick={(e) => navToAnker(e, refAboutMe)}>Über mich</a>
            <a onClick={(e) => navToAnker(e, refProjectSelection)}>Projekte</a>
            {/*  <a href="#/contact" target="_blank">
            Kontakt
          </a> */}
          </nav>
        )}
      </div>
    </>
  );
}

export default Header;
