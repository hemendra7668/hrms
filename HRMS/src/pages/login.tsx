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
        "http://localhost:3000/auth/login",
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
      if (error.response &&  error.response.data) {
        setError(error.response.data.error || "Login failed.");
      } else {
        setError("Network error.");
      }
    }
  };

  return (
    <>
      <div>
        <div className="bg bg-green-200"
          style={{
            maxWidth: 500,
            height: 500,
            margin: "80px auto",
            padding: 24,
            border: "1px solid #eee",
            borderRadius: 8,
          
          }}
        >
          <h2 className="text-center font-bold py-10">HR Management System</h2>
          <h2 className="text-center" >Login</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <br />
            <input className="border"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: 8, marginTop: 4 }}
              required
            />

            <label htmlFor="password">Password</label>
            <br />
            {/* <br /> */}
            <input className="border"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: 8, marginTop: 5 }}
              required
            />

            {error && (
              <div style={{ color: "red", marginBottom: 16 }}>{error}</div>
            )}

            <button
              type="submit" className=" border bg-green-400"
              style={{ width: "100%", padding: 10, margin: "10px" }}
            >
              Login
            </button>

            <Link to={"/RegistrationForm"}>No Account, Register yourself</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
