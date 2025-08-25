import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import enTranslations from './locales/en.json';
import thTranslations from './locales/th.json';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      th: {
        translation: thTranslations
      }
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;