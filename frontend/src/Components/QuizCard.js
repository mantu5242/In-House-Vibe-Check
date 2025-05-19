import React from 'react'
import "./ComponentStyles/QuizCard.css";


const QuizCard = ({ question, index, selectedOption, onOptionSelect }) => {
  return (
    <div className="question-card">
      <h2 className="question">{index + 1}. {question.text}</h2>
      <ul className="options">
        {question.options.map((option, i) => (
          <li key={i}>
            <label className={`option-label ${selectedOption === i ? 'selected' : ''}`}>
              <input
                type="radio"
                name={`question-${index}`}
                value={i}
                checked={selectedOption === i}
                onChange={() => onOptionSelect(index, i)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuizCard