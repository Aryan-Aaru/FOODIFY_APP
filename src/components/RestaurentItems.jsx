// import Items from "./Items";
// import RecommendedDISH from "./RecommendedDISH";

// const RestaurentItems = ({ title, foods, loading,
//   page,
//   totalPages,
//   onPageChange, restaurantId }) => {
//     // let dish = [
//     //     {
//     //         name : "Coca Cola", 
//     //         description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ea.", 
//     //         price : 1.99
//     //     },
//     //     {
//     //         name : "Coca Cola", 
//     //         description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ea.", 
//     //         price : 1.99
//     //     },
//     //     {
//     //         name : "Coca Cola", 
//     //         description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ea.", 
//     //         price : 1.99
//     //     },
//     //     {
//     //         name : "Coca Cola", 
//     //         description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ea.", 
//     //         price : 1.99
//     //     }
//     // ]

//     if (loading) {
//         return (
//         <p className="text-center font-bold animate-pulse">
//             Loading food items...
//         </p>
//         );
//     }

//     if (!foods || foods.length === 0) {
//         return (
//         <p className="text-center text-gray-500">
//             No food items found
//         </p>
//         );
//     }


//     return (
//         <section className=" mt-6 w-full">
//             <h1 className="text-2xl font-bold">{title}</h1>
//             <div className={`grid grid-cols-1 p-4 sm:grid-cols-2 gap-6`}>

//                 {
//                     foods.map((item) =>{
//                         console.log(item);
//                         return <RecommendedDISH key={item.food_id} itm={item} restaurantId={restaurantId}/>
//                     })
//                 }
                
//             </div>
//             {totalPages > 1 && (
//                 <div className="flex justify-center items-center gap-4 mt-6">
//                 <button
//                     disabled={page === 0}
//                     onClick={() => onPageChange(page - 1)}
//                     className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
//                 >
//                     Prev
//                 </button>

//                 <span className="font-bold">
//                     Page {page + 1} of {totalPages}
//                 </span>

//                 <button
//                     disabled={page === totalPages - 1}
//                     onClick={() => onPageChange(page + 1)}
//                     className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
//                 >
//                     Next
//                 </button>
//                 </div>
//             )}
//         </section>
//     )
// }
// export default RestaurentItems;

import RecommendedDISH from "./RecommendedDISH";

const RestaurentItems = ({
  title,
  foods,
  loading,
  page,
  totalPages,
  onPageChange,
  restaurantId,
}) => {
  if (loading) {
    return (
      <p className="text-center font-bold animate-pulse">
        Loading food items...
      </p>
    );
  }

  if (!foods || foods.length === 0) {
    return <p className="text-center text-gray-500">No items found</p>;
  }

  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">{title}</h1>

      {/* ⭐ Responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
        {foods.map((item) => (
          <RecommendedDISH
            key={item.food_id}
            itm={item}
            restaurantId={restaurantId}
          />
        ))}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-4 mt-8">
          <button
            disabled={page === 0}
            onClick={() => onPageChange(page - 1)}
            className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
          >
            Prev
          </button>

          <span className="font-semibold">
            Page {page + 1} of {totalPages}
          </span>

          <button
            disabled={page === totalPages - 1}
            onClick={() => onPageChange(page + 1)}
            className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default RestaurentItems;
