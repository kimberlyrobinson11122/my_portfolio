import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Header';

export default function Navbar({ links }) {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
          <Header/>
          <ul className="navbar-nav mb-2 mb-lg-0 justify-content-between">
            {links.map((link) => (
              <li key={link.key} className="nav-item">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? "nav-link text-bold active purple-text" : "nav-link text-light"
                  }
                  exact="true"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}