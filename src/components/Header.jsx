import { useContext } from 'react';
import { RoleContext } from '../services/RoleContext';
import { LocaleContext } from '../services/LocaleContext';
import useTranslation from '../hooks/useTranslation';

const Header = () => {
    const { setRole } = useContext(RoleContext);
    const { setLocale } = useContext(LocaleContext);
    const { translate } = useTranslation();

    const updateRole = () => {
        setRole((prevRole) => "user" === prevRole ? "admin": "user");
    };
    const updateLocale = () => {
        setLocale((prevLocale) => "en" === prevLocale ? "fr": "en");
    };

    return (
        <header className="mx-16 flex items-center justify-between p-4">
            <h1 className="text-4xl">{translate('app_title')}</h1>
            <div>
                <button className="rounded bg-blue-200 p-4 mr-10 hover:bg-blue-300 transition-all" onClick={updateRole}>{translate('change_role')}</button>
                <button className="rounded bg-blue-200 p-4 hover:bg-blue-300 transition-all" onClick={updateLocale}>{translate('change_locale')}</button>
            </div>
        </header>
    )
};

export default Header;
