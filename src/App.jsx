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
      </footer>
    </>
  );
}

export default App;
