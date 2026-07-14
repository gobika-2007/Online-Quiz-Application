import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./App.css";

function Quiz() {
  const navigate = useNavigate();
  const location = useLocation();

  const category = location.state?.category || "java";

  const javaQuestions = [
    {
      question: "Who developed Java?",
      options: ["Microsoft", "Sun Microsystems", "Google", "IBM"],
      answer: "Sun Microsystems"
    },
    {
      question: "Java is a?",
      options: ["Language", "Database", "Browser", "OS"],
      answer: "Language"
    },
    {
      question: "Which keyword creates an object?",
      options: ["create", "new", "object", "make"],
      answer: "new"
    },
    {
      question: "Java is platform?",
      options: ["Dependent", "Independent", "Browser", "OS"],
      answer: "Independent"
    },
    {
      question: "Java file extension?",
      options: [".java", ".js", ".py", ".c"],
      answer: ".java"
    }
  ];

  const pythonQuestions = [
    {
      question: "Who created Python?",
      options: ["Dennis Ritchie", "Guido van Rossum", "James Gosling", "Bill Gates"],
      answer: "Guido van Rossum"
    },
    {
      question: "Python is a?",
      options: ["Language", "Database", "OS", "Browser"],
      answer: "Language"
    },
    {
      question: "Python file extension?",
      options: [".java", ".py", ".c", ".html"],
      answer: ".py"
    },
    {
      question: "Which function prints output?",
      options: ["show()", "print()", "display()", "echo()"],
      answer: "print()"
    },
    {
      question: "Python supports OOP?",
      options: ["Yes", "No", "Sometimes", "Unknown"],
      answer: "Yes"
    }
  ];

  const cQuestions = [
    {
      question: "Father of C?",
      options: ["Dennis Ritchie", "James Gosling", "Guido", "Bjarne"],
      answer: "Dennis Ritchie"
    },
    {
      question: "C is a?",
      options: ["Language", "Database", "OS", "Browser"],
      answer: "Language"
    },
    {
      question: "Header file for printf?",
      options: ["stdio.h", "math.h", "conio.h", "string.h"],
      answer: "stdio.h"
    },
    {
      question: "C uses which symbol for comments?",
      options: ["//", "#", "--", "**"],
      answer: "//"
    },
    {
      question: "Main function starts with?",
      options: ["start()", "main()", "begin()", "run()"],
      answer: "main()"
    }
  ];

  const gkQuestions = [
    {
      question: "Capital of India?",
      options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
      answer: "Delhi"
    },
    {
      question: "National Animal of India?",
      options: ["Tiger", "Lion", "Elephant", "Horse"],
      answer: "Tiger"
    },
    {
      question: "Largest planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Jupiter"
    },
    {
      question: "How many continents?",
      options: ["5", "6", "7", "8"],
      answer: "7"
    },
    {
      question: "National Bird of India?",
      options: ["Peacock", "Parrot", "Crow", "Eagle"],
      answer: "Peacock"
    }
  ];

  let questions = javaQuestions;

  if (category === "python") {
    questions = pythonQuestions;
  } else if (category === "c") {
    questions = cQuestions;
  } else if (category === "gk") {
    questions = gkQuestions;
  }

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          submitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswer = (option) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = option;
    setSelectedAnswers(newAnswers);
  };

  const submitQuiz = () => {
    let score = 0;

    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        score++;
      }
    });

    navigate("/result", {
      state: {
        score,
        total: questions.length,
        category
      }
    });
  };

  return (
    <div className="container">
      <div className="dashboard-card">

        <h1 style={{ color: "yellow" }}>
          ⏰ {Math.floor(timeLeft / 60)}:
          {(timeLeft % 60).toString().padStart(2, "0")}
        </h1>

        <h2>{category.toUpperCase()} QUIZ</h2>

        <h3>
          Question {currentQuestion + 1} of {questions.length}
        </h3>

        <h2>{questions[currentQuestion].question}</h2>

        {questions[currentQuestion].options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              name="answer"
              checked={selectedAnswers[currentQuestion] === option}
              onChange={() => handleAnswer(option)}
            />
            {option}
          </div>
        ))}

        <br />

        {currentQuestion < questions.length - 1 ? (
          <button
            onClick={() =>
              setCurrentQuestion(currentQuestion + 1)
            }
          >
            Next Question
          </button>
        ) : (
          <button onClick={submitQuiz}>
            Submit Quiz
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;