import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CourseTypeForm from './components/CourseTypeForm';
import CourseForm from './components/CourseForm';
import RegistrationForm from './components/RegistrationForm';

function App() {
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
          <Route path="/" element={<CourseTypeForm />} />
          <Route path="/courses" element={<CourseForm />} />
          <Route path="/registration" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
