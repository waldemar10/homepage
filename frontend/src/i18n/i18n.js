import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const API_URL =
  process.env.REACT_APP_API_URL +
  "backend/public/index.php/i18n?lang={{lng}}&ns={{ns}}";

const i18nBackend = {
  type: "backend",
  read: async (lang, ns, callback) => {
    const key = `i18n-${lang}-${ns}`;
    const cachedData = sessionStorage.getItem(key);
    if (cachedData) {
      callback(null, JSON.parse(cachedData));
      return;
    }
    try {
      const response = await fetch(
        API_URL.replace("{{lng}}", lang).replace("{{ns}}", ns)
      );
      const data = await response.json();
      if (response.ok) {
        sessionStorage.setItem(key, JSON.stringify(data));
        callback(null, data);
      } else {
        callback(
          new Error(
            `Error loading namespace ${ns} for language ${lang}: ${response.statusText}`
          ),
          false
        );
      }
    } catch (error) {
      console.error(
        `Error loading namespace ${ns} for language ${lang}:`,
        error
      );
      callback(error, false);
    }
  },
};

i18n
  .use(i18nBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "de"],
    fallbackLng: "en",
    debug: false,
    ns: ["yoga", "wajuu", "ssp", "awd", "common"],
    defaultNS: "common",
    backend: {
      loadPath: API_URL,
    },
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
    detection: {
      order: ["sessionStorage", "navigator"],
      caches: ["sessionStorage"],
    },
  });

export default i18n;
