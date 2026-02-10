


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../apis/UserApi";
import { Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "customer",
    profile: null,
  });
  const [showPassword, setShowPassword] = useState(false);

  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    signUp(data)
      .then(() => navigate("/login"))
      .catch((err) => alert(err.message));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setData({ ...data, profile: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-3"
    >
      <div className="flex justify-center -mt-2">
        <label className="w-14 h-14 rounded-full border border-dashed border-gray-300 overflow-hidden cursor-pointer flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition">
          {preview ? (
            <img
              src={preview}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-xs text-gray-400">Upload</span>
          )}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>

      <input
        type="text"
        placeholder="Full Name"
        required
        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-1 focus:ring-red-400 outline-none"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <input
        type="email"
        placeholder="Email"
        required
        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-1 focus:ring-red-400 outline-none"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      <input
        type="tel"
        placeholder="Phone Number"
        required
        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-1 focus:ring-red-400 outline-none"
        onChange={(e) => setData({ ...data, phone: e.target.value })}
      />

      <div className="relative ">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          required
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 pr-10 text-sm focus:ring-1 focus:ring-red-400 outline-none"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>


      <select
        value={data.role}
        onChange={(e) => setData({ ...data, role: e.target.value })}
        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:ring-1 focus:ring-red-400 outline-none"
      >
        <option value="customer">Customer</option>
        <option value="owner">Owner</option>
      </select>

      <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-lg text-sm font-medium transition">
        Create Account
      </button>

      <p className="text-xs text-center text-gray-500">
        Are you a restaurant?{" "}
        <Link to="/partner/signup" className="text-red-500 font-medium">
          Partner with us
        </Link>
      </p>
    </form>
  );
};

export default Signup;
