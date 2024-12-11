// src/EnterQuestions.js
import React, { useState } from 'react';

const EnterQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState('');

  const handleAddQuestion = () => {
    if (questionText.trim() !== '') {
      setQuestions([...questions, questionText]);
      setQuestionText('');
    }
  };

  return (
    <div>
      <h1>Enter Questions</h1>
      <div>
        <textarea
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          placeholder="Enter a question"
          rows="4"
          cols="50"
        ></textarea>
      </div>
      <button onClick={handleAddQuestion}>Add Question</button>

      <h2>Added Questions:</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </div>
  );
};

export default EnterQuestions;
