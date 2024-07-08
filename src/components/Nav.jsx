import React from 'react';
import Navbar from './UI/Navbar';

export default function Nav() {
  return (
    <Navbar
      links={[
        { key: 1, to: "/", label: "Home" },
        { key: 2, to: "/projects", label: "Projects" },
        { key: 3, to: "/resume", label: "Resume" },
        { key: 4, to: "/contact", label: "Contact" },
        { key: 5, to: "/about", label: "About Me" },
      ]}
    />
  );
}