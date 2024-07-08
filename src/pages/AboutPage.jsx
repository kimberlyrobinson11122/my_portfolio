import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="container pt-4 col-lg-12 m-5">
      <p className="text-left" style={{ fontSize: '1.5rem' }}>
        Born and raised in the vibrant landscapes of Northern California, specifically Sunnyvale, I've always been drawn to the intersection of technology and creativity. After completing my education, I made the leap to Los Angeles, where I delved into the dynamic world of project management, honing my skills across various industries, all while nurturing a deep-seated passion for innovation. With nearly a decade of experience under my belt, I've recently embarked on a thrilling journey with an EdX and Berkeley Boot Camp, immersing myself in the latest software and design principles. Each project undertaken fuels my drive and excitement, propelling me towards the creation of impactful apps and ventures. I'm eagerly anticipating the opportunity to continue pushing boundaries and leaving my mark on the ever-evolving landscape of technology.
      </p>
      
      <section className="features-icons bg-light text-center m-4">
        {/* If I would like, I can add content here */}
      </section>
      
      <div className="text-center">
        <img 
          src="src/assets/images/girl_business.jpg" 
          alt="Portfolio Cover" 
          className="img-container"
          style={{ maxWidth: '60%', height: 'auto' }} 
        />
      </div>
    </div>
  );
}