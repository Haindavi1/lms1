import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false); // Track whether user is on login or signup form
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Define multiple user credentials with roles (admin, student)
    const users = [
      { email: 'admin@gmail.com', password: 'password', role: 'admin' },
      { email: 'user@example.com', password: 'userpass', role: 'student' }, // New student credentials
    ];

    // Check if the entered email and password match any of the predefined users
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      if (user.role === 'admin') {
        navigate('/admin-dashboard'); // Redirect to Admin Dashboard
      } else if (user.role === 'student') {
        navigate('/student-dashboard'); // Redirect to Student Dashboard
      }
    } else {
      alert('Invalid login credentials');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Replace with actual signup logic (e.g., create a new user in the database)
    alert('Signup successful! You can now log in.');
    setIsSignup(false); // After signup, switch to the login form
  };

  return (
    <div className="login-container">
      {/* Top-right corner Sign Up link */}
      {!isSignup && (
        <div className="top-right-signup">
          <span
            className="toggle-link"
            onClick={() => setIsSignup(true)} // Switch to signup form
          >
            Sign Up
          </span>
        </div>
      )}

      <form
        className="login-form"
        onSubmit={isSignup ? handleSignup : handleLogin}
      >
        <h2>{isSignup ? 'Signup' : 'Login'}</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>

        {isSignup && (
          <div className="form-footer">
            <p>
              Already have an account?{' '}
              <span
                className="toggle-link"
                onClick={() => setIsSignup(false)} // Switch to login form
              >
                Login here
              </span>
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
