import React, { useState } from 'react';
import '../css/CourseForm.css';

const CourseForm = ({ courseTypes, setPublishableCourses }) => {
  const [courseInput, setCourseInput] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const addPublishableCourse = () => {
    if (selectedType && courseInput) {
      const newCourse = { type: selectedType, name: courseInput };
      setPublishableCourses((prevCourses) => [...prevCourses, newCourse]);
      setCourseInput('');
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
        <button onClick={addPublishableCourse}>Add</button>
      </div>
      <h3>Select Course Type</h3>
      <select
        onChange={(e) => setSelectedType(e.target.value)}
        value={selectedType}
      >
        <option value="">Select Type</option>
        {courseTypes.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CourseForm;
