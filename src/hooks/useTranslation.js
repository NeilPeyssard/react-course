import { useContext } from "react";
import { LocaleContext } from "../services/LocaleContext";
import transEn from '../translations/translations.en.json';
import transFr from '../translations/translations.fr.json'; 

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
