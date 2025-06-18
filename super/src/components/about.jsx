import React, { useState } from 'react';

function About() {
  const [activeTab, setActiveTab] = useState('skills');

const skills = [
  {
    title: 'HTML',
    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/480px-HTML5_logo_and_wordmark.svg.png" alt="HTML" className="skill-icon" />
  },
  {
    title: 'CSS',
    icon: <img src="https://www.svgrepo.com/show/303263/css3-logo.svg" alt="CSS" className="skill-icon" />
  },
  {
    title: 'JavaScript',
    icon: <img src="https://www.svgrepo.com/show/303206/javascript-logo.svg" alt="JavaScript" className="skill-icon" />
  },
  {
    title: 'React JS',
    icon: <img src="https://iconape.com/wp-content/files/zk/93042/png/react.png" alt="React JS" className="skill-icon" />
  },
  {
    title: 'GitHub',
    icon: <img src="https://logowik.com/content/uploads/images/github9775.jpg" alt="GitHub" className="skill-icon" />
  },
  {
    title: 'Node JS',
    icon: <img src="https://www.codeforte.com/assets/img/Technology/nodejs.png" alt="Node JS" className="skill-icon" />
  },
  {
    title: 'MySQL',
    icon: <img src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-and-moodle-elearningworld-5.png" alt="MySQL" className="skill-icon" />
  },
  {
    title: 'PHP',
    icon: <img src="https://pngimg.com/uploads/php/php_PNG39.png" alt="PHP" className="skill-icon" />
  }
];


  const experience = [
    { title: 'Frontend Intern', desc: 'loading...' },
    { title: 'Freelancer', desc: 'Built websites for 3+ clients using React' },
  ];

  const education = [
    { title: 'B.Tech in CSE', desc: 'GMRIT University, 2024 - 2027' },
    { title: '12th Grade', desc: 'Prathiba Junior College, 2021 - 2023' },
  ];

  const renderContent = () => {
    if (activeTab === 'skills') {
      return (
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
          {skills.map((item, index) => (
            <div key={index} className="col text-center">
              <div className="skill-card">
                <div className="skill-icon">{item.icon}</div>
                <p className="skill-title">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      );
    }

    const data = activeTab === 'experience' ? experience : education;

    return data.map((item, index) => (
      <div key={index} className="tab-content-item">
        <h5 className="tab-title">{item.title}</h5>
        <p className="tab-desc">{item.desc}</p>
      </div>
    ));
  };

  return (
    <div className="container-about container py-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6">
          <h2 className="aboutme">
            About <span className="abouts">Me</span>
          </h2>
          <p className="paragraph-about">
            At NxtWave’s CCBP 4.0 Academy, I’m currently learning full-stack development with a specialization in 4.0 technologies.
            In love with the coding challenges and hands-on projects. With Industry’s first ever IRC 4.0, getting ready to take on new challenges in the tech world.
          </p>

          <div className="tabs">
            <button className={activeTab === 'skills' ? 'active' : ''} onClick={() => setActiveTab('skills')}>Skills</button>
            <button className={activeTab === 'experience' ? 'active' : ''} onClick={() => setActiveTab('experience')}>Experience</button>
            <button className={activeTab === 'education' ? 'active' : ''} onClick={() => setActiveTab('education')}>Education</button>
          </div>

          <div className="tab-content mt-3">{renderContent()}</div>
        </div>

        <div className="col-lg-6 d-none d-lg-flex justify-content-center about-image-container">
          <div className="about-img-wrapper">
            <img src="about-img.png" alt="About" className="about-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
