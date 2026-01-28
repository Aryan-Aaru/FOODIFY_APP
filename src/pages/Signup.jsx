
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({
    profile: null,
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [preview, setPreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.name || !data.email || !data.password || !data.phone || !data.address) {
      setError("All fields are required");
      return;
    }

    localStorage.setItem("user", JSON.stringify(data));
    alert("Signup Successful");
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

        <div className="flex justify-center mt-4">
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
        </div>
        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 rounded focus:outline-[#ef4444]"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded focus:outline-[#ef4444]"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        {/* Phone */}
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border p-2 rounded focus:outline-[#ef4444]"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />

        {/* Address */}
        <input
          type="text"
          placeholder="Address"
          className="w-full border p-2 rounded focus:outline-[#ef4444]"
          value={data.address}
          onChange={(e) => setData({ ...data, address: e.target.value })}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded focus:outline-[#ef4444]"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        {/* Submit */}
        <button className="w-full bg-[#ef4444] hover:text-black text-white py-2 rounded mt-2">
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
