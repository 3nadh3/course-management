import React, { useState } from 'react';
import '../css/CourseTypeForm.css';

const CourseTypeForm = ({ courseTypes, setCourseTypes }) => {
  const [input, setInput] = useState('');

  const addCourseType = () => {
    if (input.trim()) {
      setCourseTypes([...courseTypes, input]);
      setInput('');
    }
  };

  const deleteCourseType = (index) => {
    const updatedTypes = courseTypes.filter((_, i) => i !== index);
    setCourseTypes(updatedTypes);
  };

  const editCourseType = (index) => {
    const newName = prompt('Edit Course Type:', courseTypes[index]);
    if (newName) {
      const updatedTypes = courseTypes.map((type, i) =>
        i === index ? newName : type
      );
      setCourseTypes(updatedTypes);
    }
  };

  return (
    <div className="container">
      <h2>Course Types</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Add Course Type"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addCourseType}>Add</button>
      </div>
      <ul>
        {courseTypes.length === 0 ? (
          <li>No course types added yet.</li>
        ) : (
          courseTypes.map((type, index) => (
            <li key={index}>
              {type}
              <div>
                <button onClick={() => editCourseType(index)}>Edit</button>
                <button onClick={() => deleteCourseType(index)}>Delete</button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default CourseTypeForm;
