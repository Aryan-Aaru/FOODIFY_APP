
// import NavFilter from '../components/NavFilter';
// import FilterComponent from '../components/FilterComponent';
// import ItemCardFilter from '../components/ItemCardFilter';
// import pizza from '../assets/pizzaSlice.jpg'
// import NavbarOff from '../components/NavbarOff';
// let FilterPage = () => {

//     // still in progress, api fetching, theme change, pagination etc. 
//     // Search value present here from nav bar  or search results
//     const isLoggedIn = !!localStorage.getItem("token");
//     let fooDishes = [
//         {   
//             "picture" : `${pizza}`, 
//             "offer" : "",
//             "favorate": false,
//             "foodName": "Mario's Italian",
//             "filters": "Pizza Italian $$",
//             "delivarycharges": "Free delivery on $20+",
//             "timeTaken": "15-35"
//         },
//         {
//             "picture" : `${pizza}`, 
//             "offer" : "",
//             "favorate": false,
//             "foodName": "Green Browl & Co.",
//             "filters": "Pizza Italian $$",
//             "delivarycharges": "Free delivery on $20+",
//             "timeTaken": "15-35"
//         },
//         {
//             "picture" : `${pizza}`,
//             "offer" : "", 
//             "favorate": false,
//             "foodName": "Burger Kingin",
//             "filters": "Pizza Italian $$",
//             "delivarycharges": "Free delivery on $20+",
//             "timeTaken": "15-35"
//         },
//         {
//             "picture" : `${pizza}`, 
//             "offer" : "90% off",
//             "favorate": false,
//             "foodName": "Morining Glory Cafe",
//             "filters": "Pizza Italian $$",
//             "delivarycharges": "Free delivery on $20+",
//             "timeTaken": "15-35"
//         },
//         {
//             "picture" : `${pizza}`, 
//             "offer" : "",
//             "favorate": false,
//             "foodName": "Tokyo Noodle House",
//             "filters": "Pizza Italian $$",
//             "delivarycharges": "Free delivery on $20+",
//             "timeTaken": "15-35"
//         },
//         {
//             "picture" : `${pizza}`, 
//             "offer" : "",
//             "favorate": false,
//             "foodName": "Pizza Paradise",
//             "filters": "Pizza Italian $$",
//             "delivarycharges": "Free delivery on $20+",
//             "timeTaken": "15-35"
//         }
//     ]


//     return  (
//     <section className='bg-[#f8f9fa] min-h-screen w-full' >
//         <section className="bg-[#f8f9fa] w-full">
//             {isLoggedIn ? <NavFilter /> : <NavbarOff />}

//             {/* rest of page */}
//         </section>
//         <section className='flex items-start p-8 gap-8'>
//             <FilterComponent/>
//             <section className='grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 w-[73%]'>
//                 {
//                     (fooDishes.length === 0 ) ? <h1>No Food Found</h1> :
                    
//                     fooDishes.map((item) => {
//                         // console.log(item);
//                         return <ItemCardFilter key={item.foodName} foodItems={item}/>
//                     })  
//                 }
//             </section>
            
    
//         </section>
        
        
//     </section>);
// }

// export default FilterPage;

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NavFilter from "../components/NavFilter";
import NavbarOff from "../components/NavbarOff";
import FilterComponent from "../components/FilterComponent";
import ItemCardFilter from "../components/ItemCardFilter";
import { getFoodbySearch } from "../apis/FoodAPI";
const FilterPage = () => {
  const [params] = useSearchParams();
  const search = params.get("search") || "";
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);

  const isLoggedIn = !!localStorage.getItem("token");

    useEffect(() => {
        if (!search) return;

        getFoodbySearch(search)
        .then((res) => {
            alert("Success");
            console.log(res);
            setFoods(res.data.content);
            
        })
        .catch(err =>{
        alert(err.message)
        })
        
    }, [search])

  return (
    <section className="bg-[#f8f9fa] min-h-screen w-full">
      {isLoggedIn ? <NavFilter /> : <NavbarOff />}

      <section className="flex items-start p-8 gap-8">
        <FilterComponent />

       <section className="flex-1 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
        {loading ? (
            <h1>Loading...</h1>
        ) : foods.length === 0 ? (
            <h1>No Food Found</h1>
        ) : (
            foods.map((item) => (
            <div
                key={item.food_id}
                // className="bg-white shadow-md rounded-xl p-4 flex flex-col justify-between h-80 w-full"
            >
                <ItemCardFilter foodItems={item} />
            </div>
            ))
        )}
        </section>


      </section>
    </section>
  );
};

export default FilterPage;
