import NavFilter from "../components/NavFilter";
import burger from '../assets/burgur.jpg';
import sushi from '../assets/sushi.jpg'
import FilterComponent from "../components/FilterComponent";
import RestaurantsCard from "../components/RestaurentCard";
const HomePage = () => {

    let items  = [
        {
            id:1,
            picture : {sushi},
            RestaurentName : "Green Bowl & Co.",
            RestaurentInfo : ["Healthy", "vegan"],
            timetaken : "25-50 min", 
            feetaken : "free",
            favorate : false,
            rating : 4.8
        },
        {
            id:3,
            picture : {sushi},
            RestaurentName : "Aryan",
            RestaurentInfo : ["Healthy", "vegan"],
            timetaken : "25-50 min", 
            feetaken : "free",
            favorate : true,
            rating : 4.8
        },
        {
            id:2,
            picture : {sushi},
            RestaurentName : "Bro",
            RestaurentInfo : ["Healthy", "vegan"],
            timetaken : "25-50 min", 
            feetaken : "free",
            favorate : false,
            rating : 4.8
        }
    ]

    const handleClick = (restaurant) => {
        navigate(`/restaurent/${restaurant.id}`, { state: { restaurant } });
    };
    return (
        <div className="bg-[#f9fafb] min-h-svh">
            <NavFilter />
            <main className=" p-6 flex flex-col gap-6">
                
                <section className="  flex gap-10">
                    <section className="w-[68%] h-[210px] cursor-pointer relative rounded-2xl overflow-hidden ">
                        <img src={sushi} alt="food image" className="h-full w-full"/>
                        <div className=" bg-[#39353567] absolute h-full gap-4  items-start flex flex-col top-4 left-8">
                            <div className=" flex flex-col items-start">
                                <div className="px-2 font-bold rounded-full text-sm text-white bg-[#f44444]">Limited Offer</div>
                                <h1 className="text-3xl font-bold text-white">
                                    50% OFF
                                <br />
                                    Sushi Platter
                                </h1>
                            </div>
                            <p className="text-[12px] text-white">On all Orders above $30</p>
                            <button className=" cursor-pointer hover:text-[#f44444] py-2 px-4 bg-white text-black text-sm font-[600] rounded-full">Order Now</button>
                        </div>                    
                    </section>
                    <section className=" w-[30%] cursor-pointer h-[210px] text-white overflow-hidden rounded-2xl relative">
                        <img src={burger} alt="food image" className="h-full w-full"/>
                        <div className=" gap-1  bg-[#39353567] absolute bottom-4 left-6 flex flex-col items-start">
                            <div className="text-sm px-2 py-1 rounded-xl bg-[#ffffff43]">New Arrival</div>
                            <div>
                                <h3 className="text-2xl font-bold">Burger Kingpin</h3>
                                <p className="text-[12px]">4.8</p>
                            </div>
                        </div>
                    </section>
                </section>
                <section className=" flex gap-6">
                    <FilterComponent />
                    <section className="w-full">
                        <div className="flex justify-between w-full">
                            <h1 className="text-xl font-bold">All Restaurants</h1>
                            <p className="text-[12px] font-bold text-[#6b7382]">Sorted by: <span className="text-black">Recommended</span> </p>
                        </div>
                        <div className="mt-5 flex cursor-pointer flex-col gap-4">
                            
                            {
                                items.map((item) =>{
                                    return <RestaurantsCard itm={item} />
                                })
                            }

                            {/* {restaurants.map(r => (
                                <div key={r.id} onClick={() => handleClick(r)}>
                                {r.name}
                                </div>
                            ))} */}
                            {/* <RestaurantsCard /> */}
                        </div>
                    </section>
                </section>
            </main>
        </div>
    )
}

export default HomePage;

