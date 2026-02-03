import RestaurentNav from "../components/RestaurentNav";
import Image from "../assets/hq720.jpg";
import { FaRegHeart } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { useEffect, useState } from "react";
import RestaurentItems from "../components/RestaurentItems";
import NavFilter from "../components/NavFilter";
import { useParams } from "react-router-dom";
import { getByRestaurentById, getFoodsByRestaurant  } from "../apis/RestaurentAPI";
const Restaurent = () => {

    let obj = ['All items' ,'Popular Items', 'Veg Items', 'Non-veg Items', 'Gluten-Free Items']

    // let [selected, setSelected] = useState('All items');

    // let [item, setItem] = useState(null);

    // let [loading, setLoading] = useState(false);
    const {id} = useParams();
    const [selected, setSelected] = useState('All items');

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(false);

    const [foods, setFoods] = useState([]);
    const [foodLoading, setFoodLoading] = useState(false);
    console.log(id+" id ");

    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        setLoading(true);

        getByRestaurentById(id)
            .then((res) => {
            setItem(res.data);
            })
            .catch((err) => {
            alert(err.message);
            })
            .finally(() => {
            setLoading(false);
            });
        }, [id]);
    
    const restaurantId = item?.restaurant_id;
    const menuId = item?.menu?.menu_id;

    const getFoodParams = () => {
        switch (selected) {
        case 'Popular Items':
            return { popular: true };

        case 'Veg Items':
            return { food_category: 'veg' };

        case 'Non-veg Items':
            return { food_category: 'non_veg' };

        case 'Gluten-Free Items':
            return { food_category: 'gluten_free' };

        default:
            return { popular: false };
        }
    };
    
    useEffect(() => {
        if (!restaurantId || !menuId) return;

        setFoodLoading(true);
        setFoods([]);

        getFoodsByRestaurant(restaurantId, menuId, {
        page: page,
        size: 6,
        ...getFoodParams()
        })
        .then((res) => {
            // setFoods(res.data.data.content); // Page<Food>
            setFoods(res.data.content);
            setTotalPages(res.data.totalPages);
        })
        .catch((err) => console.error(err))
        .finally(() => setFoodLoading(false));

    }, [restaurantId, menuId, selected, page]);

    if (loading) {
            return (
                <section className="min-h-screen flex items-center justify-center bg-[#f3f4f6]">
                <p className="text-lg font-bold animate-pulse text-gray-600">
                    Loading restaurant...
                </p>
                </section>
            );
            }
    

    if (!item) {
        return (
            <section className="min-h-screen flex items-center justify-center bg-[#f3f4f6]">
            <p className="text-lg font-bold text-red-500">
                Restaurant not found
            </p>
            </section>
        );
        }

    return (
    
        <section className="bg-[#f3f4f6] min-h-screen">
            
            {/* <RestaurentNav/> */}
            <NavFilter />
            <section className=" p-6 flex w-full flex-col gap-4">
                <div className="h-[30vh] border-red-400 relative  rounded-xl overflow-hidden">
                    <img src={item.restaurent_picture || Image} alt="" className="h-full w-full" onError={(e) => {
                        e.target.onerror = null; // prevent infinite loop if fallback fails
                        e.target.src = Image;      // fallback to default image
                      }}/>
                    <div className="absolute bg-[#3a38384c] top-0 left-0 border w-full h-full flex justify-between">
                        <div className="h-full p-6  flex items-end">
                            <div className=" flex flex-col gap-1 border-white">
                                <h1 className="text-3xl font-bold text-white">{item?.restaurent_name}</h1>
                                <p className="text-white text-sm">{item?.restaurent_brand}</p>
                                <div className="flex flex-wrap gap-4">
                                    <span className="text-sm px-2 py-1 bg-[#aeaaa444] text-white  rounded-full">Excellent (500+)</span>
                                    <span className="text-sm px-2 py-1 bg-[#aeaaa444] text-white  rounded-full">20-30 mins</span>
                                    <span className="text-sm px-2 py-1 bg-[#aeaaa444] text-white  rounded-full">delivary</span>
                                </div>
                            </div>
                        </div>
                        <div className=" border-white flex flex-col justify-between  p-4 ">
                            <div className="flex gap-4 items-center">
                                <div className="border rounded-full p-2 cursor-pointer hover:text-[#ea2a33] hover:bg-[#fdecec] bg-white"><FaRegHeart /></div>
                                <div className="border p-2 rounded-full cursor-pointer hover:text-[#ea2a33] hover:bg-[#fdecec] bg-white"><IoMdShare /></div>
                            </div>
                            <div className="p-2 rounded-[10px] text-sm font-bold bg-[#ea2a33] text-white">
                                More Info
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 pt-2">
                    <div className="w-[20vw] ">
                        <h1 className="font-bold text-xl mb-2">Menu</h1>
                        <div className="flex flex-col gap-2">
                            {
                                obj.map((item, index) => {
                                    return <li key={index} className={` cursor-pointer ${(selected === item) ? 'text-white bg-[#ea2a33]' : 'text-[#8a909c] shadow hover:text-[#ea2a33] hover:bg-[#fdecec]'} rounded-xl px-4 py-2 font-bold list-none`} onClick={() => {
                                        setSelected(item)
                                    }}>{item}</li>
                                })
                            }
                        </div>
                        
                    </div>
                    <div className="w-full ">

                        <RestaurentItems title={selected} foods={foods} restaurantId={restaurantId} loading={foodLoading} page={page}
  totalPages={totalPages}
  onPageChange={setPage} />
                    </div>
                </div>
            </section>
        </section>
    )
}
export default Restaurent;