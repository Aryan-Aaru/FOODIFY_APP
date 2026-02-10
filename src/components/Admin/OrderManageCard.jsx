

// const OrderManageCard = ({itm}) => {
//     // picture : '',
//     //         restaurentName : 'Quick Bites',
//     //         price : 24.50, 
//     //         orderId : '#ORD-392',
//     //         dishName : 'Sarah Jenkis',
//     //         Extra: ['2x Whopper Meal', '1x Onion Rings', '1x Coke Zero'],
//     //         orderStatus : 'PENDING',
//     //         action:'PENDING'

//     return (
//         <section className="bg-white p-4 flex flex-col gap-4 rounded-xl shadow">
//             <div className="flex  flex-col gap-4 ">
//                 <div className="flex  justify-between ">
//                     <div className="  border-red-500 flex gap-6">
//                         <img src={itm.picture} alt="img" className=" h-[60px] rounded-xl overflow-hidden w-[60px]"/>
//                         <div className=" ">
//                             <h1 className="text-xl font-bold">{itm.restaurentName}</h1>
//                             <p className="text-sm">{itm.orderId} {itm.dishName}</p>
//                         </div>
//                     </div>
                    
//                     <div>
//                         <h1 className="text-xl font-bold">{itm.price}</h1>
//                         <p className="text-sm">day ago</p>
//                     </div>
//                 </div>
//                 <div className="flex gap-2 ">
//                     {
//                         itm.Extra.map((item) => {
//                             return <li className="list-none bg-[#f3f4f6] py-1 px-2 font-bold  text-[#9ca1aa]  rounded-full">{item}</li>
//                         })
//                     }
//                 </div>
//             </div>
//             <div className="flex flex-col gap-6">
//                 <hr />
//                 <div className="flex items-start justify-between">
//                     <div className="text-sm font-bold py-1 px-2">{itm.orderStatus}</div>
//                     <div className=" p-2 flex justify-center bg-[#ea2a33] text-white w-[70%]">{itm.action}</div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default OrderManageCard;

const statusBadge = {
  PREPARING: "bg-orange-100 text-orange-600",
  READY: "bg-blue-100 text-blue-600",
  PENDING: "bg-gray-100 text-gray-600",
  DELIVERING: "bg-green-100 text-green-600",
};

const OrderManageCard = ({ itm }) => {
  if (!itm) return null;

  // ✅ normalize status from your data
  const status = itm.status?.toUpperCase().trim();

  return (
    <section className="bg-white p-4 rounded-xl shadow flex flex-col gap-4">
      
      {/* HEADER */}
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img
            src={itm.picture}
            alt="restaurant"
            className="h-[52px] w-[52px] rounded-xl object-cover"
          />

          <div>
            <h2 className="font-bold">{itm.restaurentName}</h2>
            <p className="text-xs text-gray-500">
              {itm.orderId} • {itm.customer}
            </p>
          </div>
        </div>

        <div className="text-right">
          <p className="font-bold">${itm.price}</p>
          <p className="text-xs text-gray-400">{itm.time}</p>
        </div>
      </div>

      {/* ITEMS */}
      <div className="flex gap-2 flex-wrap">
        {itm.items?.map((item, idx) => (
          <span
            key={idx}
            className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-500"
          >
            {item}
          </span>
        ))}
      </div>

      <hr />

      {/* FOOTER */}
      <div className="flex justify-between items-center">
        
        {/* STATUS BADGE */}
        {status && (
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${statusBadge[status]}`}
          >
            {status}
          </span>
        )}

        {/* ACTION BUTTONS — NOW THEY WILL SHOW */}
        <div className="flex gap-2 items-center">

          {status === "PREPARING" && (
            <button className="bg-[#ea2a33] text-white px-4 py-1 rounded-lg text-sm">
              Assign Driver
            </button>
          )}

          {status === "READY" && (
            <button className="bg-gray-100 px-4 py-1 rounded-lg text-sm">
              ✔ Mark Picked Up
            </button>
          )}

          {status === "PENDING" && (
            <>
              <button className="border px-4 py-1 rounded-lg text-sm">
                Reject
              </button>
              <button className="bg-[#ea2a33] text-white px-4 py-1 rounded-lg text-sm">
                Accept
              </button>
            </>
          )}

          {status === "DELIVERING" && (
            <button className="text-[#ea2a33] text-sm font-semibold">
              View Map →
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderManageCard;
