import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const storedUser = JSON.parse(localStorage.getItem("user"));

  const checkEmail = () => {
    if (!storedUser || storedUser.email !== email) {
      setError("Email not found");
      return;
    }
    setError("");
    setStep(2);
  };

  const updatePassword = () => {
    if (
      !passwords.newPassword ||
      passwords.newPassword !== passwords.confirmPassword
    ) {
      setError("Passwords do not match");
      return;
    }

    const updatedUser = {
      ...storedUser,
      password: passwords.newPassword,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("Password updated successfully");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-orange-50">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-orange-500 mb-4">
          Forgot Password
        </h2>

        {error && <p className="text-red-500 text-center mb-3">{error}</p>}

        {step === 1 && (
          <>
            <input
              type="email"
              placeholder="Enter registered email"
              className="w-full border p-2 mb-4 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={checkEmail}
              className="w-full bg-orange-500 text-white py-2 rounded"
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
              onChange={(e) =>
                setPasswords({ ...passwords, newPassword: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full border p-2 mb-4 rounded"
              onChange={(e) =>
                setPasswords({
                  ...passwords,
                  confirmPassword: e.target.value,
                })
              }
            />

            <button
              onClick={updatePassword}
              className="w-full bg-orange-500 text-white py-2 rounded"
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
