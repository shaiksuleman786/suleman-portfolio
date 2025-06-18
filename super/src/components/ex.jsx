import React, { useState } from 'react';
import SkillsBar from './SkillsBar';
import CertificateDisplay from './CertificateDisplay';

function ex() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div className="app">
      <SkillsBar onSkillClick={setSelectedSkill} />
      <CertificateDisplay skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
    </div>
  );
}

export default ex;
