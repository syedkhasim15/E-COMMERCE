import axios from "axios";

export const BASE_URL = 'https://api.escuelajs.co/api/v1/';

export const myAxios = axios.create({
    baseURL :  BASE_URL,
})