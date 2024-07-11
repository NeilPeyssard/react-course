import { Outlet } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';

const Layout = () => {
    return (
        <>
            <Header />
            <Menu />
            <Outlet />
        </>
    );
};

export default Layout;
