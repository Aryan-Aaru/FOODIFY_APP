// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Loginapi } from "../apis/UserApi";
// const Login = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState({ email: "aqueeb@gmail.com", password: "1234" });
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     Loginapi(
//       {
//         "email" : data.email,
//         "password" : data.password
//       }
//     )
//     .then((res) => {
//       console.log(res);
//       if(res.data.role === "owner"){
//         navigate('/admin');
//       }
//       else if(res.data.role === "customer"){
//         navigate('/home')
//       }else{
//         alert("Some thing went wrong");
//       }
//     })

//     .catch((err) => {
//       if(`${err.message}` === "User Not Found"){
//         navigate('/signup')
//       }
//       else{
//         alert(`${err.message}`)
//       }
      
//     })

//     // const storedUser = JSON.parse(localStorage.getItem("user"));

//     // if (
//     //   !storedUser ||
//     //   storedUser.email !== data.email 
//     // ) {
//     //   navigate('/signup');
//     //   return;
//     // }
//     // else if(storedUser.password !== data.password){
//     //   setError("Invalid email or password");
//     //   return;
//     // }
//     // else if(storedUser.role === "owner"){
//     //   alert("Login successful");
//     //   navigate("/admin");
//     // }
//     // else{
//     //   alert("Login successful");
//     //   navigate("/home");
//     // }

    
//   };

//   return (
//     <div className=" w-full bg-orange-50">
//       <form onSubmit={handleSubmit} className="bg-white p-8 shadow">
//         {/* <h2 className="text-2xl font-bold mb-4 text-orange-500">User Login</h2> */}

//         {error && <p className="text-red-500 mb-2">{error}</p>}

//         <label htmlFor="email" className="font-bold">
//           Email
//         </label>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           required
//           className="w-full border p-2 mb-3 focus:outline-[#ef4444]"
//           onChange={(e) => setData({ ...data, email: e.target.value })}
//         />

//         <label htmlFor="password" className="font-bold">
//           Password
//         </label>
//         <input
//           type="password"
//           name="password"
//           required
//           placeholder="Password"
//           className="w-full border p-2 mb-3 focus:outline-[#ef4444]"
//           onChange={(e) => setData({ ...data, password: e.target.value })}
//         />

//         {/* <div className="text-right text-[#ef4444]">
//           Forgot Password?
    
//         </div> */}
//         <Link
//           to="/forgot-password"
//           className="block text-right text-sm text-[#ef4444] mb-3"
//         >
//           Forgot Password?
//         </Link>

//         <br />
//         <button className="w-full cursor-pointer hover:text-black  bg-[#ef4444] text-white py-2 rounded-xl">
//           Login
//         </button>

//         <p className="mt-4 text-sm text-center">
//           Don’t have an account?{" "}
//           <Link to="/signup" className="text-[#ef4444] font-semibold">
//             Sign up
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;

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

