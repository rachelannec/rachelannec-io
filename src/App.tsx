import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Archives from './components/Archives';
import Socials from './components/Socials';
import ThemeToggle from './components/ThemeToggle';
import './index.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  })

  // ----- theme effect
  useEffect(() =>{
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // helper to toggle theme
  const toggleTheme= () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  const isDarkMode = theme === 'dark';

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
      <ThemeToggle darkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Header />
      <hr />
      <About />
      <Archives />
      <Socials />
      <hr />
      <footer className="text-center my-5">
        <p>&copy; {new Date().getFullYear()} Rachel Anne Cilon</p>
      </footer>
    </div>
  );
}

export default App;

// npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons