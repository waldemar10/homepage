import React from "react";

import { useTranslation } from "react-i18next";

import moodboard from "../../images/YogaWebsite/Moodboard.jpg";
import persona from "../../images/YogaWebsite/Persona.jpg";
import database from "../../images/YogaWebsite/Datenbank.png";
function Yoga() {
  const { t } = useTranslation("yoga");
  return (
    <div className="project">
      <p className="project__text">{t("intro")}</p>

      <h3 className="project__title">{t("approach.title")}</h3>
      <p className="project__text">{t("approach.text")}</p>

      <ul className="project__list">
        <li>
          <strong>{t("criteria.friendly")}</strong>
        </li>
        <li>
          <strong>{t("criteria.accurate")}</strong>
        </li>
        <li>
          <strong>{t("criteria.effective")}</strong>
        </li>
        <li>
          <strong>{t("criteria.safe")}</strong>
        </li>
      </ul>

      <h3 className="project__title">{t("moodboard.title")}</h3>
      <p className="project__text">{t("moodboard.text")}</p>

      <figure className="project__figure">
        <img src={moodboard} alt={t("moodboard.alt")} loading="lazy" />
        <figcaption>
          {t("moodboard.caption")}{" "}
          <a
            href="https://miro.com/app/board/uXjVL05-EA0=/?share_link_id=668733502537"
            target="_blank"
            rel="noopener noreferrer">
            Miro Board
          </a>
        </figcaption>
      </figure>

      <h3 className="project__title">{t("logo.title")}</h3>
      <p className="project__text">{t("logo.text")}</p>

      <svg
        className="project__logo project__logo--yoga"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 300">
        <path d="M171,85c0-.9-.12-3.07-.32-5.17-.26-2.63-.66-5.16-.66-5.16l0,.78s.07,1.79.07,2.69A51.57,51.57,0,0,1,119.5,129.7a7.54,7.54,0,0,1-1,.12c-9.68.52-20.16,1.22-30.94,10.32-6.84,5.77-15.45,14.15-19,28.44-.41,1.65-.88,4.09-1.14,5.91a43.58,43.58,0,0,0-.46,4.91A34.12,34.12,0,0,1,76,172.87a40,40,0,0,1,6.84-2.27,24.21,24.21,0,0,1,5.41-.63c7.81-.22,14.61.57,31.55-6.3,11.81-4.78,28-15.43,38.25-31.74A87.85,87.85,0,0,0,166.71,114a88.84,88.84,0,0,0,3.45-14.28A71.64,71.64,0,0,0,171,85Z" />
        <path d="M82.87,181.4c-25.76,8.27-39.24,38.06-30.11,66.54,5.44,16.94,17.65,29.6,32.09,35.34A32.13,32.13,0,0,1,68.67,264.5c-5.66-17.63,7.82-37.72,26.81-43.81A20.63,20.63,0,0,0,82.87,181.4Z" />
        <path d="M57,161.08c.26-1.81.73-4.26,1.15-5.9,3.58-14.3,12.18-22.68,19-28.45A40,40,0,0,1,94.76,118a51.57,51.57,0,0,1,2-100.69l.83-.54c-23,2.19-39.37,15.56-49.36,27.82A83.76,83.76,0,0,0,35.62,65.43c-1.1,2.87-2.17,5.65-3,8.36A82.33,82.33,0,0,0,29.91,86c-2.86,19.37,1.42,33,1.42,33a89.9,89.9,0,0,0,2.6,8.81,81.34,81.34,0,0,0,23,34.15C57,161.64,57,161.37,57,161.08Z" />
        <circle cx="107.63" cy="90.34" r="20.63" />
      </svg>

      <h3 className="project__title">{t("persona.title")}</h3>
      <p className="project__text">{t("persona.text")}</p>

      <figure className="project__figure">
        <img src={persona} alt={t("persona.alt")} loading="lazy" />
        <figcaption>{t("persona.caption")}</figcaption>
      </figure>

      <h3 className="project__title">{t("mockup.title")}</h3>
      <p className="project__text">{t("mockup.text")}</p>

      <h3 className="project__title">{t("development.title")}</h3>
      <p className="project__text">{t("development.text")}</p>

      <h3 className="project__title">{t("database.title")}</h3>
      <p className="project__text">{t("database.text")}</p>

      <figure className="project__figure">
        <img src={database} alt={t("database.alt")} loading="lazy" />
        <figcaption>{t("database.caption")}</figcaption>
      </figure>

      <div className="notice">
        <p>
          <b>{t("notice.headline")}</b>
          {t("notice.text")}
        </p>
        <ul>
          <li>{t("notice.features.backend")}</li>
          <li>{t("notice.features.mysql")}</li>
          <li>{t("notice.features.design")}</li>
        </ul>
        <p className="notice__date">{t("notice.date")}</p>
      </div>
    </div>
  );
}
export default Yoga;
