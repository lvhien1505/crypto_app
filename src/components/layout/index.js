import Appbar from './Appbar';
import Main from './Main';
import Footer from './Footer';

import './styles/Layout.scss';

const Layout = ({ children }) => {
    return (
        <div className="app">
            <Appbar />
            <Main>{children}</Main>
            <Footer />
        </div>
    );
};

export default Layout;
