
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from 'react-router-dom';


import HomePage from './pages/HomePage';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CourseDetailPage from './pages/CourseDetailPage';
import ProfilePage from './pages/ProfilePage';
import AIPage from './pages/AIPage';
import ContactUs from "./pages/ContactUs";
import Footer from './components/Footer';
import FAQPage from './pages/FAQPage';
import AboutPage from './pages/AboutPage';


function App() {

  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/course/:courseId" element={<CourseDetailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/chatbot" element={<AIPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/footer" element={<Footer />} /> 
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
    
  )
}

export default App
