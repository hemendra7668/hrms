import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/authcontext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const response = await axios.post(
        "https://hrms-backend-6624.onrender.com/auth/login",
        { email, password },
        { withCredentials: true }
      );
      if (response.data.success) {
        login(response.data.user);
        localStorage.setItem("token", response.data.token);
        if (response.data.user.role === "admin") {
          navigate("/Admin-dashboard");
        } else {
          navigate("/Employee-dashboard");
        }
      }
    } catch (error) {
      console.log("Error occurred:", error);
      if (error.response && error.response.data) {
        setError(error.response.data.error || "Login failed.");
      } else {
        setError("Network error.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-200 to-blue-100">
      <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          HR Management System
        </h1>

        <h2 className="text-xl font-semibold text-center mb-4 text-gray-700">
          Login to your account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-600 font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              required
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 font-medium">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-2 mt-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          No Account?{" "}
          <Link
            to="/RegistrationForm"
            className="text-green-600 font-semibold hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
