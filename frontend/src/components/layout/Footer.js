import React, { useState, useContext, useEffect } from "react";
import Socials from "../common/Socials";
import { ProjectGalleryContext } from "../../context/projectGalleryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
function Footer() {
  const [year] = useState(new Date().getFullYear());
  const [showNav, setShowNav] = useState(true);
  const { refProjectGallery } = useContext(ProjectGalleryContext);
  const { t } = useTranslation("common");
  const location = useLocation();
  const navToProjectSelection = (e) => {
    e.preventDefault();
    refProjectGallery.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const url = location.pathname;
    if (url !== "/") {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [location]);
  return (
    <div className="footer__wrapper" id="footer">
      <div className="footer__content">
        <Socials
          width={"var(--icon-width"}
          height={"var(--icon-height"}
          color={"var(--font-color"}
        />

        <div className="footer__copyright">
          Copyright © 2023 - {year} Waldemar Justus
        </div>
        <div className="footer__links">
          <a href="#/privacyPolicy">{t("footer.privacyPolicy","")}</a>
          <a href="#/imprint">{t("footer.imprint","")}</a>

          <a
            href="https://github.com/waldemar10/homepage"
            target="_blank"
            rel="noreferrer">
            {t("footer.code","")}
          </a>
        </div>
      </div>
      {showNav && (
        <button
          className="footer__btn-up-nav"
          href="#top"
          rel="noreferrer"
          onClick={(e) => navToProjectSelection(e)}>
          <FontAwesomeIcon className="footer__icon-up" icon={faChevronUp} />
        </button>
      )}
    </div>
  );
}

export default Footer;
