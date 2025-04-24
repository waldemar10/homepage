import React from "react";
import i18n from "i18next";

import en_flag from "../../images/flags/en.svg";
import de_flag from "../../images/flags/de.svg";
const LanguageButton = () => {

    const [currentLanguage, setCurrentLanguage] = React.useState(i18n.language);
    const handleChangeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setCurrentLanguage(lng);
        sessionStorage.setItem("i18nextLng", lng);
        document.documentElement.lang = lng;
    }
  return (
    <div className="language-button">
      {currentLanguage === "de" ? (
        <button
          className="language-button__button"
          onClick={() => handleChangeLanguage("en")}>
          <img src={en_flag} alt="English" />
        </button>
      ) : (
        <button
          className="language-button__button"
          onClick={() => handleChangeLanguage("de")}>
          <img src={de_flag} alt="German" />
        </button>
      )}
    </div>
  );
};

export default LanguageButton;
