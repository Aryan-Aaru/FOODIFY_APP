import axios from "axios";

const url = "http://localhost:8080"; 

export const getAllRestaurents = (pagination) => {
    return axios.get(`${url}/restaurents`, {
        params : {
            "status" : "active",
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
