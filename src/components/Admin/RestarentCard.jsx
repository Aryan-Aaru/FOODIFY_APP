


const RestarentCard = ({itm}) => {
    // {
    //             name : "Burger king",
    //             picture : pizza, 
    //             status : "Closed",
    //             popular : 'Fast Food', 
    //             address : '124 Main st, New York'
    //         },

    console.log(itm+" yes ocme");
    return (
        <div className="bg-white shadow flex p-6 rounded-3xl gap-4">
            <div className=" relative h-[80%] w-[35%] rounded-xl overflow-hidden border-red-500">
                <img src={itm.picture} alt="restaurent photo" className="w-fit h-fit"/>
                {
                    (itm.status === 'Closed') ? 
                        <div className=" absolute left-0 top-0 w-full h-full bg-[#00000098]"> </div> : <></>
                }
            </div>
            <div className=" ">
                <h1 className="font-bold text-2xl">{itm.name ? itm.name : "Title"}</h1>
                <span className={` px-2 py-0.5 font-bold text-sm rounded-full ${(itm.status === 'Active') ? 'bg-green-100 text-green-500' :
                                                                (itm.status === 'Pending') ? 'bg-amber-100 text-amber-500' :
                                                                (itm.status === 'Closed') ? 'bg-gray-200 text-gray-500' : ''
                }`}>{itm.status}</span>
                <p className="pt-2 text-[#8a8f9b] text-sm">{itm.popular}</p>
                <p className="text-[#8a8f9b] text-sm">{itm.address}</p>
            </div>
        </div>
    )
}

export default RestarentCard;