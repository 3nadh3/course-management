import React, { useState } from 'react';

const CourseTypeForm = ({ courseTypes, setCourseTypes }) => {
  const [newCourseType, setNewCourseType] = useState('');

  const handleAddCourseType = () => {
    if (newCourseType && !courseTypes.includes(newCourseType)) {
      setCourseTypes([...courseTypes, newCourseType]);
      setNewCourseType('');
    }
  };

  return (
    <div>
      <h2>Add Course Type</h2>
      <input
        type="text"
        value={newCourseType}
        onChange={(e) => setNewCourseType(e.target.value)}
        placeholder="Enter course type (e.g., Individual, Group)"
      />
      <button onClick={handleAddCourseType}>Add</button>

      <h3>Available Course Types</h3>
      <ul>
        {courseTypes.map((type, index) => (
          <li key={index}>{type}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseTypeForm;
