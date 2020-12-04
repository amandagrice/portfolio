import EducationSection from "./EducationSection";
import EmploymentSection from "./EmploymentSection";
import VolunteerSection from "./VolunteerSection";
import AboutSection from "./AboutSection";
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ContactSection from "./ContactSection";
import React from "react";

function App() {
    return (
        <div className="App">
            <img src="boston.jpg" style={{ width: "100%" }}/>
            <div style={{ textAlign: 'center', fontSize: '50px' }}>Amanda Grice</div>
            <div style={{ margin: '0 auto', width: '90%', minWidth: "1000px", maxWidth: '1000px', height: '100%', marginBottom: "50px"}}>
                <div style={{ textAlign: 'center', fontSize: '20px' }}>Software Engineer</div>
                <ContactSection />
                <AboutSection />
                <img src="me.jpg" style={{ width: "1000px", borderRadius: "40px"}} />
                <EducationSection />
                <hr />
                <SkillsSection />
                <hr />
                <EmploymentSection />
                <hr />
                <ProjectsSection />
                <hr />
                <VolunteerSection />
                <br />
            </div>
            <img src="boston-2.jpg" style={{ width: "100%"}}/>
            <div style={{ textAlign: 'center', fontSize: '10px', marginTop: "10px", marginBottom: "10px" }}><ContactSection /></div>
        </div>
    );
}

export default App;
