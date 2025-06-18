import React from 'react';

const skills = ['HTML5', 'CSS', 'JavaScript','SQL','Python','React'];

function SkillsBar({ onSkillClick }) {
  return (
    <div className="skills-bar">
      {skills.map((skill, index) => (
        <span key={index} className="skill-item" onClick={() => onSkillClick(skill)}>
          {skill}
        </span>
      ))}
    </div>
  );
}

export default SkillsBar;


