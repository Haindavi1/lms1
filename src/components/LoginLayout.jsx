// LoginLayout.jsx (For login page without Sidebar)
import React from 'react';
import { Outlet } from 'react-router-dom';  // Used to render the login component

const LoginLayout = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Outlet /> {/* Only the Login component will be rendered here */}
    </div>
  );
};

export default LoginLayout;