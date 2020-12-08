import React, {useState} from 'react'
import {ToggleDetails} from "./Utilities";

interface EducationProps {
    logo: string
    school: string
    location: string
    degree: string
    major?: string
    enrollment: string
    graduation: string
}
function Education({logo, school, location, degree, major, enrollment, graduation}: EducationProps) {
    return (
        <div>
            <div style={{float: "left", width: "150px", height: "30px", textAlign: "center", paddingBottom: "10px", paddingTop: "10px" }}><img src={logo} className="logo-img" alt={"logo for " + school}/></div>
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
                <p>I chose Boston University largely because of their amazing study abroad program. I live to travel. I was extremely fortunate to be able to spend two separate semesters in foreign countries during my undergrad. The first in New Zealand doing an internship program and taking a few courses at the University of Auckland.
                    The second semester abroad was spent in Japan learning Japanese while I lived with a host family and took a few courses at Doshisha University in Kyoto.
                    I think both semesters did amazing things for me. I became more self confident, made life-long friends, and learned problem-solving techniques and different ways of thinking that I still use to this day.
                </p>
                <br />
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