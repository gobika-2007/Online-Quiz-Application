import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score || 0;
  const total = location.state?.total || 5;
  const category = location.state?.category || "Quiz";

  const studentName =
    localStorage.getItem("studentName") || "Student";

  const wrong = total - score;
  const percentage = ((score / total) * 100).toFixed(0);

  let grade = "";
  let performance = "";

  if (percentage >= 90) {
    grade = "A+";
    performance = "🏆 Outstanding!";
  } else if (percentage >= 80) {
    grade = "A";
    performance = "⭐ Excellent!";
  } else if (percentage >= 70) {
    grade = "B";
    performance = "👍 Good Job!";
  } else if (percentage >= 60) {
    grade = "C";
    performance = "🙂 Keep Practicing!";
  } else {
    grade = "D";
    performance = "📚 Needs Improvement!";
  }

  const today = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  const leaderboard =
    JSON.parse(localStorage.getItem("leaderboard")) || [];

  return (
    <div className="container">
      <div className="dashboard-card">

        <h1>🎉 Quiz Completed Successfully</h1>

        <h2>{performance}</h2>

        <hr />

        <h3>👤 Student Name : {studentName}</h3>
        <h3>📚 Quiz Category : {category.toUpperCase()}</h3>

        <hr />

        <h3>📝 Total Questions : {total}</h3>
        <h3>✅ Correct Answers : {score}</h3>
        <h3>❌ Wrong Answers : {wrong}</h3>
        <h3>📊 Percentage : {percentage}%</h3>
        <h3>🏅 Grade : {grade}</h3>

        <hr />

        <h3>📅 Date : {today}</h3>
        <h3>⏰ Time : {currentTime}</h3>

        <hr />

        {percentage >= 60 && (
          <>
            <h2>🏆 Certificate Earned!</h2>

            <button
              onClick={() =>
                alert(
                  "Certificate Awarded to " +
                    studentName
                )
              }
            >
              Download Certificate
            </button>

            <br /><br />
          </>
        )}

        <h2>🏆 Leaderboard</h2>

        {leaderboard.length === 0 ? (
          <p>No scores available</p>
        ) : (
          leaderboard.map((player, index) => (
            <p key={index}>
              {index + 1}. {player.name} - {player.score}
            </p>
          ))
        )}

        <br />

        <button
          onClick={() =>
            navigate("/quiz", {
              state: { category }
            })
          }
        >
          🔄 Retake Quiz
        </button>

        <br /><br />

        <button
          onClick={() => navigate("/dashboard")}
        >
          🏠 Back to Dashboard
        </button>

      </div>
    </div>
  );
}

export default Result;