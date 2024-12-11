import React from 'react';
import { Card, CardContent, Typography, Grid, Paper, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout'; // Import logout icon
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Redirect to the login page
    navigate('/');
  };

  const courses = [
    { id: 459632, name: 'React Basics' },
    { id: 596458, name: 'JavaScript Advanced' },
    { id: 239856, name: 'Python for Data Science' },
  ];

  return (
    <div style={{ padding: '20px', position: 'relative' }}>
      {/* Small Logout Icon */}
     
      <IconButton
  onClick={handleLogout}
  style={{
    position: 'absolute',
    top: '5px',
    right: '5px',
    backgroundColor: '#f5f5f5',
    borderRadius: '50%',  // Changed to '50%' for a perfect circular shape
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    padding: '5px', // Reduces the clickable area for a smaller icon
  }}
  aria-label="logout"
>
  <LogoutIcon style={{ fontSize: '16px', color: '#333' }} />
</IconButton>


      <Typography variant="h3" gutterBottom>
        Welcome to the LMS Dashboard
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        Manage your courses, students, and reports here.
      </Typography>

      {/* Courses Section */}
      <div style={{ marginTop: '30px' }}>
        <Typography variant="h4" gutterBottom>
          Courses Overview
        </Typography>
        <Grid container spacing={3}>
          {courses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <Card
                style={{
                  backgroundColor: '#f5f5f5',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {course.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>ID:</strong> {course.id}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      {/* Additional Sections */}
      <div style={{ marginTop: '40px' }}>
        <Typography variant="h4" gutterBottom>
          Quick Actions
        </Typography>
        <Paper
          elevation={3}
          style={{
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: '#e3f2fd',
          }}
        >
          <Typography variant="body1" color="textPrimary">
            - View Student Reports<br />
            - Add New Courses<br />
            - Manage Enrollments
          </Typography>
        </Paper>
      </div>
    </div>
  );
};

export default Dashboard;
