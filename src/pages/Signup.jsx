
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import { signUp } from "../apis/UserApi";

// const Signup = () => {
//   const [data, setData] = useState({
//     // profile: null,
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     password: "",
//     role: "customer"
//   });
//   const [error, setError] = useState("");
//   const [preview, setPreview] = useState(null);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setData({
//       ...data,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // localStorage.setItem("user", JSON.stringify(data));
//     // alert("Signup Successful");
//     // navigate('/login');

//     signUp(data)
//       .then((res) => {
//         console.log(res+" success");
//         navigate('/login');
//       })
//       .catch((err) => {
//         console.log(err+" error");
//         alert(`${err.message}`)
//       })
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setData({ ...data, profile: file });
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <div className=" bg-white w-full">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-xl shadow w-full max-w-md flex flex-col gap-4 relative"
//       >


//         {error && <p className="text-red-500 text-center">{error}</p>}

//         {/* <div className="flex justify-center mt-4">
//           <label className="w-13 h-13 border rounded-full overflow-hidden cursor-pointer">
//             {preview ? (
//               <img src={preview} alt="Profile" className="w-full h-full object-cover" />
//             ) : (
//               <div className="w-full h-full flex justify-center items-center text-gray-400 text-sm">
//                 Upload
//               </div>
//             )}
//             <input
//               type="file"
//               accept="image/*"
//               className="hidden"
//               onChange={handleFileChange}
//             />
//           </label>
//         </div> */}
//         {/* Name */}
//         <input
//           type="text"
//           placeholder="Full Name"
//           className="w-full border p-2 rounded focus:outline-[#ef4444]"
//           value={data.name}
//           required
//           onChange={(e) => setData({ ...data, name: e.target.value })}
//         />

//         {/* Email */}
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full border p-2 rounded focus:outline-[#ef4444]"
//           value={data.email}
//           required
//           onChange={(e) => setData({ ...data, email: e.target.value })}
//         />

//         {/* Phone */}
//         <input
//           type="tel"
//           placeholder="Phone Number"
//           className="w-full border p-2 rounded focus:outline-[#ef4444]"
//           value={data.phone}
//           required
//           onChange={(e) => setData({ ...data, phone: e.target.value })}
//         />

//         {/* Address */}
//         {/* <input
//           type="text"
//           placeholder="Address"
//           className="w-full border p-2 rounded focus:outline-[#ef4444]"
//           value={data.address}
//           onChange={(e) => setData({ ...data, address: e.target.value })}
//         /> */}

//         {/* Password */}
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full border p-2 rounded focus:outline-[#ef4444]"
//           value={data.password}
//           required
//           onChange={(e) => setData({ ...data, password: e.target.value })}
//         />

//          <select
//         name="role"
//         value={data.role}
//         onChange={handleChange}
//         required
//         className="p-2 outline"
//       >
//         <option value="customer">Customer</option>
//         <option value="owner">Owner</option>
//       </select>

//         {/* Submit */}
//         <button className="w-full bg-[#ef4444] hover:text-black cursor-pointer text-white py-2 rounded mt-2">
//           Create Account
//         </button>

//         <p className="mt-2 text-sm text-center">
//           Are you a restaurant?{" "}
//           <Link to="/partner/signup" className="text-[#ef4444] font-semibold">
//             Partner with us
//           </Link>
//         </p>

//         {/* Profile Picture at the bottom */}
        
//       </form>
//     </div>
//   );
// };

// export default Signup;


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
      {/* PROFILE PIC */}
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

      {/* INPUTS */}
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

      {/* PASSWORD WITH TOGGLE */}
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

      {/* SUBMIT */}
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
