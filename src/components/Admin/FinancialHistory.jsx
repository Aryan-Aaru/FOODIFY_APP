
const FinancialHistory = ({itm}) => {
    // {
    //     picture : pizza,
    //     restaurentName : 'Quick Bites',
    //     price : 24.50, 
    //     orderId : '#ORD-392',
    //     dishName : 'Sarah Jenkis',
    //     Extra: ['2x Whopper Meal', '1x Onion Rings', '1x Coke Zero'],
    //     orderStatus : 'PREPARING',
    //     action:'Assign Driver'
    // }
    return (
        <div className="flex bg-white rounded-xl justify-between shadow p-4 w-[95%]">
            <div className="flex gap-2">
                <div className=" rounded-full p-2 flex items-center">
                    <img src={itm.picture} alt="photo" className=" h-[24px] w-[35px] "/>
                </div>
                <div>
                    <div className="text-2xl font-bold">
                        {itm.restaurentName}
                    </div>
                    <div>
                        {itm.orderId}
                    </div>
                </div>
            </div>
            <div className="flex gap-2">
                <div>
                    <p>Earned</p>
                    <p>{itm.price}</p>

                </div>
                <div>
                    K
                </div>
            </div>
        </div>
    )
}
export default FinancialHistory;