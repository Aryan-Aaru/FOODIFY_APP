import Items from "./Items";
import RecommendedDISH from "./RecommendedDISH";

const RestaurentItems = ({itemName}) => {
    let dish = [
        {
            name : "Coca Cola", 
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ea.", 
            price : 1.99
        },
        {
            name : "Coca Cola", 
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ea.", 
            price : 1.99
        },
        {
            name : "Coca Cola", 
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ea.", 
            price : 1.99
        },
        {
            name : "Coca Cola", 
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ea.", 
            price : 1.99
        }
    ]

    return (
        <section className=" mt-6 w-full">
            <h1 className="text-2xl font-bold">{itemName}</h1>
            <div className={`grid grid-cols-1 p-4 sm:grid-cols-2 gap-6`}>

                {
                    dish.map((item) =>{
                        console.log(item);
                        return <RecommendedDISH itm={item}/>
                    })
                }
                
            </div>
        </section>
    )
}
export default RestaurentItems;