

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Loginapi } from "../apis/UserApi";
import { Eye, EyeOff } from "lucide-react";
const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    Loginapi(data)
      .then((res) => {
        localStorage.setItem("token", "asldfkj");
        localStorage.setItem("userId", res.data.user_id)
        if (res.data.role === "owner") navigate("/admin");
        else if (res.data.role === "customer") navigate("/home");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      <input
        type="email"
        placeholder="Email"
        required
        className="w-full outline rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-400 focus:outline-none"
        onChange={(e) =>
          setData({ ...data, email: e.target.value })
        }
      />

      

      <div className="relative ">
        <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        required
        className="w-full outline rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-400 focus:outline-none"
        onChange={(e) =>
          setData({ ...data, password: e.target.value })
        }
      />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

       <Link
          to="/forgot-password"
          className="block text-right cursor-pointer text-sm text-[#ef4444] mb-3"
        >
          Forgot Password?
        </Link>

      <button className="w-full cursor-pointer bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold">
        Login
      </button>

    </form>
  );
};
export default Login;

