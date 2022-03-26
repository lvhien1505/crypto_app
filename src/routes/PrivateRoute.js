import { Outlet, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from 'states/slices/authSlide';
import { useEffect, useState } from 'react';

const PrivateRoute = () => {
    const [statusError, setStatusError] = useState('idle');
    let { user } = useSelector((state) => state.auth);
    let dispath = useDispatch();

    useEffect(async () => {
        try {
            let res = await dispath(auth()).unwrap();;
            
            if (res.status) {
                setStatusError('no')
            }
        } catch (error) {
            setStatusError('yes')
        }
    }, []);

    if (statusError === 'idle') return <div></div>;

    if (statusError === 'yes') return <Navigate to="/login" />;
    if (statusError === 'no' && user._id) {
        return (
            <Outlet
                context={{
                    user: user,
                }}
            />
        );
    }
};

export default PrivateRoute;
