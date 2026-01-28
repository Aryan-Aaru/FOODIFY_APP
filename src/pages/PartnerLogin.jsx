import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const PartnerLogin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      setError("All fields are required");
      return;
    }

    const storedRestaurant = JSON.parse(localStorage.getItem("restaurant"));

    if (
      !storedRestaurant ||
      storedRestaurant.email !== data.email ||
      storedRestaurant.password !== data.password
    ) {
      setError("Invalid restaurant credentials");
      return;
    }

    alert("Restaurant login successful");
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-orange-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-orange-500">
          Restaurant Login
        </h2>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <input
          type="email"
          placeholder="Restaurant Email"
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
          Login
        </button>

        <p className="mt-4 text-sm text-center">
          New partner?{" "}
          <Link to="/partner/signup" className="text-orange-500 font-semibold">
            Register your restaurant
          </Link>
        </p>
      </form>
    </div>
  );
};

export default PartnerLogin;
