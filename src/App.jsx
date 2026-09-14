import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './component/Navbar';
import { Hero } from './component/Hero';
import { About } from './component/About';
import { Skills } from './component/Skills';
import { Experience } from './component/Experience';
import { Contact } from './component/Contact';
import { Footer } from './component/Footer';
import { Project } from './component/Project';
import './App.css';
import { Education } from './component/Education';

// Fade each route in and reset scroll on navigation.
function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    // Only jump to top on a real page change, not on in-page hash links.
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div key={location.pathname} className="animate-fade-in">
      <Routes location={location}>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Education />
              <Skills />
              <Experience />
              <Contact />
            </>
          }
        />

        <Route path="/projects" element={<Project />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
