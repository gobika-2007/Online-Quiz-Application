import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const savedUser = JSON.parse(
      localStorage.getItem("quizUser")
    );

    if (
      savedUser &&
      username === savedUser.username &&
      password === savedUser.password
    ) {
      navigate("/dashboard", {
        state: {
          name: savedUser.name
        }
      });
      localStorage.setItem("studentName", savedUser.name);

navigate("/dashboard", {
  state: {
    name: savedUser.name
  }
});
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="container">
      <div className="login-card">
        <h1>🎯 Online Quiz Application</h1>

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

        <button onClick={handleLogin}>
          Login
        </button>

        <p>
          Don't have an account?
          <span
            style={{
              color: "yellow",
              cursor: "pointer"
            }}
            onClick={() => navigate("/register")}
          >
            {" "}Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;