import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from 'services/cryptoApi';
import authSlide from 'states/slices/authSlide';

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        auth: authSlide,
    },
});
