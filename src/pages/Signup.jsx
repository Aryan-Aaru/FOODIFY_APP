
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { signUp } from "../apis/UserApi";

const Signup = () => {
  const [data, setData] = useState({
    // profile: null,
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    role: "customer"
  });
  const [error, setError] = useState("");
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // localStorage.setItem("user", JSON.stringify(data));
    // alert("Signup Successful");
    // navigate('/login');

    signUp(data)
      .then((res) => {
        console.log(res+" success");
        navigate('/login');
      })
      .catch((err) => {
        console.log(err+" error");
        alert(`${err.message}`)
      })
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setData({ ...data, profile: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className=" bg-white w-full">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow w-full max-w-md flex flex-col gap-4 relative"
      >


        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* <div className="flex justify-center mt-4">
          <label className="w-13 h-13 border rounded-full overflow-hidden cursor-pointer">
            {preview ? (
              <img src={preview} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex justify-center items-center text-gray-400 text-sm">
                Upload
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div> */}
        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 rounded focus:outline-[#ef4444]"
          value={data.name}
          required
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded focus:outline-[#ef4444]"
          value={data.email}
          required
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        {/* Phone */}
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border p-2 rounded focus:outline-[#ef4444]"
          value={data.phone}
          required
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />

        {/* Address */}
        {/* <input
          type="text"
          placeholder="Address"
          className="w-full border p-2 rounded focus:outline-[#ef4444]"
          value={data.address}
          onChange={(e) => setData({ ...data, address: e.target.value })}
        /> */}

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded focus:outline-[#ef4444]"
          value={data.password}
          required
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

         <select
        name="role"
        value={data.role}
        onChange={handleChange}
        required
        className="p-2 outline"
      >
        <option value="customer">Customer</option>
        <option value="owner">Owner</option>
      </select>

        {/* Submit */}
        <button className="w-full bg-[#ef4444] hover:text-black cursor-pointer text-white py-2 rounded mt-2">
          Create Account
        </button>

        <p className="mt-2 text-sm text-center">
          Are you a restaurant?{" "}
          <Link to="/partner/signup" className="text-[#ef4444] font-semibold">
            Partner with us
          </Link>
        </p>

        {/* Profile Picture at the bottom */}
        
      </form>
    </div>
  );
};

export default Signup;
