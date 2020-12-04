import React from "react";
import {useState} from "react";
import {ToggleDetails} from "./Utilities";

interface VolunteerProps {
    organization: string
    logo: string
    location: string
    role: string
    startDate: string
    endDate: string
    description: string
}
function Volunteer({organization, logo, location, role, startDate, endDate, description}: VolunteerProps) {
    return (
        <div>
            <div style={{ float: "left", width: "150px", height: "30px", textAlign: "center", paddingBottom: "10px", paddingTop: "10px"}}>
                <img src={logo} className="logo-img" alt={"logo for " + organization}/>
            </div>
            <div style={{ float: "left", marginLeft: "75px", width: "775px", height: "30px" }}>
                <span style={{ fontWeight: "bold", float: "left", fontSize: "20px"}}>{organization}</span>
                <span style={{ float: "right"}}>{location}</span>
                <br style={{ clear: "both"}} />
                <span style={{ float: "left"}}>{role}</span>
                <span style={{ float: "right"}}>{startDate + " - " + endDate}</span>
                <br style={{ clear: "both"}} />
            </div>
            <br style={{ clear: "both"}} />
            <p>{description}</p>
        </div>
    )
}

function VolunteerSection() {
    const [showDetails, setShowDetails] = useState(false)
    return (
        <div>
            <h2>Volunteer Experience</h2>
            <br />
            <Volunteer
                logo="citizen-schools-logo.png"
                organization="Citizen Schools"
                location="Boston, MA"
                role="Coding Teacher"
                startDate="February 2020"
                endDate="Present"
                description="Taught middle school students how to code using Scratch and MIT App Inventor. Taught high school students how to write HTML and CSS. A arcu cursus vitae congue. Felis eget nunc lobortis mattis aliquam faucibus purus in. A pellentesque sit amet porttitor eget dolor. Sed turpis tincidunt id aliquet risus feugiat in ante. Quis blandit turpis cursus in hac habitasse platea. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. "
            />
            <br />

            <Volunteer
                logo="boston-cares-logo.png"
                organization="Boston Cares"
                location="Boston, MA"
                role="General Volunteer"
                startDate="January 2019"
                endDate="Present"
                description="Boston Cares connects volunteers with a variety of organizations in the greater Boston area. Through them I have worked organizing and handing out donations at food banks, mailing educational resources to prisoners, tutoring math and English, and more."
            />
            <br />

            {showDetails && <div>
                <Volunteer
                    logo="harvard-logo.png"
                    organization="Harvard Square Homeless Shelter"
                    location="Cambridge, MA"
                    role="Street Team Member"
                    startDate="October 2018"
                    endDate="April 2019"
                    description="I went out every Monday with the Harvard Square Homeless Shelter street team to distribute food, warm clothing, and toiletries to people in need around Harvard square. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Sagittis purus sit amet volutpat consequat mauris nunc. "
                />
                <br />

                <Volunteer
                    logo="klexon-logo.jpg"
                    organization="Kyoto International Club Klexon"
                    location="Kyoto, Japan"
                    role="English as a Second Language Tutor"
                    startDate="January 2017"
                    endDate="April 2017"
                    description="During my semester abroad in Japan, I volunteered one day a week to help English-language learners practice their conversation stills. Tutoring was conducted both one-on-one and in groups of around five to six people. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio."
                />
                <br />

                <Volunteer
                    logo="gai-logo.png"
                    organization="Global App Initiative"
                    location="Boston, MA"
                    role="App Developer"
                    startDate="September 2013"
                    endDate="May 2014"
                    description="Worked with teams of other BU students to develop mobile applications for non-profit organizations. I specialized in Android app development. Suscipit adipiscing bibendum est ultricies integer quis auctor. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris."
                />
                <br />
            </div>}
            <ToggleDetails showDetails={showDetails} setShowDetails={setShowDetails}/>
        </div>
    )
}

export default VolunteerSection