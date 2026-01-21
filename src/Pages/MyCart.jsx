import React from "react";
import NavBar from "../components/NavBar";
import Items from "../components/Items";
import RecommendedDISH from "../components/RecommendedDISH";
import PaymentSummary from "../components/PaymentSummary";
import { useState } from "react";

const MyCart = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />

      <div className="grid grid-cols-1 p-8 lg:grid-cols-3 gap-8">
      
        <div className="lg:col-span-2  space-y-6">
          <Items />
         
          {/* <RecommendedDISH/> */}
        </div>

        <PaymentSummary/>
      </div>
    </div>
  );
};

export default MyCart;
