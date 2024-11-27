import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CourseTypeForm from './components/CourseTypeForm';
import CourseForm from './components/CourseForm';
import RegistrationForm from './components/RegistrationForm';

function App() {
  // Shared state - initially empty
  const [courseTypes, setCourseTypes] = useState([]);  // Empty array for course types
  const [publishableCourses, setPublishableCourses] = useState([]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Course Types</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/registration">Registration</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<CourseTypeForm courseTypes={courseTypes} setCourseTypes={setCourseTypes} />}
          />
          <Route
            path="/courses"
            element={<CourseForm courseTypes={courseTypes} setPublishableCourses={setPublishableCourses} />}
          />
          <Route
            path="/registration"
            element={<RegistrationForm publishableCourses={publishableCourses} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
