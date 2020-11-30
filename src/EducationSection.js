import React from 'react'

function Education({school, location, degree, major, graduation}) {
    return (
        <div>
            <div style={{ float: "left"}}><img src="bu-logo.png" style={{ width: "150px" }}/></div>
            <div style={{ float: "left", marginLeft: "75px", width: "775px" }}>
                <span style={{ fontWeight: "bold", float: "left", fontSize: "20px"}}>{school}</span>
                <span style={{ float: "right"}}>{location}</span>
                <br style={{ clear: "both"}} />
                <span style={{ float: "left"}}>{degree} in {major}</span>
                <span style={{ float: "right"}}>{graduation}</span>
                <br style={{ clear: "both"}} />
            </div>
            <br style={{ clear: "both"}} />
        </div>
    )
}

function EducationSection() {
    return (
        <div>
            <h2>Education</h2>
            <Education
                school="Boston University"
                location="Boston, MA"
                degree="Bachelor of Arts"
                major="Computer Science"
                graduation="May 2017"
            />
            <br />
        </div>
    )
}

export default EducationSection