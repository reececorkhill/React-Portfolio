import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import ProjectGallery from './components/ProjectGallery.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';
import "../index.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<ProjectGallery />} key={"Projects"}/>
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App