

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
    <section className="h-screen flex items-center justify-center bg-orange-50 px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-2xl font-bold text-center text-red-500 mb-6">
          Forgot Password
        </h2>

        {error && (
          <p className="text-sm text-red-500 text-center mb-4">{error}</p>
        )}

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
        {step === 2 && (
          <form onSubmit={updatePassword} className="space-y-5">

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
