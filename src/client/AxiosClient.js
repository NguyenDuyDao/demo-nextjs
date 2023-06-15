
import axios from 'axios';

export const instance = axios.create();

instance.defaults.baseURL = process.env.NEXT_PUBLIC_LUZ_ADMIN_BASE_URL;

// instance.defaults.headers = {
//     'Access-Control-Allow-Origin': '*'
// };

instance.defaults.withCredentials = true;


// axiosClient.interceptors.response.headers = {
//     'Access-Control-Allow-Origin': '*',
// }

//All request will wait 2 seconds before timeout
// axiosClient.defaults.timeout = 2000;

instance.defaults.withCredentials = true;

const AxiosClient = {
    getRequest: async (url, config) => {
        try {
            const response = await instance.get(url, config);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    postRequest: async (url, data, config) => {
        try {
            const response = await instance.post(url, data, config);
            return response;
        } catch (error) {
            console.log(error.response);
            return error.response;
        }
    },
    putRequest: async (url) => {
        try {
            const response = await instance.put(url);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    deleteRequest: async (url) => {
        try {
            const response = await instance.delete(url);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
}

export default AxiosClient;