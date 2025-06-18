import Nav from './components/nav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Profile from './components/profile.jsx';
import About from './components/about.jsx';
import React, { useState } from 'react';
import SkillsBar from './components/SkillsBar.jsx';
import Certification from './components/Certification.jsx';
import SelectedProjects from './components/SelectedProjects.jsx';
import ContactUs from './components/ContactUs.jsx';
import Footer from './components/footer.jsx';
 
import './styles.css';
 

function App() {
 const [selectedSkill, setSelectedSkill] = useState('HTML5');
  return (
    <> 
    <Nav />
     
    <div>
       
      <Profile/>
      <div id="aboutme">  
      <About/>
      </div>
     <div className="app" id="certificate">
      <SkillsBar onSkillClick={setSelectedSkill} />
      <Certification skill={selectedSkill} />
    </div>
    <div className="App" id="projects">
      <SelectedProjects />
    </div>
        <div id="contact">
      <ContactUs />
    </div>
 <Footer />
    </div>
    </>
  );
   
}

export default App;