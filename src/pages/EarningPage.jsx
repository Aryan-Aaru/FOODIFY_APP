import FinancialCard from "../components/Admin/FinancialCard";
import pizza from '../assets/pizzaSlice.jpg'
import FinancialHistory from "../components/Admin/FinancialHistory";


const EarningPage = () => {

    let erning = [
        {
            title : "Total Orders", 
            price : 1284, 
            profit : 12
        },
        {
            title : "Total Sales", 
            price : 42560, 
            profit : 8
        },
        {
            title : "Profit", 
            price : 12768, 
            profit : 15
        }
    ]

    let hsty = [
        {
            picture : pizza,
            restaurentName : 'Quick Bites',
            price : 24.50, 
            orderId : '#ORD-392',
            dishName : 'Sarah Jenkis',
            Extra: ['2x Whopper Meal', '1x Onion Rings', '1x Coke Zero'],
            orderStatus : 'PREPARING',
            action:'Assign Driver'
        },
        {
            picture : pizza,
            restaurentName : 'Quick Bites',
            price : 24.50, 
            orderId : '#ORD-392',
            dishName : 'Sarah Jenkis',
            Extra: ['2x Whopper Meal', '1x Onion Rings', '1x Coke Zero'],
            orderStatus : 'PREPARING',
            action:'Assign Driver'
        },
        {
            picture : pizza,
            restaurentName : 'Quick Bites',
            price : 24.50, 
            orderId : '#ORD-392',
            dishName : 'Sarah Jenkis',
            Extra: ['2x Whopper Meal', '1x Onion Rings', '1x Coke Zero'],
            orderStatus : 'PREPARING',
            action:'Assign Driver'
        },
        {
            picture : pizza,
            restaurentName : 'Quick Bites',
            price : 24.50, 
            orderId : '#ORD-392',
            dishName : 'Sarah Jenkis',
            Extra: ['2x Whopper Meal', '1x Onion Rings', '1x Coke Zero'],
            orderStatus : 'PREPARING',
            action:'Assign Driver'
        }
    ]
    return (
        <section className="p-8">
            <section className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
                {
                    erning.map((item) => {

                        return <FinancialCard itm={item} />
                    })
                }
            </section>
            <section className="mt-10 ">
                <div className="flex justify-between">
                    <h1 className="text-xl font-bold">Recent Transactions</h1>
                    <div>October 2023</div>
                </div>
                <div className="flex mt-8 flex-col gap-6">
                    {
                        hsty.map((item) => {
                            return <FinancialHistory itm={item} />
                        })
                    }
                </div>
                
            </section>
        </section>
        
    )
}
export default EarningPage;