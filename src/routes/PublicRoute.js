import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from 'states/slices/authSlide';
import { useEffect } from 'react';

const PublicRoute = () => {
    let { user } = useSelector((state) => state.auth);
    let dispath = useDispatch();

    useEffect(async () => {
        await dispath(auth());
    }, []);

    return (
        <Outlet
            context={{
                user: user,
            }}
        />
    );
};

export default PublicRoute;
