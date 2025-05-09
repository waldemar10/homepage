import React, { useState, useRef, useContext, useEffect } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";
import { ProjectGalleryContext } from "../../context/projectGalleryContext";
import { AboutMeContext } from "../../context/aboutMeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { useScroll } from "../../hooks/useScroll";
import Switch from "../common/Switch";
import LanguageButton from "../common/LanguageButton";
import Socials from "../common/Socials";
import Logo from "../../images/Logo.svg";
function Header() {
  const { refProjectGallery } = useContext(ProjectGalleryContext);
  const { refAboutMe } = useContext(AboutMeContext);
  const [showNav, setShowNav] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const navBoxRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation("common");
  const headerRef = useRef(null);
  const { scrollTo } = useScroll();
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (!headerRef.current) return;

    const updateHeight = () => {
      const height = headerRef.current.getBoundingClientRect().height;
      if (height) setHeaderHeight(height);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(headerRef.current);

    window.addEventListener("resize", updateHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
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
    return new Promise((resolve) => {
      const faClose = document.querySelector(".fa-close");
      const faBars = document.querySelector(".fa-bars");
      const navBox = document.querySelector(".header__nav-box-mobile");

      if (!navBox || !faClose || !faBars) {
        resolve(false);
        return;
      }

      navBox.classList.add("header__nav-box-mobile-hidden");
      faClose.classList.remove("fa-close--active");
      faBars.classList.remove("fa-bars--hidden");
      function handleAnimationEnd() {
        setIsMobileMenuOpen(false);
        document.body.classList.remove("body-no-scroll");
        navBox.removeEventListener("animationend", handleAnimationEnd);
        resolve(true);
      }

      navBox.addEventListener("animationend", handleAnimationEnd);
    });
  };

  const navToAnchor = async (e, ref) => {
    if (!ref.current) return;
    e.preventDefault();

    if (!isMobile) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      return;
    }
    const isClosed = await closeMobileMenu();
    if (!isClosed) return;
    ref.current.scrollIntoView({ behavior: "smooth" });

    const offsetPosition =
      ref.current.getBoundingClientRect().top + window.scrollY - headerHeight;
    scrollTo(offsetPosition);
  };

  function handleHeroNav(e, ref) {
    const url = location.pathname;
    e.preventDefault();
    if (url !== "/") {
      navigate("/");
      if (!ref) return;
      setTimeout(() => {
        navToAnchor(e, ref);
      }, 50);
      return;
    }
    navToAnchor(e, ref);
  }

  const navToContact = async (e) => {
    e.preventDefault();
    closeMobileMenu();
    const isClosed = await closeMobileMenu();
    if (!isClosed) return;
    scrollTo(0);
    navigate("/contact");
  };

  useEffect(() => {
    const content = document.querySelector(".header__content");
    if (!content) return;
    content.style.transform = "translateY(0px)";
    content.style.opacity = "1";
  }, []);

  return (
    <>
      <div
        className="placeholder__header"
        style={{ height: `${headerHeight}px` }}
      />

      <header ref={headerRef} className="header">
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
              showNav && (
                <nav className="header__nav-box">
                  <a
                    className="header__nav-box-item"
                    onClick={(e) => handleHeroNav(e, refAboutMe)}>
                    {t("header.aboutme", "")}
                  </a>
                  <a
                    className="header__nav-box-item"
                    onClick={(e) => handleHeroNav(e, refProjectGallery)}>
                    {t("header.projects", "")}
                  </a>
                  <a className="header__nav-box-item" href="#/contact">
                    {t("header.contact", "")}
                  </a>
                  <div className="header__nav-box-switch">
                    <Switch />
                  </div>
                  <div className="header__nav-box-switch">
                    <LanguageButton />
                  </div>
                </nav>
              )
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
          {isMobileMenuOpen && showNav && (
            <nav ref={navBoxRef} className="header__nav-box-mobile">
              <a
                className="header__nav"
                onClick={(e) => handleHeroNav(e, refAboutMe)}>
                {t("header.aboutme", "")}
              </a>
              <a
                className="header__nav"
                onClick={(e) => handleHeroNav(e, refProjectGallery)}>
                {t("header.projects", "")}
              </a>
              <a className="header__nav" onClick={(e) => navToContact(e)}>
                {t("header.contact", "")}
              </a>
              <div className="header__nav">
                <Socials
                  width={"var(--icon-width"}
                  height={"var(--icon-height"}
                  color={"var(--font-color"}
                />
              </div>
              <div className="header__nav">
                <Switch />
              </div>
              <div className="header__nav">
                <LanguageButton />
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
