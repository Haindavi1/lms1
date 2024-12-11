import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar'; // Your Sidebar component
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  // Check if the current route is '/login'
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="app-container">
      {/* Only render Sidebar if not on the Login page */}
      {!isLoginPage && <Sidebar />}
      
      <div className="content">
        <Outlet /> {/* Render the matched route's component */}
      </div>
    </div>
  );
};

export default Layout;