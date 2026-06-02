import { useState } from "react";
import "../assets/Login.css";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = "https://workflow-management-system-o317.onrender.com";

  const handleLogin = () => {

    console.log("Login clicked");

    setLoading(true);

    axios.post(
      `${API_URL}/auth/login`,
      {
        email,
        password
      }
    )
    .then((res) => {

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "role",
        res.data.role
      );

      alert("Login Success");

      window.location.reload();

    })
    .catch((err) => {

      console.log("Login Error:", err);
      console.log("Status:", err.response?.status);
      console.log("Data:", err.response?.data);

      alert("Invalid Email or Password");

    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h1>Workflow Login</h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </div>

    </div>
  );
}

export default Login;