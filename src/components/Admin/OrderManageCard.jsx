

const OrderManageCard = ({itm}) => {
    // picture : '',
    //         restaurentName : 'Quick Bites',
    //         price : 24.50, 
    //         orderId : '#ORD-392',
    //         dishName : 'Sarah Jenkis',
    //         Extra: ['2x Whopper Meal', '1x Onion Rings', '1x Coke Zero'],
    //         orderStatus : 'PENDING',
    //         action:'PENDING'

    return (
        <section className="bg-white p-4 flex flex-col gap-4 rounded-xl shadow">
            <div className="flex  flex-col gap-4 ">
                <div className="flex  justify-between ">
                    <div className="  border-red-500 flex gap-6">
                        <img src={itm.picture} alt="img" className=" h-[60px] rounded-xl overflow-hidden w-[60px]"/>
                        <div className=" ">
                            <h1 className="text-xl font-bold">{itm.restaurentName}</h1>
                            <p className="text-sm">{itm.orderId} {itm.dishName}</p>
                        </div>
                    </div>
                    
                    <div>
                        <h1 className="text-xl font-bold">{itm.price}</h1>
                        <p className="text-sm">day ago</p>
                    </div>
                </div>
                <div className="flex gap-2 ">
                    {
                        itm.Extra.map((item) => {
                            return <li className="list-none bg-[#f3f4f6] py-1 px-2 font-bold  text-[#9ca1aa]  rounded-full">{item}</li>
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <hr />
                <div className="flex items-start justify-between">
                    <div className="text-sm font-bold py-1 px-2">{itm.orderStatus}</div>
                    <div className=" p-2 flex justify-center bg-[#ea2a33] text-white w-[70%]">{itm.action}</div>
                </div>
            </div>
        </section>
    )
}

export default OrderManageCard;
