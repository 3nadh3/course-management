import React, { useState } from 'react';
import '../css/CourseForm.css';

const CourseForm = () => {
  const [courses, setCourses] = useState([]);
  const [courseTypes] = useState(['Individual', 'Group', 'Special']);
  const [publishableCourses, setPublishableCourses] = useState([]);
  const [courseInput, setCourseInput] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const addCourse = () => {
    if (courseInput.trim()) {
      setCourses([...courses, courseInput]);
      setCourseInput('');
    }
  };

  const addPublishableCourse = () => {
    if (selectedType && courseInput) {
      const combinedCourse = `${selectedType}, ${courseInput}`;
      setPublishableCourses([...publishableCourses, combinedCourse]);
    }
  };

  return (
    <div className="course-form-container">
      <h2>Courses</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Add Course"
          value={courseInput}
          onChange={(e) => setCourseInput(e.target.value)}
        />
        <button onClick={addCourse}>Add</button>
      </div>
      <h3>Publishable Courses</h3>
      <select onChange={(e) => setSelectedType(e.target.value)}>
        <option value="">Select Type</option>
        {courseTypes.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
      <button onClick={addPublishableCourse}>Combine</button>
      <ul>
        {publishableCourses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseForm;
