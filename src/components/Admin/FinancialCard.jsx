
const FinancialCard = ({itm}) => {
    // {
    //         title : "Profit", 
    //         price : 12768, 
    //         profit : 15
    //     }
    return (
        <div className="flex flex-col shadow gap-2 p-6 bg-white rounded-xl">
            <p className="text-[#8a8f9b] font-bold">{itm.title}</p>
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">{itm.price}</h1>
                <p>{itm.profit}</p>
            </div>
        </div>
    );
}
export default FinancialCard;