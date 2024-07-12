import useHeader from '../hooks/useHeader';
import useTranslation from '../hooks/useTranslation';

const Header = () => {
    const { translate } = useTranslation();
    const { toggleRole, toggleLocale } = useHeader();

    return (
        <header className="mx-16 flex items-center justify-between p-4">
            <h1 className="text-4xl">{translate('app_title')}</h1>
            <div>
                <button className="rounded bg-blue-200 p-4 mr-10 hover:bg-blue-300 transition-all" onClick={toggleRole}>{translate('change_role')}</button>
                <button className="rounded bg-blue-200 p-4 hover:bg-blue-300 transition-all" onClick={toggleLocale}>{translate('change_locale')}</button>
            </div>
        </header>
    )
};

export default Header;
