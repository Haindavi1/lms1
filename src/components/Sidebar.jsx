import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { List, ListItem, ListItemText, Divider, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';

const Sidebar = () => {
  const [open, setOpen] = useState(false); // Controls Dialog open state
  const navigate = useNavigate(); // React Router hook for programmatic navigation

  // Function to handle dialog open
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to handle dialog close
  const handleClose = () => {
    setOpen(false);
  };

  // Function to handle exam preparation confirmation
  const handlePrepareExam = () => {
    setOpen(false); // Close the dialog
    navigate('/exams'); // Redirect to the exams page
  };

  return (
    <aside className="sidebar">
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/courses">
          <ListItemText primary="Courses" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/students">
          <ListItemText primary="Students" />
        </ListItem>
        <Divider />
        
        {/* Exam Link with Dialog */}
        <ListItem button onClick={handleClickOpen}>
          <ListItemText primary="Exams" />
        </ListItem>
        
      </List>

      {/* Confirmation Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Prepare for Exam</DialogTitle>
        <DialogContent>
          Are you ready to prepare for the exam?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handlePrepareExam} color="primary">
            Yes, Prepare
          </Button>
        </DialogActions>
      </Dialog>
    </aside>
  );
};

export default Sidebar;
