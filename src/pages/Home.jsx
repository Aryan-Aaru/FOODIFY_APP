import FeatureCard from "../components/FeatureCard";
import Navbar from "../components/Navbar";
import Biryani from "../assets/Biryani.avif";
import Cake from "../assets/Cake.avif";
import Pizza from "../assets/Pizza.avif";
import Burger from "../assets/Burger.avif";
import Shawarma from "../assets/Shawarma.avif";
import Rolls from "../assets/Rolls.avif";
import Dosa from "../assets/Dosa.avif";
import Pastry from "../assets/Pastry.avif";
import Momo from "../assets/Momo.avif";
import Idli from "../assets/Idli.avif";
import Shake from "../assets/Shake.avif";
import Pasta from "../assets/Pasta.avif";
const Home = () => {

  let food_option = [Biryani, Cake, Pizza, Burger, Shawarma, Rolls, Dosa, Pastry, Momo, Idli, Shake, Pasta]
  return (
    // <div className="bg-orange-50 min-h-screen flex flex-col items-center py-16">
    //   <h2 className="text-4xl font-bold text-gray-800 mb-10">
    //     Food Delivery Made Easy
    //   </h2>

    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
    //     <FeatureCard
    //       title="Fast Delivery"
    //       desc="Get your food delivered in under 30 minutes"
    //     />
    //     <FeatureCard
    //       title="Hygienic Food"
    //       desc="Prepared with highest safety standards"
    //     />
    //     <FeatureCard
    //       title="Offers & Discounts"
    //       desc="Up to 60% OFF on top restaurants"
    //     />
    //   </div>
    // </div>
    <section className=" ">
      <div className="fixed w-full">
        <Navbar />
      </div>
      <section className="h-[95vh] flex flex-col justify-center items-center">
          <h2 className="text-6xl  text-center font-bold text-[#ef4444] mb-10">
            Order the Best food.<br />  Discover best restaurants. Foodify it!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
            <FeatureCard
              title="Fast Delivery"
              desc="Get your food delivered in under 30 minutes"
            />
            <FeatureCard
              title="Hygienic Food"
              desc="Prepared with highest safety standards"
            />
            <FeatureCard
              title="Offers & Discounts"
              desc="Up to 60% OFF on top restaurants"
            />
          </div>
      </section>
      <section className=" w-full h-[70vh] flex justify-center items-center">
        <div className="w-[80vw]  flex flex-col gap-8">
          <div className="text-3xl font-bold">
            Order our best food options
          </div>
          <div className=" grid grid-cols-6 gap-3 grid-rows-2 flex-wrap  ">
              {
                food_option.map((item, index) => {
                  return <img key={index} src={item} alt={`${item} Picture`}  className="h-[180px] w-[180px]"/>
                })
              }
          </div>
    
        </div>
      </section>
    </section>
  );
};

export default Home;
