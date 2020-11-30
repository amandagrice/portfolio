import EducationSection from "./EducationSection";
import EmploymentSection from "./EmploymentSection";
import VolunteerSection from "./VolunteerSection";
import ProjectsSection from "./ProjectsSection";

function App() {
    return (
        <div className="App">
            <div style={{ textAlign: 'center', fontSize: '50px'}}>Amanda Grice</div>
            <div style={{ margin: '0 auto', width: '90%', minWidth: "1000px", maxWidth: '1000px', height: '100%'}}>
                <EducationSection />
                <hr />
                <EmploymentSection />
                <hr />
                {/*<ProjectsSection />*/}
                {/*<hr />*/}
                <VolunteerSection />
            </div>
        </div>
    );
}

export default App;
