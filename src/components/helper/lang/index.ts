import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import ar from "./ar.json"
import en from "./en.json"
import ku from "./ku.json"

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: en,
    ar: ar,
    ku: ku,
  },
  interpolation: {
    skipOnVariables: false,
    escapeValue: false, // react already safes from xss
  },
})

export const currentLang = i18n.language

// Function to change the language and store it in localStorage
export const changeLanguage = (language: string) => {
  i18n.changeLanguage(language)
  localStorage.setItem("language", language)
}

export default i18n
