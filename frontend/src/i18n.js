import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { defaultNS, resources } from "./locales/resources";

i18next
  // https://github.com/i18next/i18next-browser-languageDetector/blob/9efebe6ca0271c3797bc09b84babf1ba2d9b4dbb/src/index.js#L11
  .use(initReactI18next) // Initialize i18n for React
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    debug: import.meta.env.DEV,
    defaultNS,
    resources,
    lowerCaseLng: true,
    interpolation: {
      escapeValue: false,
    },
  });

// Set document direction based on current language and keep it updated on changes
const setDocumentDirection = (lng) => {
  const rtlLanguages = new Set(["ar", "fa"]);
  const isRtl = rtlLanguages.has((lng || "en").split("-")[0]);
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", (lng || "en").split("-")[0]);
  }
};

setDocumentDirection(i18next.language);
i18next.on("languageChanged", setDocumentDirection);

export default i18next;
