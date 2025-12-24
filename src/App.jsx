import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './component/Navbar';
import { Hero } from './component/Hero';
import { About } from './component/About';
import { Skills } from './component/Skills';
import { Experience } from './component/Experience';
import { Contact } from './component/Contact';
import { Footer } from './component/Footer';
import { Project } from './component/Project'; 
import './App.css';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Contact />
            </>
          }
        />

        <Route path="/projects" element={<Project />} />
      </Routes>
        <Footer />
    </Router>
  );
}

export default App;
