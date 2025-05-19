import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import QuestionCard from './QuestionCard';
import QuizCard from '../Components/QuizCard';
import './Styles/QuizPage.css';


const QuizPage = () => {

    const navigate = useNavigate();

  // Sample questions
  const questions = [
  {
    question: "What's your ideal vacation spot?",
    options: ["Mountains", "Beach", "City", "Countryside"],
    correctAnswer: 1,
  },
  {
    question: "Which genre do you prefer?",
    options: ["Rock", "Pop", "Classical", "Jazz"],
    correctAnswer: 2,
  },
  {
    question: "What time of day are you most productive?",
    options: ["Morning", "Afternoon", "Evening", "Night"],
    correctAnswer: 0,
  },
  {
    question: "What's your favorite type of pet?",
    options: ["Dog", "Cat", "Bird", "Fish"],
    correctAnswer: 0,
  },
  {
    question: "Pick a color that suits your vibe:",
    options: ["Blue", "Red", "Green", "Black"],
    correctAnswer: 2,
  },
  {
    question: "Which activity would you enjoy the most on a weekend?",
    options: ["Reading a book", "Attending a concert", "Going for a hike", "Binge-watching shows"],
    correctAnswer: 3,
  },
  {
    question: "What's your go-to comfort food?",
    options: ["Pizza", "Ice Cream", "Biryani", "Pasta"],
    correctAnswer: 0,
  },
  {
    question: "Which personality trait describes you best?",
    options: ["Adventurous", "Creative", "Calm", "Witty"],
    correctAnswer: 1,
  },
  {
    question: "Choose a superpower:",
    options: ["Invisibility", "Flying", "Mind Reading", "Time Travel"],
    correctAnswer: 3,
  },
  {
    question: "Which social setting do you prefer?",
    options: ["Party with friends", "Small group hangout", "One-on-one chat", "Solo time"],
    correctAnswer: 1,
  }
];


  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // 2 minutes = 120 seconds

  // Timer countdown
  useEffect(() => {
    if (timeLeft === 0) {
      handleSubmit();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  // Handle option select
  const handleOptionChange = (questionIndex, optionIndex) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  };

  // Handle submission
  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q, idx) => {
      if (selectedOptions[idx] === q.correctAnswer) {
        newScore++;
      }
    });

    navigate('/quiz/result', {
      state: {
        score: newScore,
        total: questions.length,
      },
    });
  };

  // Format time mm:ss
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' + s : s}`;
  };

  return (
    // <div className="quiz-container">
    //   <h1 className="quiz-heading">🧠 Vibe Check Quiz</h1>
    //   <div className="quiz-meta">
    //     <p className="quiz-timer">⏳ Time Left: {formatTime(timeLeft)}</p>
    //     <button className="submit-button" onClick={handleSubmit}>Submit</button>
    //   </div>

    //   {questions.map((q, index) => (
    //     <div className="question-card" key={index}>
    //       <h2 className="question-text">{index + 1}. {q.question}</h2>
    //       <ul className="options-list">
    //         {q.options.map((option, optionIndex) => (
    //           <li key={optionIndex}>
    //             <label>
    //               <input
    //                 type="radio"
    //                 name={`question-${index}`}
    //                 value={optionIndex}
    //                 checked={selectedOptions[index] === optionIndex}
    //                 onChange={() => handleOptionChange(index, optionIndex)}
    //               />
    //               {option}
    //             </label>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   ))}
    // </div>
    <div className="quiz-container">
  <div className="quiz-header">
    <h1 className="quiz-heading">🧠 Vibe Check Quiz</h1>
    <div className="quiz-meta">
      <p className="quiz-timer">⏳ Time Left: {formatTime(timeLeft)}</p>
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  </div>

  <div className="quiz-scroll-area">
    {questions.map((q, index) => (
      <div className="question-card" key={index}>
        <h2 className="question-text">{index + 1}. {q.question}</h2>
        <ul className="options-list">
          {q.options.map((option, optionIndex) => (
            <li key={optionIndex}>
              <label>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={optionIndex}
                  checked={selectedOptions[index] === optionIndex}
                  onChange={() => handleOptionChange(index, optionIndex)}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>
  );

}

export default QuizPage