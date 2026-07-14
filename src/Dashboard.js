import { useNavigate, useLocation } from "react-router-dom";
import "./App.css";

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const userName =
    location.state?.name ||
    localStorage.getItem("studentName") ||
    "Student";

  const handleLogout = () => {
    localStorage.removeItem("quizUser");
    localStorage.removeItem("studentName");
    navigate("/");
  };

  return (
    <div className="container">
      <div className="dashboard-card">

        <h1>🎯 Smart Online Quiz Application</h1>

        <p>
          Welcome, <strong>{userName}</strong> 👋
        </p>

        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "red",
            marginBottom: "20px"
          }}
        >
          Logout
        </button>

        <h2>Select a Quiz Category</h2>

        <div className="quiz-grid">

          <div
            className="quiz-item"
            onClick={() =>
              navigate("/quiz", {
                state: { category: "java" }
              })
            }
          >
            <h3>☕ Java Quiz</h3>
            <p>Test your Java programming knowledge.</p>
          </div>

          <div
            className="quiz-item"
            onClick={() =>
              navigate("/quiz", {
                state: { category: "python" }
              })
            }
          >
            <h3>🐍 Python Quiz</h3>
            <p>Improve your Python skills.</p>
          </div>

          <div
            className="quiz-item"
            onClick={() =>
              navigate("/quiz", {
                state: { category: "c" }
              })
            }
          >
            <h3>💻 C Programming Quiz</h3>
            <p>Practice C programming concepts.</p>
          </div>

          <div
            className="quiz-item"
            onClick={() =>
              navigate("/quiz", {
                state: { category: "gk" }
              })
            }
          >
            <h3>🌍 General Knowledge Quiz</h3>
            <p>Challenge yourself with GK questions.</p>
          </div>

        </div>

        <br />

        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            padding: "15px",
            borderRadius: "10px"
          }}
        >
          <h3>📋 Quiz Rules</h3>

          <p>✅ Total Questions: 5</p>
          <p>✅ Time Limit: 5 Minutes</p>
          <p>✅ Each Question Carries 1 Mark</p>
          <p>✅ No Negative Marking</p>
        </div>

        <br />

        <p>
          © 2026 Online Quiz Application | Developed by Gobika Nagarajan
        </p>

      </div>
    </div>
  );
}

export default Dashboard;