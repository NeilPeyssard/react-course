import { createContext, useMemo, useState } from 'react';

export const LocaleContext = createContext({ role: 'en', setRole: () => {} });

export const LocaleProvider = ({ children }) => {
    const [locale, setLocale] = useState('en');
    const localeContextValue = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

    return (
        <LocaleContext.Provider value={localeContextValue}>
            {children}
        </LocaleContext.Provider>
    );
};
