import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const user = {
      name,
      username,
      password
    };

    localStorage.setItem("quizUser", JSON.stringify(user));

    alert("Registration Successful!");

    navigate("/");
  };

  return (
    <div className="container">
      <div className="login-card">
        <h1>📝 Sign Up</h1>

        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;