import React from "react";

import video from "../../videos/LinguPingu.mp4";
import thumbnail from "../../images/Awd/GrammarHub.JPG";
import grammar from "../../images/Awd/Grammatik.jpg";
import vocabel from "../../images/Awd/Vokabeln.jpg";
import settings from "../../images/Awd/Einstellungen.jpg";
import { useTranslation } from "react-i18next";
function Awd() {
  const { t } = useTranslation("awd");
  const grammarCategories = t("grammar.categories", { returnObjects: true });
  const features = t("features", { returnObjects: true });

  return (
    <div className="project">
      <p className="project__text">{t("intro")}</p>
      <h3 className="project__title">{t("linguPingu.title")}</h3>
      <p className="project__text">{t("linguPingu.text")}</p>
      <div>
        <figure className="project__figure">
          <img src={vocabel} alt={t("images.alt")} />
          <figcaption className="project__figcaption">
            {t("image1.caption")}
          </figcaption>
        </figure>
      </div>
      <h3 className="project__title">{t("grammar.title")}</h3>
      <p className="project__text">{t("grammar.text")}</p>
      <ul>
        {grammarCategories.map((category, index) => (
          <li key={index}>
            <b>{category.title}:</b> {category.description}
          </li>
        ))}
      </ul>

      <p className="project__text">{t("grammar.interaction")}</p>

      <p className="project__text">
        <b>{t("features.title")}</b>
      </p>
      <ul>
        {features.items.map((item, index) => {
          if (typeof item === "string") {
            return <li key={index}>{item}</li>;
          } else {
            return (
              <li key={index}>
                {item.title}
                <ul>
                  {item.cases.map((c, i) => (
                    <li key={i}>
                      <b>{c.type}:</b> {c.effect}
                    </li>
                  ))}
                </ul>
              </li>
            );
          }
        })}
      </ul>

      <p className="project__text">{t("features.text")}</p>

      <div className="project__image-box">
        <figure className="project__figure" style={{ margin: "5px" }}>
          <img src={grammar} alt={t("image2.alt")} />
          <figcaption className="project__figcaption">
            {t("image2.caption")}
          </figcaption>
        </figure>
        <figure className="project__figure" style={{ margin: "5px" }}>
          <img src={settings} alt={t("image3.alt")} />
          <figcaption className="project__figcaption">
            {t("image3.caption")}
          </figcaption>
        </figure>
      </div>

      <h3 className="project__title">{t("video.title")}</h3>
      <div className="project__video">
        <video controls src={video} poster={thumbnail} />
      </div>
    </div>
  );
}
export default Awd;
