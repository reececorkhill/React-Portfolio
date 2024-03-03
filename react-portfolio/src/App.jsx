import { useState } from 'react'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === 'Home') {
      return (
        <div>
          <Home />
        </div>
      );
    } else if (currentPage === 'About') {
      return (
        <div>
          <About />
        </div>
      );
    } else if (currentPage === 'Projects') {
      return (
        <div>
          <Project />
        </div>
      );
    } else {
      return (
        <div>
          <Contact />
        </div>
      );
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default App