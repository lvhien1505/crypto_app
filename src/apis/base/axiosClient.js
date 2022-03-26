import axios from 'axios';

let url = process.env.REACT_APP_URL_BACKEND || 'http://localhost:5000/api';

const configsAxios = () => {
    const token = localStorage.getItem('__t');
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
};

const axiosCreate = axios.create({
    baseURL: url,
    headers: {
        'content-type': 'application/json',
    },
});

const find = async (path, data, isPrivate = false) => {
    let configs = {};
    if (isPrivate) {
        configs = configsAxios();
    }
    return await axiosCreate.post(`${url}/${path}`, data, configs);
};

const getAll = async (path, isPrivate = false) => {
    let configs = {};
    if (isPrivate) {
        configs = configsAxios();
    }
    return await axiosCreate.post(`${url}/${path}`, {}, configs);
};

const create = async (path, data, isPrivate = false) => {
    let configs = {};
    if (isPrivate) {
        configs = configsAxios();
    }
    return await axiosCreate.post(`${url}/${path}`, data, configs);
};

const update = async (path, id, data) => {
    let configs = configsAxios();
    return await axiosClient.put(
        `${url}/${path}`,
        {
            _id: id,
            ...data,
        },
        configs
    );
};

const remove = async (path, id) => {
    let configs = configsAxios();
    configs.data = {
        _id: id,
    };
    return await axiosCreate.post(`${url}/${path}`, configs);
};

const axiosClient = {
    find,
    getAll,
    create,
    update,
    delete: remove,
};

export default axiosClient;
