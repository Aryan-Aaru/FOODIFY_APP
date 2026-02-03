import axios from "axios";

const url = "http://localhost:8080";

export const getFoodbyId = (restaurantId, foodId) => {   
  return axios.get(`${url}/restaurent/${restaurantId}/food/${foodId}`)    
    .then(res => {
      return res.data;
    })
    .catch(err => {
      throw err.response.data;
    });
};
