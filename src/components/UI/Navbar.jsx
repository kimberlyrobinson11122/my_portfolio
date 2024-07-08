import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ links }) {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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