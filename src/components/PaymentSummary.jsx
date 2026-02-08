import React from 'react'

const PaymentSummary = ({details}) => {
  console.log(details);
  return (
    <div>


<div className="bg-white rounded-2xl p-6 shadow-sm h-fit">
<div className="bg-orange-50 rounded-xl p-5 mb-6">
<h2 className="font-medium">Apply Promo Code</h2>
<p className="text-sm text-gray-500">Save on your order</p>
</div>


<h2 className="font-semibold mb-5">Payment Summary</h2>
<div className="space-y-3 text-sm">
<div className="flex justify-between"><span>Subtotal</span><span>${details.total_amount}</span></div>
<div className="flex justify-between"><span>Delivery Fee</span><span>${details.restaurent.
restaurent_delivary_fee
}</span></div>
<div className="flex justify-between"><span>Tax</span><span>${details.restaurent.restaurent_service_fee
}</span></div>
</div>


<hr className="my-6" />


<div className="flex justify-between font-semibold text-lg mb-5">
<span>Total</span><span>${details.total_amount+details.restaurent.
restaurent_delivary_fee+details.restaurent.restaurent_service_fee}</span>
</div>


<button className="w-full bg-red-500 hover:text-black cursor-pointer text-white py-4 rounded-xl font-semibold">
Checkout ${details.total_amount+details.restaurent.
restaurent_delivary_fee+details.restaurent.restaurent_service_fee}
</button>


<p className="text-center text-sm text-gray-500 mt-3">🔒 Secure Checkout</p>
</div>
    </div>
  )
}

export default PaymentSummary