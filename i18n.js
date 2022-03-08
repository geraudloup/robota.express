import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./messages.json";

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
  fallbackLng: "en",
  saveMissing: true,
});

export default i18n;