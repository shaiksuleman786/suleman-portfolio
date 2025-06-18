import React from 'react';

const certificateData = {
HTML5: {
  image: "html.png",
  description: "I completed the 'Build Your Own Static Website' course from NxtWave CCBP 4.0 Academy on April 9, 2024. This certification showcases my ability to develop fully responsive and accessible static websites using modern web technologies.",
  skills: [
    { icon: "🌐", text: "Responsive Web Design with HTML5 & CSS3" },
    { icon: "⚡", text: "Bootstrap Grid System & Components" },
    { icon: "🎯", text: "Cross-Browser & Device Compatibility" }
  ]
},
CSS: {
  image: "css.png",
  description: "I completed the 'Build Your Own Responsive Website' course from NxtWave CCBP 4.0 Academy on April 9, 2024, gaining hands-on experience in crafting mobile-first, fully responsive websites using CSS Flexbox and Bootstrap.",
  skills: [
    { icon: "📱", text: "Mobile-First Design Principles" },
    { icon: "🧱", text: "CSS Flexbox Layout Mastery" },
    { icon: "🧩", text: "Bootstrap Components & Grid System" }
  ]
},
 JavaScript: {
  image: "https://static.vecteezy.com/system/resources/thumbnails/020/617/592/original/loading-circle-animation-on-black-transparent-background-with-alpha-channel-element-animation-for-web-interface-or-application-interface-and-more-searching-updating-and-buffering-circle-icon-free-video.jpg",
  description: "I built a strong foundation in JavaScript through hands-on projects and structured learning via NxtWave CCBP 4.0 Academy, gaining expertise in modern JavaScript features and browser-based programming.",
  skills: [
    { icon: "⚙️", text: "DOM Manipulation & Event Handling" },
    { icon: "🧠", text: "ES6+ Features (let/const, Arrow Functions, etc.)" },
    { icon: "⏳", text: "Asynchronous Programming with Promises & Async/Await" }
  ]
},
SQL: {
  image: "sql.png",
  description: "I earned the SQL (Basic) certification from HackerRank on June 22, 2024, demonstrating my ability to write efficient queries, manage relational data, and extract meaningful insights from structured datasets.",
  skills: [
    { icon: "🧮", text: "Advanced SQL Queries (JOINs, GROUP BY, HAVING)" },
    { icon: "🗃️", text: "Relational Database Design & Normalization" },
    { icon: "📊", text: "Data Retrieval, Filtering, and Aggregation" }
  ]
},
Python: {
  image: "python.png",
  description: "I earned an Elite certification in 'The Joy of Computing using Python' from NPTEL (IIT Madras) during Jan–Apr 2025, showcasing my ability to solve real-world problems using Python and build logic-driven solutions.",
  skills: [
    { icon: "🐍", text: "Core Python Programming" },
    { icon: "🧠", text: "Algorithmic & Logical Thinking" },
    { icon: "🧮", text: "Problem Solving & Debugging" }
  ]
},
React: {
  image: "https://static.vecteezy.com/system/resources/thumbnails/020/617/592/original/loading-circle-animation-on-black-transparent-background-with-alpha-channel-element-animation-for-web-interface-or-application-interface-and-more-searching-updating-and-buffering-circle-icon-free-video.jpg",
  description: "I am currently learning React to build dynamic, component-based web applications. I'm gaining hands-on experience with hooks, JSX, and state management to create modern, interactive UIs.",
  skills: [
    { icon: "⚛️", text: "JSX & Component Architecture" },
    { icon: "🔁", text: "useState & useEffect Hooks" },
    { icon: "🎯", text: "Building Interactive UI" }
  ]
}


};

function Certification({ skill }) {
  const data = certificateData[skill];

  if (!data) return null;

  return (
    <div className="certificate-box">
      <h2>{skill} Certificate</h2>
      <div className="certificate-content">
        <div className="certificate-left">
          <p>{data.description}</p>

          <div className="timeline">
            {data.skills.map((item, index) => (
              <div className="timeline-item" key={index}>
                <span className="timeline-icon">{item.icon}</span>
                <span className="timeline-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="certificate-right">
          <img src={data.image} alt={`${skill} Certificate`} className="certificate-img" />
        </div>
      </div>
    </div>
  );
}

export default Certification;






