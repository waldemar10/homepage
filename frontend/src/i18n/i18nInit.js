import React, { useEffect, useState } from 'react';
import i18n from './i18n';
import LoadingScreen from '../components/common/LoadingScreen';

export default function I18nInitWrapper({ children }) {
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    };

    initialize();
  }, []);

  if (loading) {
    return <LoadingScreen headline={"Loading language packages..."} />;
  }

  return children;
}
