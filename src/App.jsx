// Bringing in the required import from 'react-router-dom'
import { Outlet, Link } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    
      <Nav />
      <Outlet />
      <footer className="profile-footer">
        {/* Link - HomePage (instead of the href) */}
        <Link to="/">Let's go back</Link> 
        <div />
        <div className="social-links">
          <Link to="https://www.linkedin.com/in/kimberly-robinson-linked/">LinkedIn</Link>
          <Link to="https://github.com/kimberlyrobinson11122">GitHub</Link>
          {/* Add a third placeholder link here */}
        </div>
      </footer>
    </>
  );
}

export default App;
