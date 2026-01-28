import { useState } from "react";

const PartnerSignup = () => {
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("restaurant", JSON.stringify(data));
    alert("Restaurant Registered");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-orange-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow w-96"
      >
        <h2 className="text-2xl font-bold text-orange-500 mb-4">
          Restaurant Signup
        </h2>

        <input
          placeholder="Restaurant Name"
          className="w-full border p-2 mb-3"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <input
          placeholder="Email"
          className="w-full border p-2 mb-3"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button className="w-full bg-orange-500 text-white py-2 rounded">
          Register Restaurant
        </button>
      </form>
    </div>
  );
};

export default PartnerSignup;
