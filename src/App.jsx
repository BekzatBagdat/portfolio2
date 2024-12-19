import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import './main.css';
import video from '../src/video/videoBg.mp4';
function App() {
  return (
    <div className="app-container flex flex-col min-h-screen">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="video-background">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="content-overlay flex-grow">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/projects" element={<ProjectsSection />} />
          </Routes>
        </Router>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
