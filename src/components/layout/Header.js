import React, { useState, useRef, useContext, useEffect } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";
import { ProjectGalleryContext } from "../../context/projectGalleryContext";
import { AboutMeContext } from "../../context/aboutMeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const { refProjectSelection } = useContext(ProjectGalleryContext);
  const { refAboutMe } = useContext(AboutMeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const navBoxRef = useRef(null);

  useEffect(() => {
    if (!isMobile) return;
    const headerContent = document.querySelector(".header__content");

    const handleScroll = () => {
      if (window.scrollY === 0 && !isMobileMenuOpen) {
        headerContent.classList.remove("header__content-background");
      } else {
        headerContent.classList.add("header__content-background");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile, isMobileMenuOpen]);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
    document.body.classList.add("body-no-scroll");
    document.querySelector(".header__content").classList.add("header__content-background");
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove("body-no-scroll");
    if (window.scrollY === 0) {
      document.querySelector(".header__content").classList.remove("header__content-background");
    }
  };

  const navToAnchor = (e, ref) => {
    if (!ref.current) return;
    e.preventDefault();

    if (!isMobile) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      return;
    }

    const headerHeight = document.querySelector(".header__content-box")?.getBoundingClientRect().height || 0;
    const offsetPosition = ref.current.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    closeMobileMenu();
  };

  return (
    <>
      <div className="header__placeholder" />
      <div className="header__content">
        <div className="header__content-box">
          <div className="header__logo-wrapper">
            <a href="/" className="header__logo-box">
              <svg
                className="header__logo"
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
            <span>Waldemar Justus</span>
          </div>

          {!isMobile ? (
            <nav className="header__nav-box">
              <a className="header__nav" onClick={(e) => navToAnchor(e, refAboutMe)}>Über mich</a>
              <a className="header__nav" onClick={(e) => navToAnchor(e, refProjectSelection)}>Projekte</a>
            </nav>
          ) : (
            <>
              <FontAwesomeIcon
                id="nav-mobile-menu"
                className={`menu-icon ${isMobileMenuOpen ? "fa-close" : "fa-bars"}`}
                icon={isMobileMenuOpen ? faClose : faBars}
                onClick={() => (isMobileMenuOpen ? closeMobileMenu() : openMobileMenu())}
              />
            </>
          )}
        </div>
        {isMobileMenuOpen && (  
          <nav ref={navBoxRef} className="header__nav-box-mobile">
            <a className="header__nav" onClick={(e) => navToAnchor(e, refAboutMe)}>Über mich</a>
            <a className="header__nav" onClick={(e) => navToAnchor(e, refProjectSelection)}>Projekte</a>
          </nav>
        )}
      </div>
    </>
  );
}

export default Header;
