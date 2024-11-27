import React, { useState } from 'react';
import "../css/CourseForm.css";

const CourseForm = ({ courses, setCourses }) => {
  const [newCourse, setNewCourse] = useState('');

  const handleAddCourse = () => {
    if (newCourse && !courses.includes(newCourse)) {
      setCourses([...courses, newCourse]);
      setNewCourse('');
    }
  };

  return (
    <div>
      <h2>Add Course</h2>
      <input
        type="text"
        value={newCourse}
        onChange={(e) => setNewCourse(e.target.value)}
        placeholder="Enter course name (e.g., Hindi, English)"
      />
      <button onClick={handleAddCourse}>Add</button>

      <h3>Available Courses</h3>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseForm;
