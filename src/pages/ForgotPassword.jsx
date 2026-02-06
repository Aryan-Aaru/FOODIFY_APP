// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { emailVerify, passwordUpdate } from "../apis/UserApi";
// const ForgotPassword = () => {
//   const navigate = useNavigate();

//   const [step, setStep] = useState(1);
//   const [email, setEmail] = useState("");
//   const [passwords, setPasswords] = useState({
//     newPassword: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState("");

//   const checkEmail = () => {
//     emailVerify(email)
//       .then((res) => {
//         if(res.message === "Email Verified Successfull"){
//           setStep(2);
//         }
//         else{
//           alert(`${res.message}`);
//         }
//       })
//       .catch((err) => {
//         if(err.message === "User Not Found"){
//           navigate('/signup')
//         }
//         else{
//           alert(`${err.message}`)
//         }
//       })

    
//   };

//   const updatePassword = () => {
//     if (
//       passwords.newPassword !== passwords.confirmPassword
//     ) {
//       setError("Passwords do not match");
//       return;
//     }

//     passwordUpdate({
//       "email" : email,
//       "password" : passwords.newPassword,
//       "confirm_password" : passwords.confirmPassword
//     })
//       .then((res) => {
//         if(res.message === "Password Updated Successfull"){
//           alert("Password Updated");
//           navigate('/login');
//         }
//         else{
//           alert(`${res.message}`)
//         }
//       })
//       .catch((err) => {
//         if(err.message === "Password & confirm password not match"){
//           alert("Password & Confirm Password Not Match");
          
//         }
//         else{
//           alert(`${err.message}`)
//         }
//       })

//     // const updatedUser = {
//     //   ...storedUser,
//     //   password: passwords.newPassword,
//     // };

//     // localStorage.setItem("user", JSON.stringify(updatedUser));
//     // alert("Password updated successfully");
//     // navigate("/login");
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-[#fef2f2]">
//       <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center text-[#ef4444] mb-4">
//           Forgot Password
//         </h2>

//         {error && <p className="text-red-500 text-center mb-3">{error}</p>}

//         {step === 1 && (
//           <>
//             <input
//               type="email"
//               placeholder="Enter registered email"
//               className="w-full border focus:outline-[#ef4444] p-2 mb-4 rounded"
//               value={email}
//               required
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <button
//               onClick={checkEmail}
//               className="w-full bg-[#ef4444] cursor-pointer hover:text-black text-white py-2 rounded"
//             >
//               Verify Email
//             </button>
//           </>
//         )}

//         {step === 2 && (
//           <>
//             <input
//               type="password"
//               placeholder="New Password"
//               className="w-full border p-2 mb-3 rounded"
//               required
//               onChange={(e) =>
//                 setPasswords({ ...passwords, newPassword: e.target.value })
//               }
//             />

//             <input
//               type="password"
//               placeholder="Confirm New Password"
//               className="w-full border p-2 mb-4 rounded"
//               required
//               onChange={(e) =>
//                 setPasswords({
//                   ...passwords,
//                   confirmPassword: e.target.value,
//                 })
//               }
//             />

//             <button
//               onClick={updatePassword}
//               className="w-full bg-[#ef4444] text-white py-2 rounded"
//             >
//               Update Password
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;


import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { emailVerify, passwordUpdate } from "../apis/UserApi";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [showPass, setShowPass] = useState(false);

  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  /* ================= VERIFY EMAIL ================= */
  const checkEmail = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await emailVerify(email);

      if (res.message === "Email Verified Successfull") {
        setStep(2);
      } else {
        setError(res.message);
      }
    } catch (err) {
      if (err.message === "User Not Found") navigate("/signup");
      else setError(err.message);
    }
  };

  /* ================= UPDATE PASSWORD ================= */
  const updatePassword = async (e) => {
    e.preventDefault();
    setError("");

    if (passwords.newPassword !== passwords.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await passwordUpdate({
        email,
        password: passwords.newPassword,
        confirm_password: passwords.confirmPassword,
      });

      if (res.message === "Password Updated Successfull") {
        alert("Password Updated");
        navigate("/login");
      } else {
        setError(res.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    /* PERFECT CENTER FIX */
    <section className="h-screen flex items-center justify-center bg-orange-50 px-4">

      {/* CARD */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-2xl font-bold text-center text-red-500 mb-6">
          Forgot Password
        </h2>

        {error && (
          <p className="text-sm text-red-500 text-center mb-4">{error}</p>
        )}

        {/* ================= STEP 1 ================= */}
        {step === 1 && (
          <form onSubmit={checkEmail} className="space-y-5">

            <input
              type="email"
              placeholder="Enter registered email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-red-400 focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-red-500 cursor-pointer hover:bg-red-600 text-white py-3 rounded-lg font-semibold"
            >
              Verify Email
            </button>
          </form>
        )}

        {/* ================= STEP 2 ================= */}
        {step === 2 && (
          <form onSubmit={updatePassword} className="space-y-5">

            {/* New password with eye */}
            <div className="relative ">
              <input
                type={showPass ? "text" : "password"}
                placeholder="New Password"
                required
                value={passwords.newPassword}
                onChange={(e) =>
                  setPasswords({ ...passwords, newPassword: e.target.value })
                }
                className="w-full outline rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-red-400 focus:outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-4 text-gray-500"
              >
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <input
              type={showPass ? "text" : "password"}
              placeholder="Confirm New Password"
              required
              value={passwords.confirmPassword}
              onChange={(e) =>
                setPasswords({
                  ...passwords,
                  confirmPassword: e.target.value,
                })
              }
              className="w-full outline rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-red-400 focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-red-500 cursor-pointer hover:bg-red-600 text-white py-3 rounded-lg font-semibold"
            >
              Update Password
            </button>
          </form>
        )}

        <p className="text-center text-sm mt-6 text-gray-500">
          Back to{" "}
          <Link to="/login" className="text-red-500 font-medium">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default ForgotPassword;
