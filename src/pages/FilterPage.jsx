
import NavFilter from '../components/NavFilter';
import FilterComponent from '../components/FilterComponent';
import ItemCardFilter from '../components/ItemCardFilter';
import pizza from '../assets/pizzaSlice.jpg'
let FilterPage = () => {

    // still in progress, api fetching, theme change, pagination etc. 
    // Search value present here from nav bar  or search results
    let fooDishes = [
        {   
            "picture" : `${pizza}`, 
            "offer" : "",
            "favorate": false,
            "foodName": "Mario's Italian",
            "filters": "Pizza Italian $$",
            "delivarycharges": "Free delivery on $20+",
            "timeTaken": "15-35"
        },
        {
            "picture" : `${pizza}`, 
            "offer" : "",
            "favorate": false,
            "foodName": "Green Browl & Co.",
            "filters": "Pizza Italian $$",
            "delivarycharges": "Free delivery on $20+",
            "timeTaken": "15-35"
        },
        {
            "picture" : `${pizza}`,
            "offer" : "", 
            "favorate": false,
            "foodName": "Burger Kingin",
            "filters": "Pizza Italian $$",
            "delivarycharges": "Free delivery on $20+",
            "timeTaken": "15-35"
        },
        {
            "picture" : `${pizza}`, 
            "offer" : "90% off",
            "favorate": false,
            "foodName": "Morining Glory Cafe",
            "filters": "Pizza Italian $$",
            "delivarycharges": "Free delivery on $20+",
            "timeTaken": "15-35"
        },
        {
            "picture" : `${pizza}`, 
            "offer" : "",
            "favorate": false,
            "foodName": "Tokyo Noodle House",
            "filters": "Pizza Italian $$",
            "delivarycharges": "Free delivery on $20+",
            "timeTaken": "15-35"
        },
        {
            "picture" : `${pizza}`, 
            "offer" : "",
            "favorate": false,
            "foodName": "Pizza Paradise",
            "filters": "Pizza Italian $$",
            "delivarycharges": "Free delivery on $20+",
            "timeTaken": "15-35"
        }
    ]


    return  (
    <section className='bg-[#f8f9fa] min-h-screen w-full' >
        <NavFilter />
        <section className='flex items-start p-8 gap-8'>
            <FilterComponent/>
            <section className='grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 w-[73%]'>
                {
                    (fooDishes.length === 0 ) ? <h1>No Food Found</h1> :
                    
                    fooDishes.map((item) => {
                        // console.log(item);
                        return <ItemCardFilter key={item.foodName} foodItems={item}/>
                    })  
                }
            </section>
            
    
        </section>
        
        
    </section>);
}

export default FilterPage;