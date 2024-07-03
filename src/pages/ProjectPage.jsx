import { useState, useEffect } from 'react';
// required component from 'react-router-dom' for LINKING pages
import { useParams, Link } from 'react-router-dom';
import Card from '../components/UI/Card/Card';

export default function ProjectPage() {
  const projectsArray = [
    {
      img:"src/assets/images/cover_for_my_portfolio.jpg", 
      title:"First Portfolio",
      description:"Description",
      repoLink:"https://github.com/kimberlyrobinson11122/Kimberly-Robinson-Portfolio", 
      deployedLink:"https://kimberlyrobinson11122.github.io/Kimberly-Robinson-Portfolio/#about",  
      languages:"HTML & CSS", 
    },
    {
      img:"images/project", 
      title:"Project",
      description:"Description",
      repoLink:"RepoLink", 
      deployedLink:"deployedLink",  
      languages:"languages", 
    },
    {
      img:"images/project", 
      title:"Project",
      description:"Description",
      repoLink:"RepoLink", 
      deployedLink:"deployedLink",  
      languages:"languages", 
    },
    {
      img:"src/assets/images/Groove_Guide_Database.jpg", 
      title:"Groove Guide",
      description:"Description",
      repoLink:"https://github.com/cguntur/groove_guide__database", 
      deployedLink:"https://groove-guide-database-1-aac602f0f549.herokuapp.com/",  
      languages:"languages", 
    },
  ]

  return (
    <>
      <div className="container">
        <h1>Projects</h1>
        <div className="row">
          {projectsArray.map((project, index) => (
            <div className="col-md-4 col-sm-12 mb-4" key={index}>
              <Card img={project.img} 
              title={project.title}
              description={project.description}
              repoLink={project.repoLink}
              deployedLink={project.deployedLink}
              languages={project.languages}/>
              </div>
          ))}
        </div>
      </div>
      
    </>
  );
}

