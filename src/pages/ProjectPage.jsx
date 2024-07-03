import { useState, useEffect } from 'react';
// required component from 'react-router-dom' for LINKING pages
import { useParams, Link } from 'react-router-dom';
import Card from '../components/UI/Card/Card';

export default function ProjectPage() {
  const projectsArray = [
    {
      img:"src/assets/images/cover_for_my_portfolio.jpg", 
      title:"My First Portfolio",
      description:"Description",
      repoLink:"https://github.com/kimberlyrobinson11122/Kimberly-Robinson-Portfolio", 
      deployedLink:"https://kimberlyrobinson11122.github.io/Kimberly-Robinson-Portfolio/#about",  
      languages:"HTML & CSS", 
    },

    {
      img:"src/assets/images/work_day_planner2.jpg", 
      title:"Work Day Planner",
      description:"Work Day Planner",
      repoLink:"https://github.com/kimberlyrobinson11122/simple_work_day_planner", 
      deployedLink:"https://kimberlyrobinson11122.github.io/simple_work_day_planner/",  
      languages:"languages", 
    },

    {
      img:"src/assets/images/code_quiz.png", 
      title:"Multiple Choice Quiz",
      description:"Quiz (Multiple Choice)",
      repoLink:"https://github.com/kimberlyrobinson11122/multiple_choice_quiz", 
      deployedLink:"https://kimberlyrobinson11122.github.io/multiple_choice_quiz/",  
      languages:"languages", 
    },

    {
      img:"src/assets/images/Horiseon.jpg", 
      title:"Horiseon Website",
      description:"Horiseon Website",
      repoLink:"https://github.com/kimberlyrobinson11122/Horiseon-Homepage-Accessibility-Update", 
      deployedLink:"https://kimberlyrobinson11122.github.io/Horiseon-Homepage-Accessibility-Update/",  
      languages:"languages", 
    },

    {
      img:"src/assets/images/weather_app.jpg", 
      title:"Weather App",
      description:"Weather App (Current & Five Day)",
      repoLink:"https://github.com/kimberlyrobinson11122/weather_for_you", 
      deployedLink:"https://kimberlyrobinson11122.github.io/weather_for_you/",  
      languages:"languages", 
    },

    {
      img:"src/assets/images/groove_guide.png", 
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
      <br /><h1>Projects</h1><br />
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

