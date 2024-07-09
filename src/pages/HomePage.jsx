import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import your CSS file
import cover from '../assets/images/cover-img.jpg';

export default function HomePage() {
  return (
    <div className="container pt-4">
      <h1 style={{ fontSize: '2rem' }}> Welcome to My Portfolio </h1>
      <p className="text-left" style={{ fontSize: '1.5rem' }}>
        As an aspiring designer and software developer located in Seattle, I am dedicated to continuously refining my skills and knowledge in these fields. This website serves as a preliminary platform as I set out on my exciting journey of growth and learning. I am enthusiastic about taking on freelance opportunities and engaging in collaborative projects. I am an aspiring designer and software developer based in Seattle. Currently, I am honing my skills. This website serves as a placeholder for the start of my journey. I am open to freelance work and collaborations.
      </p>
      <img 
        src={cover}
        alt="Portfolio Cover" 
        className="img-container" 
      />
    </div>
  );
}

