import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Students = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Haindavi', email: 'haindavi@example.com', paidFees: false, paidAmount: 0 },
    { id: 2, name: 'Prasamsa', email: 'prasamsa@example.com', paidFees: true, paidAmount: 500 },
  ]);

  const addStudent = () => {
    const name = prompt('Enter student name:');
    const email = prompt('Enter student email:');

    if (name && email) {
      const newStudent = {
        id: students.length + 1,
        name: name,
        email: email,
        paidFees: false, // Default to false when adding a new student
        paidAmount: 0,   // Default to 0 when adding a new student
      };
      setStudents([...students, newStudent]);
    } else {
      alert('Both name and email are required');
    }
  };

  const updateStudent = (id) => {
    const studentToUpdate = students.find(student => student.id === id);

    const updatedName = prompt('Update student name:', studentToUpdate.name);
    const updatedEmail = prompt('Update student email:', studentToUpdate.email);
    const updatedPaidFees = prompt('Has the student paid fees? (yes/no):', studentToUpdate.paidFees ? 'yes' : 'no');

    const paidFees = updatedPaidFees.toLowerCase() === 'yes';
    let paidAmount = 0;
    if (paidFees) {
      paidAmount = parseFloat(prompt('Enter the amount paid:', studentToUpdate.paidAmount));
      if (isNaN(paidAmount)) {
        alert('Invalid amount, setting amount to 0');
        paidAmount = 0;
      }
    }

    if (updatedName && updatedEmail) {
      const updatedStudents = students.map(student =>
        student.id === id ? { ...student, name: updatedName, email: updatedEmail, paidFees: paidFees, paidAmount: paidAmount } : student
      );
      setStudents(updatedStudents);
    } else {
      alert('Both name and email are required');
    }
  };

  // Function to send an email to a student using EmailJS
  const sendEmail = (student) => {
    const emailContent = prompt('Write the email message:', `Dear ${student.name},\n\nYour current payment status is as follows:\nPaid Fees: ${student.paidFees ? 'Yes' : 'No'}\nAmount Paid: ₹${student.paidAmount}\n\nThank you!`);

    if (emailContent) {
      const templateParams = {
        to_name: student.name,
        to_email: student.email,
        subject: "Fee Payment Status",
        message: emailContent,
      };

      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
        .then((response) => {
          console.log('Email sent successfully:', response);
          alert('Email sent successfully to ' + student.name);
        })
        .catch((error) => {
          console.log('Error sending email:', error);
          alert('Failed to send email');
        });
    } else {
      alert('Email message cannot be empty');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <h2 style={{ color: 'black' }}>Students List</h2>
      <button
        onClick={addStudent}
        style={{
          padding: '10px 20px',
          backgroundColor: '#ADD8E6',
          color: 'black',
          border: 'black',
          borderRadius: '9px',
          cursor: 'pointer',
        }}
      >
        Add New Student
      </button>
      <table
        style={{
          marginTop: '20px',
          width: '100%',
          borderCollapse: 'collapse',
          backgroundColor: '#fff',
        }}
      >
        <thead>
          <tr>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Student ID</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Student Name</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Email</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Paid Fees</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Paid Amount (₹)</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{student.id}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{student.name}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{student.email}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                {student.paidFees ? 'Yes' : 'No'}
              </td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                ₹{student.paidAmount}
              </td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <button
                    onClick={() => updateStudent(student.id)}
                    style={{
                      padding: '5px 10px',
                      backgroundColor: '#90EE90',
                      color: 'black',
                      border: 'black',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => sendEmail(student)}
                    style={{
                      padding: '5px 10px',
                      backgroundColor: '#FFD700',
                      color: 'black',
                      border: 'black',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    Send Email
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
