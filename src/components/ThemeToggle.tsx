import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import type { ThemeToggleProps } from '../types';

const ThemeToggle = ({ darkMode, toggleTheme }: ThemeToggleProps): React.JSX.Element => {
  return (
    <div className="theme-toggle">
      <button
        onClick={toggleTheme}
        className="theme-btn"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <FontAwesomeIcon 
          icon={darkMode ? faSun : faMoon}
          className="theme-icon"
        />
      </button>
    </div>
  );
};

export default ThemeToggle;