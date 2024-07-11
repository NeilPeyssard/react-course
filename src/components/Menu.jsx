import { NavLink } from 'react-router-dom';
import useTranslation from '../hooks/useTranslation';

const Menu = () => {
    const { translate } = useTranslation();

    return (
        <nav className="px-10 py-4 bg-gray-200">
            <ul className="flex items-center space-x-10">
                <li className="text-lg font-semibold hover:text-red-500 transition duration-200">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-red-500" : ""}>{translate('link_home')}</NavLink>
                </li>
                <li className="text-lg font-semibold hover:text-red-500 transition duration-200">
                    <NavLink to="/new" className={({ isActive }) => isActive ? "text-red-500" : ""}>{translate('link_new')}</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
