import React from 'react';
import CustomCard from '../components/UI/Card/customCard';
import coverForMyPortfolio from '../assets/images/cover-img.jpg';
import workDayPlannerImage from '../assets/images/planner.jpg';
import codeQuizImage from '../assets/images/code-quiz.png';
import horiseonImage from '../assets/images/horiseon.jpg';
import weatherAppImage from '../assets/images/weather-app.jpg';
import grooveGuideImage from '../assets/images/groove-guide.png';

export default function ProjectPage() {
  const projectsArray = [
    {
      img: coverForMyPortfolio,
      title: "My First Portfolio",
      description: "Description",
      repoLink: "https://github.com/kimberlyrobinson11122/Kimberly-Robinson-Portfolio",
      deployedLink: "https://kimberlyrobinson11122.github.io/Kimberly-Robinson-Portfolio/#about",
      languages: "HTML, CSS, GitHub",
    },
    {
      img: workDayPlannerImage,
      title: "Work Day Planner",
      description: "Work Day Planner",
      repoLink: "https://github.com/kimberlyrobinson11122/simple_work_day_planner",
      deployedLink: "https://kimberlyrobinson11122.github.io/simple_work_day_planner/",
      languages: "HTML, CSS powered by jQuery, Third Party APIs, and jQuery",
    },
    {
      img: codeQuizImage,
      title: "Multiple Choice Quiz",
      description: "Quiz (Multiple Choice)",
      repoLink: "https://github.com/kimberlyrobinson11122/multiple_choice_quiz",
      deployedLink: "https://kimberlyrobinson11122.github.io/multiple_choice_quiz/",
      languages: "HTML, CSS powered by JavaScript, Web APIs, and JavaScript",
    },
    {
      img: horiseonImage,
      title: "Horiseon Website",
      description: "Horiseon Website",
      repoLink: "https://github.com/kimberlyrobinson11122/Horiseon-Homepage-Accessibility-Update",
      deployedLink: "https://kimberlyrobinson11122.github.io/Horiseon-Homepage-Accessibility-Update/",
      languages: "CSS",
    },
    {
      img: weatherAppImage,
      title: "Weather App",
      description: "Weather App (Current & Five Day)",
      repoLink: "https://github.com/kimberlyrobinson11122/weather_for_you",
      deployedLink: "https://kimberlyrobinson11122.github.io/weather_for_you/",
      languages: "Server-side APIs, HTML, CSS",
    },
    {
      img: grooveGuideImage,
      title: "Groove Guide",
      description: "Description",
      repoLink: "https://github.com/cguntur/groove_guide__database",
      deployedLink: "https://groove-guide-database-1-aac602f0f549.herokuapp.com/",
      languages: "JavaScript, CSS, HTML, other tools MySQL and Sequelize ORM for the databases",
    },
  ];

  return (
    <>
      <div className="container">
        <br />
        <h1>Projects</h1>
        <br />
        <div className="row">
          {projectsArray.map((project, index) => (
            <div className="col-md-4 col-sm-12 mb-4" key={index}>
              <CustomCard
                img={project.img}
                title={project.title}
                description={project.description}
                repoLink={project.repoLink}
                deployedLink={project.deployedLink}
                languages={project.languages}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}