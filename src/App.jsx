import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav />
      <Outlet />
      <footer className="profile-footer">
        {/* Link - HomePage (instead of the href) */}
        <Link to="/">Let's go back</Link> 
        <div />
        <div className="social-links">
          <a href="https://www.linkedin.com/in/kimberly-robinson-linked/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/kimberlyrobinson11122" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.instagram.com/deenblackwell2024/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;