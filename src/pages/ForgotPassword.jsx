import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { emailVerify, passwordUpdate } from "../apis/UserApi";
const ForgotPassword = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const checkEmail = () => {
    emailVerify(email)
      .then((res) => {
        if(res.message === "Email Verified Successfull"){
          setStep(2);
        }
        else{
          alert(`${res.message}`);
        }
      })
      .catch((err) => {
        if(err.message === "User Not Found"){
          navigate('/signup')
        }
        else{
          alert(`${err.message}`)
        }
      })

    
  };

  const updatePassword = () => {
    if (
      passwords.newPassword !== passwords.confirmPassword
    ) {
      setError("Passwords do not match");
      return;
    }

    passwordUpdate({
      "email" : email,
      "password" : passwords.newPassword,
      "confirm_password" : passwords.confirmPassword
    })
      .then((res) => {
        if(res.message === "Password Updated Successfull"){
          alert("Password Updated");
          navigate('/login');
        }
        else{
          alert(`${res.message}`)
        }
      })
      .catch((err) => {
        if(err.message === "Password & confirm password not match"){
          alert("Password & Confirm Password Not Match");
          
        }
        else{
          alert(`${err.message}`)
        }
      })

    // const updatedUser = {
    //   ...storedUser,
    //   password: passwords.newPassword,
    // };

    // localStorage.setItem("user", JSON.stringify(updatedUser));
    // alert("Password updated successfully");
    // navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#fef2f2]">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#ef4444] mb-4">
          Forgot Password
        </h2>

        {error && <p className="text-red-500 text-center mb-3">{error}</p>}

        {step === 1 && (
          <>
            <input
              type="email"
              placeholder="Enter registered email"
              className="w-full border focus:outline-[#ef4444] p-2 mb-4 rounded"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={checkEmail}
              className="w-full bg-[#ef4444] cursor-pointer hover:text-black text-white py-2 rounded"
            >
              Verify Email
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="password"
              placeholder="New Password"
              className="w-full border p-2 mb-3 rounded"
              required
              onChange={(e) =>
                setPasswords({ ...passwords, newPassword: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full border p-2 mb-4 rounded"
              required
              onChange={(e) =>
                setPasswords({
                  ...passwords,
                  confirmPassword: e.target.value,
                })
              }
            />

            <button
              onClick={updatePassword}
              className="w-full bg-[#ef4444] text-white py-2 rounded"
            >
              Update Password
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
