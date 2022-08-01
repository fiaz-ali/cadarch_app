import axios from 'axios'

import {baseUrl} from './endpoints'

const axiosInstance = axios.create({
    baseURL: baseUrl,
})

export const postRequest = async (data, endpoint, token) => {
    const axiosheaders = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    }
    const response = await axios
        .post(endpoint, data, axiosheaders)
        .then(res => {
            const {data, responseCode, responseMessage} = res.data
            return responseCode
        })
        .catch(error => console.log(error))
    return response
}

export const getRequest = (endpoint, token, userId) => {
    const axiosheaders = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const axiosInstanceWithParams = axios.create({
        baseURL: baseUrl,
        params: {
            page: 1,
            limit: 10,
            userId: userId,
        },
    })
    axiosInstanceWithParams
        .get(endpoint, axiosheaders)
        .then(res => {
            const response = res.data
            return response
        })
        .catch(error => console.log(error))
}

export default axiosInstance
