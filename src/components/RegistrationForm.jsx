import React, { useState } from 'react';

const RegistrationForm = () => {
  const [registrations, setRegistrations] = useState([]);
  const [filterType, setFilterType] = useState('');
  const [publishableCourses] = useState([
    'Individual, English',
    'Individual, Hindi',
    'Group, English',
  ]);

  const filteredCourses = filterType
    ? publishableCourses.filter((course) => course.startsWith(filterType))
    : publishableCourses;

  const registerStudent = (course) => {
    const studentName = prompt('Enter student name:');
    if (studentName) {
      setRegistrations([...registrations, { course, studentName }]);
    }
  };

  return (
    <div>
      <h2>Student Registrations</h2>
      <select onChange={(e) => setFilterType(e.target.value)}>
        <option value="">Filter by Type</option>
        <option value="Individual">Individual</option>
        <option value="Group">Group</option>
        <option value="Special">Special</option>
      </select>
      <ul>
        {filteredCourses.map((course, index) => (
          <li key={index}>
            {course}{' '}
            <button onClick={() => registerStudent(course)}>Register</button>
          </li>
        ))}
      </ul>
      <h3>Registered Students</h3>
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
