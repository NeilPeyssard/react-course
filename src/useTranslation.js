import { useContext } from "react";
import { LocaleContext } from "./LocaleContext";
import transEn from './translations.en.json';
import transFr from './translations.fr.json'; 

const useTranslation = () => {
    const { locale } = useContext(LocaleContext);
    const translations = {
        'en': transEn,
        'fr': transFr,
    };

    const translate = (key) => {
        return translations[locale][key];
    }

    return { translate };
};

export default useTranslation;
