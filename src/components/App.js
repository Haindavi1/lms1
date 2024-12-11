// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import LoginLayout from './LoginLayout';
import Login from './Login';
import Dashboard from './Dashboard';
import Students from './Students';
import Courses from './Courses';
import CourseDetails from './CourseDetails';
import Exams from './Exams';
import EnterQuestions from './EnterQuestions';
import StudentDashboard from './StudentDashboard.jsx'; // Ensure this path is correct
import PaymentPage from './PaymentPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main layout routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetails />} />
          <Route path="exams" element={<Exams />} />
          <Route path="enter-questions" element={<EnterQuestions />} />
          <Route path="http://localhost:3006/studentdashboard" element={<StudentDashboard />} /> {/* Student dashboard route */}
          <Route path="payment" element={<PaymentPage />} />
        </Route>

        {/* Login layout route */}
        <Route path="/login" element={<LoginLayout />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
