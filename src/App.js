import EducationSection from "./EducationSection";
import EmploymentSection from "./EmploymentSection";
import VolunteerSection from "./VolunteerSection";

function App() {
    return (
        <div className="App">
            <div style={{ textAlign: 'center', fontSize: '50px', overflow: 'scroll'}}>Amanda Grice</div>
            <div style={{ margin: '0 auto', width: '90%', minWidth: "1000px", maxWidth: '1000px', height: '100%', marginBottom: "50px"}}>
                <EducationSection />
                <hr />
                <EmploymentSection />
                <hr />
                {/*<ProjectsSection />*/}
                {/*<hr />*/}
                <VolunteerSection />
                <br />
            </div>
        </div>
    );
}

export default App;
