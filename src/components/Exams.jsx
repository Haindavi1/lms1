// src/Exams.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Exams = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [isPreparing, setIsPreparing] = useState(false);

  const handlePrepareExam = () => {
    setIsPreparing(true); // Show question form when exam is prepared
  };

  const handleEnterQuestions = () => {
    navigate('/enter-questions'); // Navigate to the 'Enter Questions' route
  };

  return (
    <div>
      <h1>Exams</h1>
      
      {!isPreparing ? (
        <div>
          <h2>Prepare Exam</h2>
          <button onClick={handlePrepareExam}>Prepare Exam</button>
        </div>
      ) : (
        <div>
          <h2>Enter Questions</h2>
          <button onClick={handleEnterQuestions}>Enter Questions</button> {/* This button should trigger navigation */}
        </div>
      )}
    </div>
  );
};

export default Exams;
