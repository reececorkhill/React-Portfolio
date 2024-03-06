import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import ProjectGallery from './components/ProjectGallery.jsx';
import Resume from './components/Resume.jsx'
import Contact from './components/Contact.jsx'
import projectData from '../data/projects.json'
import aboutData from '../data/about.json'
import TeamTree from './components/Projects/TeamTree.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        {aboutData.map((data) => (
          <Route path="/About" element={<About 
          id={data.id}
          imgsource={data.imgsource}
          imgalt={data.imgalt}
          h1={data.h1}
          p1={data.p1}
          p2={data.p2}
          p3={data.p3}
          />} key={"About"} />
        ))}
        <Route path="/Projects" element={<ProjectGallery />} key={"Projects"}/>
        {projectData.map((data) => (
          <Route path="/Projects/TeamTree" element={<TeamTree 
          id={data.id}
          imgsource={data.imgsource}
          imgalt={data.imgalt}
          h1={data.h1}
          p1={data.p1}
          p2={data.p2}
          p3={data.p3}
          />} key={"TeamTree"} />
        ))}
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App