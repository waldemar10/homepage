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

  i18n.on('failedLoading', async (lng, ns, msg) => {
    try {
      const response = await fetch(`frontend/locales/${lng}/${ns}.json`);
      if (!response.ok) throw new Error('Fallback not found');
  
      const fallbackTranslations = await response.json();
  
      i18n.addResourceBundle(lng, ns, fallbackTranslations, true, true);
      console.log(`Fallback ${lng}/${ns} success.`);
    } catch (err) {
      console.error(`Fallback error ${lng}/${ns}:`, err);
    }
  });

export default i18n;