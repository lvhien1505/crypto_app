import axiosClient from './base/axiosClient';

const baseUrl = 'auth'
const register = async (data) => axiosClient.create(`${baseUrl}/register`, data);
const login = async (data) => axiosClient.find(`${baseUrl}/login`, data);
const auth = async () => axiosClient.find(`${baseUrl}`, {}, true);

const authApi = {
    register,
    login,
    auth,
};
export default authApi;
