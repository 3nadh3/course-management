import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CourseForm from './components/CourseForm';
import CourseTypeForm from './components/CourseTypeForm';
import PublishableCourseForm from './components/PublishableCourseForm';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
  const [courses, setCourses] = useState(['Hindi', 'English', 'Math', 'Science']);
  const [courseTypes, setCourseTypes] = useState(['Individual', 'Group']);
  const [publishableCourses, setPublishableCourses] = useState([]);

  useEffect(() => {
    // Predefined publishable courses
    setPublishableCourses([
      { name: 'Hindi', type: 'Individual' },
      { name: 'English', type: 'Group' },
    ]);
  }, []);

  const createPublishableCourse = (course) => {
    setPublishableCourses([...publishableCourses, course]);
  };

  return (
    <Router>
      <div>
        <h1>Course Registration App</h1>
        <nav>
          <ul>
            <li><Link to="/">Course Types</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/publishable-courses">publishable-courses</Link></li>
            <li><Link to="/registration">Registration</Link></li>
          </ul>
        </nav>

        <Routes>
          {/* Route for CourseTypeForm */}
          <Route
            path="/"
            element={
              <CourseTypeForm
                courseTypes={courseTypes}
                setCourseTypes={setCourseTypes}
              />
            }
          />
          
          {/* Route for CourseForm */}
          <Route
            path="/courses"
            element={
              <CourseForm
                courses={courses}
                setCourses={setCourses}
                publishableCourses={publishableCourses}
                setPublishableCourses={setPublishableCourses}
              />
            }
          />
          
          {/* Route for PublishableCourseForm */}
          <Route
            path="/publishable-courses"
            element={
              <PublishableCourseForm
                courseTypes={courseTypes}
                courses={courses}
                createPublishableCourse={createPublishableCourse}
                publishableCourses={publishableCourses}
              />
            }
          />
          
          {/* Route for RegistrationForm */}
          <Route
            path="/registration"
            element={<RegistrationForm publishableCourses={publishableCourses} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
