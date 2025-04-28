import React, { useContext, useEffect, useState, useRef } from "react";
import { AboutMeContext } from "../../../context/aboutMeContext";
import { useResizeObserverContainer } from "../../../hooks/useResizeObserverContainer";
import mql4 from "../../../images/MQL4.png";
import laptop from "../../../images/Laptop.jpg";
import AboutmeSeperator from "./AboutmeSeperator";

import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { refAboutMe } = useContext(AboutMeContext);
  const refSeperator = useRef(null);
  const { dimensions } = useResizeObserverContainer(refSeperator);
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useTranslation("common");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <section ref={refAboutMe} className="aboutme">
        <h2 className="aboutme__headline">
          {t("aboutme.headline1","")}
          <span className="aboutme__headline--highlight"> {t("aboutme.headline2","")}</span>
        </h2>

        <div className="aboutme__container">
          <div className="aboutme__introduction">
            <div className="aboutme__text">
              <p>
              {t("aboutme.intro1","")}
              </p>
              <img className="aboutme__image" src={mql4}></img>
            </div>
            <p>
            {t("aboutme.intro2","")}
            </p>
            <div className="aboutme__text">
              <img className="aboutme__image" src={laptop}></img>
              <p>
              {t("aboutme.intro3","")}
              </p>
            </div>
          </div>

          <section className="aboutme__skills">
            <h2 className="aboutme__headline">
            {t("aboutme.skillsHeadline1","")} <span className="aboutme__headline--highlight">{t("aboutme.skillsHeadline2","")}</span>
            </h2>
            <ul className="aboutme__skills-list">
              <li className="aboutme__skills-item">
                <strong>{t("aboutme.skills.programming.label","")}</strong>
                <span>{t("aboutme.skills.programming.items","", { returnObjects: true }).join(", ")}</span>
              </li>
              <li className="aboutme__skills-item">
                <strong>{t("aboutme.skills.frontend.label","")}</strong>
                <span>
                {t("aboutme.skills.frontend.items","", { returnObjects: true }).join(", ")}
                </span>
              </li>
              <li className="aboutme__skills-item">
                <strong>{t("aboutme.skills.backend.label","")}</strong>
                <span>{t("aboutme.skills.backend.items","", { returnObjects: true }).join(", ")}</span>
              </li>
              <li className="aboutme__skills-item">
                <strong>{t("aboutme.skills.databases.label","")}</strong>
                <span>{t("aboutme.skills.databases.items","", { returnObjects: true }).join(", ")}</span>
              </li>
              <li className="aboutme__skills-item">
                <strong>{t("aboutme.skills.tools.label","")}</strong>
                <span>
                {t("aboutme.skills.tools.items","", { returnObjects: true }).join(", ")}
                </span>
              </li>
              <li className="aboutme__skills-item">
                <strong>{t("aboutme.skills.design.label","")}</strong>
                <span>{t("aboutme.skills.design.items","", { returnObjects: true }).join(", ")}</span>
              </li>
              <li className="aboutme__skills-item">
                <strong>{t("aboutme.skills.projectManagement.label","")}</strong>
                <span>{t("aboutme.skills.projectManagement.items","", { returnObjects: true }).join(", ")}</span>
              </li>
            </ul>
          </section>
        </div>
      </section>

      <div ref={refSeperator} className="aboutme__seperator">
        {isLoaded && <AboutmeSeperator dimensions={dimensions} />}
      </div>
    </>
  );
};

export default AboutMe;
