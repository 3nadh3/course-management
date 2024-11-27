import React, { useState } from 'react';

const PublishableCourseForm = ({ courseTypes, courses, createPublishableCourse, publishableCourses }) => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleCreatePublishableCourse = () => {
    if (selectedType && selectedCourse) {
      createPublishableCourse(selectedType, selectedCourse);
    }
  };

  return (
    <div>
      <h2>Create Publishable Course</h2>

      {/* Dropdown to select course type */}
      <select onChange={(e) => setSelectedType(e.target.value)} value={selectedType}>
        <option value="">Select Course Type</option>
        {courseTypes.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>

      {/* Dropdown to select course */}
      <select onChange={(e) => setSelectedCourse(e.target.value)} value={selectedCourse}>
        <option value="">Select Course</option>
        {courses.map((course, index) => (
          <option key={index} value={course}>
            {course}
          </option>
        ))}
      </select>

      <button onClick={handleCreatePublishableCourse}>Create Publishable Course</button>

      <h3>Publishable Courses</h3>
      <ul>
        {publishableCourses.map((course, index) => (
          <li key={index}>      {course.name} - {course.type}
</li>
        ))}
      </ul>
    </div>
  );
};

export default PublishableCourseForm;
