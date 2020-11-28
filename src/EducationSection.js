import React from 'react'

function Education({school, degree, major, graduation}) {
    return (
        <div>
            <span style={{ fontWeight: "bold", float: "left"}}>{school}</span>
            <span style={{ float: "right"}}>Boston, MA</span>
            <br/>
            <span style={{ float: "left"}}>{degree} in {major}</span>
            <span style={{ float: "right"}}>{graduation}</span>
        </div>
    )
}

function EducationSection() {
    return (
        <div>
            <h2>Education</h2>
            <Education
                school="Boston University"
                degree="Bachelor of Arts"
                major="Computer Science"
                graduation="May 2017"
            />
        </div>
    )
}

export default EducationSection