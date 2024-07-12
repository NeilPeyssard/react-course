import { createContext, useMemo, useState } from 'react';

const getInitialLocaleFromBrowser = () => {
    const locale = navigator.language.substring(0, 2).toLowerCase();

    if (-1 !== ['en', 'fr'].indexOf(locale)) {
        return locale; 
    }

    return 'en';
}

export const LocaleContext = createContext({ role: 'en', setRole: () => {} });

export const LocaleProvider = ({ children }) => {
    const [locale, setLocale] = useState(getInitialLocaleFromBrowser());
    const localeContextValue = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

    return (
        <LocaleContext.Provider value={localeContextValue}>
            {children}
        </LocaleContext.Provider>
    );
};
