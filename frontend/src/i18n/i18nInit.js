import React, { useEffect, useState } from 'react';
import i18n from './i18n';
import LoadingScreen from '../components/common/LoadingScreen';

export default function I18nInitWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const [fallbackUsed, setFallbackUsed] = useState(false);

  async function isBackendAvailable() {
    try {
      const testUrl = `${process.env.REACT_APP_API_URL}backend/public/index.php/i18n?lang=en&ns=common`;
      const res = await fetch(testUrl, { method: 'HEAD' });
      return res.ok;
    } catch (err) {
      return false;
    }
  }

  useEffect(() => {
    const initialize = async () => {
      const backendOnline = await isBackendAvailable();

      if (!backendOnline) {
        setFallbackUsed(true);
      }

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
    return <LoadingScreen backendOffline={fallbackUsed} headline={"Loading language packages..."} />;
  }

  return children;
}
