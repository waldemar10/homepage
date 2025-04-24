import React from "react";

import video from "../../videos/SchereSteinPapier.mp4";
import thumbnail from "../../images/VC/SSP.JPG";
import imgScissor from "../../images/VC/Schere.JPG";
import { useTranslation } from "react-i18next";
function SchereSteinPapier() {
  const { t } = useTranslation("ssp");
  const steps = t("approach.steps", { returnObjects: true });
  return (
    <div className="project">
      <p className="project__text">{t("intro")}</p>

      <h3 className="project__title">{t("video.title")}</h3>
      <div className="project__video">
        <video controls src={video} poster={thumbnail}></video>
      </div>

      <h3 className="project__title">{t("approach.title")}</h3>
      <p className="project__text">{t("approach.intro")}</p>

      <ol className="project__list">
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <figure className="project__figure">
        <img src={imgScissor} alt={t("image.alt")} />
        <figcaption className="project__figcaption">
          {t("image.caption")}
        </figcaption>
      </figure>
    </div>
  );
}
export default SchereSteinPapier;
