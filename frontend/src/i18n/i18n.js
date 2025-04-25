import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import HttpApi from 'i18next-http-backend';

const API_URL = process.env.REACT_APP_API_URL + "backend/public/index.php/i18n?lang={{lng}}&ns={{ns}}"; 

i18n
  .use(HttpApi) 
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'de'],
    fallbackLng: 'en',
    debug: false,
    ns: ['yoga','wajuu','ssp','awd','common'],
    defaultNS: 'common',
    backend: {
      loadPath: API_URL,
    },
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
    detection: {
      order: ['sessionStorage', 'navigator'],
      caches: ['sessionStorage'],
    },
  });

export default i18n;