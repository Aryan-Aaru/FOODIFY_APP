import AddToCart from "../components/AddToCart";
import NavFilter from "../components/NavFilter"
import { IoMdHeartEmpty } from "react-icons/io";
import pizza from '../assets/pizzaSlice.jpg';
import { useEffect, useState } from "react";
import { getFoodbyId } from "../apis/FoodAPI";
// import ItemCardFilter from "../components/ItemCardFilter";



const SpecificDish = () => {
    let [dishCnt, setDistCnt] = useState(1);
    const [food, setFood] = useState(null);
    useEffect(() => {
    
        getFoodbyId(1)
        .then(res => {
            console.log("API Response:", res.data);
            if (res.success){
                 setFood(res.data);
            } // set the state
            else alert(res.message);
        })
        .catch(err => {
            console.error(err);
            alert("Network error");
        });
    }, []);
  
    if (!food) {
    return (
        <section className="bg-[#f8f9fa] min-h-screen flex items-center justify-center">
            <p>Loading...</p>
        </section>
    );
}


    return (
        <section className="bg-[#f8f9fa] min-h-screen">
            <NavFilter />
            <section className="flex-wrap border-red-600 justify-center w-full p-8 flex items-start gap-15">
                
                <section className=" h-[500px] w-[650px] flex flex-col gap-4 border-blue-500">
                    <div className="h-[75%] border border-red-600 relative overflow-hidden rounded-3xl">
                        <div className="absolute top-4 right-4 rounded-full p-2 bg-[#5052518d] text-white">
                            <IoMdHeartEmpty />
                        </div>
                        <img src={food.picture} alt="" className="h-full w-full"/>
                    </div>
                    <div className="flex h-[15%] gap-3">
                        <div className=" rounded-xl h-full w-[20%] overflow-hidden">
                            <img src={food.picture} alt="" className="h-full w-full"/>
                        </div>
                        <div className=" rounded-xl h-full w-[20%] overflow-hidden">
                            <img src={food.picture} alt="" className="h-full w-full"/>
                        </div>

                    </div>
                </section>
                <section className="rounded-xl min-w-[30%] max-w-[40%] p-8 flex flex-col gap-3 bg-white">
                    
                    <AddToCart food = {food}  cnt = {dishCnt} inc = {() => {setDistCnt(dishCnt+1);}} dec = {() => {setDistCnt((dishCnt <= 1) ? dishCnt : dishCnt-1)}} />
                </section>
            </section>
            <section>
                {/* <ItemCardFilter /> */}
            </section>
        </section>
    )
}

export default SpecificDish;