import React from "react";

import blog from "../../images/Wajuu/BlogBeispiel.jpg";
import startscreen from "../../images/Wajuu/Wajuu.jpg";
import { useTranslation } from "react-i18next";
function Wajuu() {
  const { t } = useTranslation("wajuu");
  return (
    <div className="project">
      <p className="project__text">{t("intro","")}</p>
      <h3 className="project__title">{t("approach.title","")}</h3>
      <p className="project__text">{t("approach.text","")}</p>

      <figure className="project__figure">
        <img src={startscreen} alt={t("hero.alt","")} loading="lazy" />
        <figcaption>{t("hero.caption","")}</figcaption>
      </figure>
      <h3 className="project__title">{t("hero.title","")}</h3>
      <p className="project__text">{t("hero.text","")}</p>
      <figure className="project__figure">
        <img src={blog} alt="Blog example" loading="lazy" />
        <figcaption>{t("blog.caption","")}</figcaption>
      </figure>
      <h3 className="project__title">{t("blog.title","")}</h3>
      <p className="project__text">{t("blog.text","")}</p>
      <div className="notice">
        <p>
          <b>{t("notice.headline","")}</b>
          {t("notice.text","")}
        </p>
        <ul>
          <li>{t("notice.features.wordpress","")}</li>
          <li>{t("notice.features.updates","")}</li>
          <li>{t("notice.features.usability","")}</li>
        </ul>
        <p className="notice__date">{t("notice.date","")}</p>
      </div>
    </div>
  );
}
export default Wajuu;
