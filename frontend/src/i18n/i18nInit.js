import React, { useEffect, useState } from 'react';
import i18n from './i18n';

export default function I18nInitWrapper({ children }) {

  useEffect(() => {
    const initialize = async () => {

      i18n.on('failedLoading', async (lng, ns, msg) => {
        try {
          const response = await fetch(`/frontend/locales/${lng}/${ns}.json`);
          const data = await response.json();
          i18n.addResourceBundle(lng, ns, data, true, true);

        } catch (error) {
          console.error(`Error:`, error);
        }
      });

      await i18n.loadLanguages(['en', 'de']);
    };

    initialize();
  }, []);

  return children;
}
