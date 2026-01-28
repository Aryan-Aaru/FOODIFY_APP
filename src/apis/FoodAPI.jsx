import axios from "axios";

const url = "http://localhost:8081";

export const getFoodbyId = (foodId) => {   
  return axios.get(`${url}/food`)    
    .then(res => {
       const food = res.data.find(f => f.foodId === foodId);
      if (!food) throw new Error("Food not found");
      console.log(food); 
      return {

        success: true,
        message: "All food fetched successfully",
        data: food
      };
    })
    .catch(err => {
      console.error(err);
      return {
        success: false,
        message: "Error occurred: " + err.message
      };
    });
};
