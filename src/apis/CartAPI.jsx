import axios from "axios";

const url = "http://localhost:8080";


export const addToCart = (cartDetails, userid) => {
    return axios.post(`${url}/user/${userid}`, cartDetails)
        .then((res) => {
            return res.data;
        })
        .catch(err => {
        throw err.response.data;
        });
}

export const getCartRestaurent = (userid) =>{
    return axios.get(`${url}/user/${userid}/cart`)
        .then((res) =>{
            return res.data
        })
        .catch((err) => {
            throw err.response.data;
        })
}

export const getCartItems = (userid, restaurentid) => {
    return axios.get(`${url}/user/${userid}/cart/${restaurentid}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err.response.data;
        })
}

export const deleteCartItems = (userid, cartId, cartItemid) => {
    return axios.delete(`${url}/user/${userid}/cart/${cartId}/${cartItemid}`)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            throw err.response.data;
        })
}

export const updateQuantity = (cartItemId, action) => {
    return axios.patch(`${url}/items/${cartItemId}`, null,{ params : {"action" : action}})
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            throw err.response.data;
        })
}