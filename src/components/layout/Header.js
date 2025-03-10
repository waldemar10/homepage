import React, { useState, useRef, useContext, useEffect } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";
import { ProjectGalleryContext } from "../../context/projectGalleryContext";
import { AboutMeContext } from "../../context/aboutMeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

import Socials from "../common/Socials";
import Logo from "../../images/Logo.svg";
function Header() {
  const { refProjectGallery } = useContext(ProjectGalleryContext);
  const { refAboutMe } = useContext(AboutMeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const navBoxRef = useRef(null);

  // Set placeholder height to header height
  useEffect(() => {
    function updateNavBoxHeight() {
      let placeholder = document.querySelector(".placeholder__header");
      let header = document.querySelector(".header");
      let headerHeight = header.getBoundingClientRect().height;

      if (!placeholder) {
        console.error("Placeholder not found");
        return;
      }

      placeholder.style.height = `${headerHeight}px`;
    }

    updateNavBoxHeight();
    window.addEventListener("resize", updateNavBoxHeight);
    return () => {
      window.removeEventListener("resize", updateNavBoxHeight);
    };
  }, []);

  const openMobileMenu = () => {
    const faClose = document.querySelector(".fa-close");
    const faBars = document.querySelector(".fa-bars");
    if (!faClose || !faBars) return;
    setIsMobileMenuOpen(true);
    document.body.classList.add("body-no-scroll");
    faClose.classList.add("fa-close--active");
    faBars.classList.add("fa-bars--hidden");
  };

  const closeMobileMenu = () => {
    const faClose = document.querySelector(".fa-close");
    const faBars = document.querySelector(".fa-bars");
    const navBox = document.querySelector(".header__nav-box-mobile");

    if (!navBox || !faClose || !faBars) return;

    navBox.classList.add("header__nav-box-mobile-hidden");
    faClose.classList.remove("fa-close--active");
    faBars.classList.remove("fa-bars--hidden");
    function handleAnimationEnd() {
      setIsMobileMenuOpen(false);
      document.body.classList.remove("body-no-scroll");

      navBox.removeEventListener("animationend", handleAnimationEnd);
    }

    navBox.addEventListener("animationend", handleAnimationEnd);
  };

  const navToAnchor = (e, ref) => {
    if (!ref.current) return;
    e.preventDefault();

    if (!isMobile) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      return;
    }

    const headerHeight =
      document.querySelector(".header__content-box")?.getBoundingClientRect()
        .height || 0;
    const offsetPosition =
      ref.current.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    closeMobileMenu();
  };

  return (
    <>
      <div className="placeholder__header" />

      <header className="header">
        <div className="header__background"> </div>
        <div className="header__content">
          <div className="header__content-box">
            <div className="header__logo-wrapper">
              <a href="/" className="header__logo-box">
                <img src={Logo} alt="Logo" className="header__logo" />
              </a>
              <span className="header__logo-text">Waldemar Justus</span>
            </div>

            {!isMobile ? (
              <nav className="header__nav-box">
                <a onClick={(e) => navToAnchor(e, refAboutMe)}>Über mich</a>
                <a onClick={(e) => navToAnchor(e, refProjectGallery)}>
                  Projekte
                </a>
              </nav>
            ) : (
              <>
                <FontAwesomeIcon
                  id="nav-mobile-menu"
                  className="menu-icon fa-bars"
                  icon={faBars}
                  onClick={() =>
                    isMobileMenuOpen ? closeMobileMenu() : openMobileMenu()
                  }
                />
                <FontAwesomeIcon
                  id="nav-mobile-menu"
                  className="menu-icon fa-close"
                  icon={faClose}
                  onClick={() =>
                    isMobileMenuOpen ? closeMobileMenu() : openMobileMenu()
                  }
                />
              </>
            )}
          </div>
          {isMobileMenuOpen && (
            <nav ref={navBoxRef} className="header__nav-box-mobile">
              <a
                className="header__nav"
                onClick={(e) => navToAnchor(e, refAboutMe)}>
                Über mich
              </a>
              <a
                className="header__nav"
                onClick={(e) => navToAnchor(e, refProjectGallery)}>
                Projekte
              </a>
              <div className="header__nav">
                <Socials
                  width={"30px"}
                  height={"30px"}
                  color={"var(--font-color-light"}
                />
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
