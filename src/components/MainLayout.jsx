// MainLayout.jsx (For pages with Sidebar like Dashboard, Students, etc.)
import React from 'react';
import Sidebar from './Sidebar';  // Sidebar component
import { Outlet } from 'react-router-dom';  // Used to render child routes
import { Box } from '@mui/material';  // Box component from MUI for styling

const MainLayout = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}> {/* Flex layout for sidebar and content */}
      
      {/* Sidebar section */}
      <Sidebar />
      
      {/* Content area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1, 
          padding: '20px', 
          marginLeft: '250px',  // Adjust the margin to make space for the sidebar
          overflowY: 'auto',  // Allows vertical scrolling if content is long
          backgroundColor: '#f4f6f9',  // Light background color for content area
          minHeight: '100vh',  // Ensure content area takes full height of the viewport
        }}
      >
        <Outlet /> {/* This is where child routes (Dashboard, Students, Courses, etc.) are rendered */}
      </Box>
    </div>
  );
};

export default MainLayout;
