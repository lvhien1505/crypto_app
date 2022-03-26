import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Login from 'screens/auth/Login';
import Register from 'screens/auth/Register';
import Homepage from 'screens/Homepage';
import Exchanges from 'screens/Exchanges';
import Cryptocurrencies from 'screens/Cryptocurrencies';
import Info from 'screens/Info';
import Payment from 'screens/Payment';

import PublicRoute from 'routes/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute';
import WrapperRoute from 'routes/WrapperRoute';

import './App.scss';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/" element={<WrapperRoute />}>
                    <Route path="" element={<PublicRoute />}>
                        <Route path="" element={<Homepage />} />
                        <Route path="/exchanges" element={<Exchanges />} />
                        <Route
                            path="/crypto-currencies"
                            element={<Cryptocurrencies />}
                        />
                    </Route>
                    <Route path="" element={<PrivateRoute />}>
                        <Route path="/info" element={<Info />} />
                        <Route path="/payment" element={<Payment />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
