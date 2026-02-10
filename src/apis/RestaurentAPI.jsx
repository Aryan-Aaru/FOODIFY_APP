import axios from "axios";

const url = "http://localhost:8080"; 

export const getAllRestaurents = (pagination, status) => {
    return axios.get(`${url}/restaurents`, {
        params : {
            "status" : status,
            "page" : pagination.page, 
            "size" : pagination.size, 
            "sort": pagination.sortType
        }
    })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err.response.data;
        })
}

export const getByRestaurentById = (restaurentId) => {
    return axios.get(`${url}/restaurent/${restaurentId}`)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            throw err.response.data;
        })
}

export const getFoodsByRestaurant = (restaurantId, menuId, parames) => {
    return axios.get(`${url}/restaurent/${restaurantId}/Menu/${menuId}`, {
        params : parames
    })
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            throw err.response.data
        })
}

export const updateRstStatus = (restaurantId, userid, status) =>{
    return axios.patch(`${url}/user/${userid}/restaurent/${restaurantId}`, null,{ params : { "status" : status}})
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err.response.data
        })
}

export const getAdminRestaurents = (pagination, status, userid) => {
    return axios.get(`${url}/user/${userid}/restaurents`, {
        params : {
            "status" : status,
            "page" : pagination.page, 
            "size" : pagination.size, 
        }
    })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err.response.data;
        })
}