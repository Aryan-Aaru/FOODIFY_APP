// import { IoMdHeartEmpty } from "react-icons/io";
// import { Navigate, useNavigate } from "react-router-dom";
// import Imgs from "../assets/LoginFoodImg.jpg"
// const RestaurantsCard = ({itm}) => {
//     let navigate = useNavigate();

//     // {
//     //         "picture" : {sushi},
//     //         "RestaurentName" : "Green Bowl & Co.",
//     //         "RestaurentInfo" : ["Healthy", "vegan"],
//     //         "timetaken" : "25-50 min", 
//     //         "feetaken" : "free",
//     //         "favorate" : false,
//     //         "rating" : 4.8
//     //     }

//     // const { id } = useParams();       // restaurant id from URL
//     // const location = useLocation();   // access passed state
//     // const restaurant = location.state?.restaurant;
//     console.log(itm.picture);
//     console.log(itm, "tiem");
//     return(
        
//         <section className="flex p-4 h-[180px] gap-4 w-full shadow-xl hover:bg-[#faaeae] rounded-xl bg-white hover:bg-[#fef2f2] hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer" 
//         onClick={() => {navigate(`/restaurent/${itm.id}`)}}>
//             <div className="rounded-xl overflow-hidden w-[25%] h-full">
//                 <img src={itm.picture || Imgs} alt="food image" className="h-full w-full" onError={(e) => {
//     e.target.onerror = null; // prevent infinite loop if fallback fails
//     e.target.src = Imgs;      // fallback to default image
//   }}/>
//             </div>
//             <div className=" w-full flex justify-between flex-col gap-4">
//                 <div className="flex items-start justify-between ">
//                     <div className="">
//                         <h2 className="text-xl font-bold">{itm.RestaurentName}</h2>
//                         <div className="flex gap-2">
//                             {
//                             itm.RestaurentInfo.map((itms) => {
//                                 return  <p className="text-sm">{itms}</p>
//                             })
//                         }
//                         </div>
                        
                       
//                     </div>
//                     <div className=" p-1 rounded-full ">
//                         <IoMdHeartEmpty className="hover:text-red-400 "/>
//                     </div>
//                 </div>
//                 <div className="flex justify-between ">
//                     <div className="flex gap-2 text-sm">
//                         <p>{itm.timetaken}</p>
//                         <p>{itm.feetaken}</p>
//                     </div>
//                     <div className="text-sm">
//                         <p>{itm.rating}</p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }
// export default RestaurantsCard;


import { IoMdHeartEmpty } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Imgs from "../assets/LoginFoodImg.jpg";

const RestaurantsCard = ({ itm }) => {
  const navigate = useNavigate();

  return (
    <section
      onClick={() => navigate(`/restaurent/${itm.id}`)}
      className="
        group
        bg-white
        rounded-2xl
        shadow-sm
        hover:shadow-xl
        transition
        cursor-pointer
        flex
        gap-5
        p-4
        items-center
        
      "
    >
      {/* IMAGE */}
      <div className="w-32 h-28 shrink-0 rounded-xl overflow-hidden">
        <img
          src={itm.picture || Imgs}
          alt=""
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = Imgs;
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col justify-between flex-1 h-full">

        {/* TOP */}
        <div className="flex justify-between items-start">

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              {itm.RestaurentName}
            </h2>

            <p className="text-sm text-gray-500">
              {itm.RestaurentInfo.join(", ")}
            </p>
          </div>

          {/* HEART */}
          <IoMdHeartEmpty
            className="text-xl text-gray-400 hover:text-red-500 transition"
          />
        </div>

        {/* BOTTOM */}
        <div className="flex justify-between items-center text-sm text-gray-600">

          <div className="flex gap-3">
            <span>{itm.timetaken}</span>
            <span>{itm.feetaken}</span>
          </div>

          {/* RATING BADGE */}
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-xs font-semibold">
            ⭐ {itm.rating}
          </span>
        </div>
      </div>
    </section>
  );
};

export default RestaurantsCard;
