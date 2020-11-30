import React, {useState} from 'react'
import {ToggleDetails} from "./Utilities";

function Education({logo, school, location, degree, major, enrollment, graduation}) {
    return (
        <div>
            <div style={{float: "left", width: "150px", height: "30px", textAlign: "center", paddingBottom: "10px", paddingTop: "10px" }}><img src={logo} className="logo-img" /></div>
            <div style={{float: "left", marginLeft: "75px", width: "775px", height: "30px"}}>
                <span style={{fontWeight: "bold", float: "left", fontSize: "20px"}}>{school}</span>
                <span style={{float: "right"}}>{location}</span>
                <br style={{clear: "both"}}/>
                {major && <span style={{float: "left"}}>{degree + ", " + major}</span>}
                {!major && <span style={{float: "left"}}>{degree}</span>}
                <span style={{float: "right"}}>{enrollment + " - " + graduation}</span>
                <br style={{clear: "both"}}/>
            </div>
            <br style={{clear: "both"}}/>
        </div>
    )
}

function EducationSection() {
    const [showDetails, setShowDetails] = useState(false)
    return (
        <div>
            <h2>Education</h2>
            <br />
            <Education
                school="Boston University"
                logo="bu-logo.png"
                location="Boston, MA"
                degree="Bachelor of Arts"
                major="Computer Science"
                enrollment="September 2013"
                graduation="May 2017"
            />
            <br />

            {showDetails && <div>
                <Education
                    school="Doshisha University"
                    logo="doshisha-uni-logo.jpeg"
                    location="Kyoto, Japan"
                    degree="Semester Exchange"
                    major="Japanese Language and Culture"
                    enrollment="January 2017"
                    graduation="April 2017"
                />
                <br />

                <Education
                    school="University of Auckland"
                    logo="auckland-uni-logo.png"
                    location="Auckland, New Zealand"
                    degree="Semester Exchange"
                    major="Computer Science"
                    enrollment="July 2015"
                    graduation="November 2015"
                />
                <br />

                <Education
                    school="Winchester High School"
                    logo="whs-logo.png"
                    location="Winchester, MA"
                    degree="Diploma"
                    enrollment="September 2009"
                    graduation="June 2013"
                />
                <br />
            </div>}
            <ToggleDetails showDetails={showDetails} setShowDetails={setShowDetails} />
            <br/>
        </div>
    )
}

export default EducationSection