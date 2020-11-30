import EducationSection from "./EducationSection";
import EmploymentSection from "./EmploymentSection";

function App() {
    return (
        <div className="App">
            <div style={{ textAlign: 'center', fontSize: '50px'}}>Amanda Grice</div>
            <div style={{ margin: '0 auto', width: '90%', minWidth: "1000px", maxWidth: '1000px', height: '100%'}}>
                <EducationSection />
                <hr />
                <EmploymentSection />
            </div>
        </div>
    );
}

export default App;
