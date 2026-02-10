

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
