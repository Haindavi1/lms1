import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
import Students from './components/Students';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './styles.css'; // Ensure global styles are included
import './components/Login.css'; // Specific styles for Login

const App = () => (
  <Router>
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/students" element={<Students />} />
        </Routes>
        <Footer />
      </div>
    </div>
  </Router>
);

// React 18 root rendering
const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure index.html contains <div id="root">
root.render(<App />);
