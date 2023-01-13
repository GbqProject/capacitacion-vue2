import axios from "axios";
import env from '../enviroment/env.json';
const url = env.url_backend;
export default {
    async get(nombre_api){
        try {
            let response = await axios.get(`${url}/${nombre_api}`);
            return response.data;
        } catch (error) {
            console.log(error);
            alert(error);
            throw error;
        }
    },

    async post(nombre_api, params){
        try {
            let response = await axios.post(`${url}/${nombre_api}`, params);
            return response.data;
        } catch (error) {
            console.log(error);
            alert(error);
            throw error;
        }
    }
}