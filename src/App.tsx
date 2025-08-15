import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Demo from './pages/Demo';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import CampusSelect from './pages/CampusSelect';
import Courses from './pages/Courses';

// Student Portal Pages
import StudentDashboard from './pages/student/Dashboard';
import StudentCatalog from './pages/student/Catalog';
import StudentCoursePlayer from './pages/student/CoursePlayer';
import StudentCertificates from './pages/student/Certificates';
import StudentProfile from './pages/student/Profile';

// Creator Portal Pages
import CreatorDashboard from './pages/creator/Dashboard';
import CreatorCourses from './pages/creator/Courses';
import CreatorUsers from './pages/creator/Users';
import CreatorBranding from './pages/creator/Branding';
import CreatorAnalytics from './pages/creator/Analytics';
import CreatorBilling from './pages/creator/Billing';
import CreatorSettings from './pages/creator/Settings';
import StudentCampus from './pages/StudentCampus';
import CreatorCampus from './pages/CreatorCampus';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/campus-select" element={<CampusSelect />} />
        
        {/* Student Portal Routes */}
        <Route path="/org/learn" element={<StudentDashboard />} />
        <Route path="/org/learn/catalog" element={<StudentCatalog />} />
        <Route path="/org/learn/course/:slug" element={<StudentCoursePlayer />} />
        <Route path="/org/learn/certificates" element={<StudentCertificates />} />
        <Route path="/org/learn/profile" element={<StudentProfile />} />
        
        {/* Creator Portal Routes */}
        <Route path="/org/admin" element={<CreatorDashboard />} />
        <Route path="/org/admin/courses" element={<CreatorCourses />} />
        <Route path="/org/admin/users" element={<CreatorUsers />} />
        <Route path="/org/admin/branding" element={<CreatorBranding />} />
        <Route path="/org/admin/analytics" element={<CreatorAnalytics />} />
        <Route path="/org/admin/billing" element={<CreatorBilling />} />
        <Route path="/org/admin/settings" element={<CreatorSettings />} />
        
        {/* Campus Routes */}
        <Route path="/student-campus" element={<StudentCampus />} />
        <Route path="/creator-campus" element={<CreatorCampus />} />
      </Routes>
    </Layout>
  );
}

export default App;