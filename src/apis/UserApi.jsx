import axios from "axios";

const url = "http://localhost:8080"; 


export const Loginapi = (credintial) => {
    return axios.post(`${url}/login`, credintial)
            .then((res) => {
                console.log(res.data," succes");

                return res.data;
            })
            .catch((err) =>{
                console.log(err.response.data," error");
                throw err.response.data;
            })
}

export const signUp = (user) => {
    return axios.post(`${url}/signup`, user)
            .then((res) => {
                console.log(res.data," succes");

                return res.data;
            })
            .catch((err) =>{
                console.log(err.response.data," error");
                throw err.response.data;
            })
}

export const emailVerify = (email) => {
    return axios.get(`${url}/verifyEmail`, {params : {email : email}})
        .then((res) => {
            console.log(res.data+" success");
            return res.data;
        })
        .catch((err) => {
            console.log(err.response.data, +" error");
            throw err.response.data;
        })
}

export const passwordUpdate = (forgotData) => {
    return axios.patch(`${url}/forgot-password`, forgotData)
        .then((res) => {
            console.log(res.data," success");
            return res.data
        })
        .catch((err) => {
            console.log(err.response.data, "err");
            throw err.response.data;
        })
}

export const getUser = (userid) =>{
    return axios.get(`${url}/${userid}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err.response.data;
        })
}