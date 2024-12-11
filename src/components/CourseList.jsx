import React from 'react';
import './Dashboard.css';  // If styles are specific to the dashboard
import './styles.css';  // If styles are in a global CSS file

const CourseList = () => {
    const courses = ['Course 1', 'Course 2', 'Course 3'];

    return (
        <div className="course-list">
            <h2>Available Courses</h2>
            <ul>
                {courses.map((course, index) => (
                    <li key={index} className="course-item">
                        {course}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;
