import React from "react";
import NavBar from "../components/NavBar";
import Items from "../components/Items";
import RecommendedDISH from "../components/RecommendedDISH";
import PaymentSummary from "../components/PaymentSummary";

const MyCart = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-8 py-6">
      <NavBar />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">
          {/* Cart Item 1 */}
          <Items />

      
        

          {/* Complete Meal */}
         
              <RecommendedDISH/>
        </div>

        {/* RIGHT SIDE */}
             <PaymentSummary/>
      </div>
    </div>
  );
};

export default MyCart;
