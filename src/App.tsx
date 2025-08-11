import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Instructors from './pages/Instructors';
import Certificates from './pages/Certificates';
import Community from './pages/Community';
import Help from './pages/Help';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Demo from './pages/Demo';
import CampusSelect from './pages/CampusSelect';
import StudentCampus from './pages/StudentCampus';
import CreatorCampus from './pages/CreatorCampus';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/campus-select" element={<CampusSelect />} />
        <Route path="/student-campus" element={<StudentCampus />} />
        <Route path="/creator-campus" element={<CreatorCampus />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/community" element={<Community />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Layout>
  );
}

export default App;