import React from 'react';

const projects = [
  {
    title: '🐾 Indian Animals Web App',
    subtitle: 'Explore Indian Wildlife 🐅🐍🐦 – A responsive web app with filters, pagination, and detailed animal info.',
    image: 'project1.png',
  },
  {
    title: '🍽️ FoodMunch',
    subtitle: 'I created a fully responsive food ordering website – smart, stylish, and mobile-friendly!',
    image: 'project2.png',
  },
  {
    title: 'College Event Manager',
    subtitle: 'Simplifying registrations, schedules & announcements for all college events.',
    image: "https://static.vecteezy.com/system/resources/thumbnails/020/617/592/original/loading-circle-animation-on-black-transparent-background-with-alpha-channel-element-animation-for-web-interface-or-application-interface-and-more-searching-updating-and-buffering-circle-icon-free-video.jpg",
  },
];

function SelectedProjects() {
  return (
    <div className="projects-section">
      <h2 className="projects-title">
        <span className="gray">SELECTED </span>
        <span className="highlight">PROJECTS</span>
      </h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-subtitle">{project.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectedProjects;
