import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomCard({ img, title, description, repoLink, deployedLink, languages }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={repoLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Repository</a>
        <a href={deployedLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>Live Site</a>
        <p className="card-text mt-2"><small className="text-muted">{languages}</small></p>
      </div>
    </div>
  );
}

export default CustomCard;