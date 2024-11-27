import React, { useState, useEffect } from 'react';

const RegistrationForm = ({ publishableCourses }) => {
  const [registrations, setRegistrations] = useState([]);
  const [filterType, setFilterType] = useState('');
  const [courseTypes, setCourseTypes] = useState([]);

  // Extract unique course types from the courses
  useEffect(() => {
    const types = [...new Set(publishableCourses.map(course => course.type))];
    setCourseTypes(types);
  }, [publishableCourses]);

  // Filter the courses based on the selected filter type
  const filteredCourses = filterType
    ? publishableCourses.filter((course) => course.type === filterType)
    : publishableCourses;

  const registerStudent = (course) => {
    const studentName = prompt('Enter student name:');
    if (studentName) {
      setRegistrations([...registrations, { course: course.name, studentName }]);
    }
  };

  return (
    <div>
      <h2>Student Registrations</h2>

      {/* Dropdown to filter courses by dynamic course types */}
      <select onChange={(e) => setFilterType(e.target.value)} value={filterType}>
        <option value="">Filter by Type</option>
        {courseTypes.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>

      {/* Displaying filtered courses */}
      <ul>
        {filteredCourses.map((course, index) => (
          <li key={index}>
            {course.name}{' '}
            <button onClick={() => registerStudent(course)}>Register</button>
          </li>
        ))}
      </ul>

      <h3>Registered Students</h3>
      {/* Displaying the list of students who have registered */}
      <ul>
        {registrations.map((reg, index) => (
          <li key={index}>
            {reg.studentName} registered for {reg.course}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegistrationForm;
