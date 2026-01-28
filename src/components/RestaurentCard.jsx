import { IoMdHeartEmpty } from "react-icons/io";
const RestaurantsCard = ({itm}) => {

    // {
    //         "picture" : {sushi},
    //         "RestaurentName" : "Green Bowl & Co.",
    //         "RestaurentInfo" : ["Healthy", "vegan"],
    //         "timetaken" : "25-50 min", 
    //         "feetaken" : "free",
    //         "favorate" : false,
    //         "rating" : 4.8
    //     }
    console.log(itm.picture);
    return(
        
        <section className="flex p-4 h-[180px] gap-4 w-full shadow-xl rounded-xl bg-white">
            <div className="rounded-xl overflow-hidden w-[25%] h-full">
                <img src={itm.picture.sushi} alt="food image" className="h-full w-full" />
            </div>
            <div className=" w-full flex justify-between flex-col gap-4">
                <div className="flex justify-between ">
                    <div className="">
                        <h2 className="text-xl font-bold">{itm.RestaurentName}</h2>
                        <div className="flex gap-2">
                            {
                            itm.RestaurentInfo.map((itms) => {
                                return  <p className="text-sm">{itms}</p>
                            })
                        }
                        </div>
                        
                       
                    </div>
                    <div>
                        <IoMdHeartEmpty />
                    </div>
                </div>
                <div className="flex justify-between ">
                    <div className="flex gap-2 text-sm">
                        <p>{itm.timetaken}</p>
                        <p>{itm.feetaken}</p>
                    </div>
                    <div className="text-sm">
                        <p>{itm.rating}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default RestaurantsCard;