import axios from 'axios';

const params = {};
const options = {timeout: 2500};

export const getCardById = (id) => axios.get(`/api/user/${id}`, params, options);
export const updateCardById = (id, data) => axios.patch(`/api/user/${id}`, data, options);
export const getCards = () => axios.get('/api/users', params , options);
