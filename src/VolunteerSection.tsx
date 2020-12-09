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
                logo="coders-logo.png"
                organization="Capital One Coders"
                location="Boston, MA"
                role="Coding Teacher"
                startDate="February 2020"
                endDate="Present"
                description="Coders is a volunteer program I joined through working at Capital One. Coders partners with local schools to teach middle and high school students programming. I joined in February 2020 teaching middle school students how to program phone apps with Scratch and
                MIT App Inventor. That program was unfortunately cut short in March due to COVID-19 restrictions. But we were fortunate enough to get to start up again teaching high school students HTML and CSS remotely in November."
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
                    description="I went out every Monday with the Harvard Square Homeless Shelter street team to prepare and distribute food, warm clothing, and toiletries to people in need around Harvard square."
                />
                <br />

                <Volunteer
                    logo="klexon-logo.jpg"
                    organization="Kyoto International Club Klexon"
                    location="Kyoto, Japan"
                    role="English as a Second Language Tutor"
                    startDate="January 2017"
                    endDate="April 2017"
                    description="During my semester abroad in Japan, I volunteered one day a week to help English-language learners practice their conversation stills. Tutoring was conducted both one-on-one and in groups of around five to six people."
                />
                <br />

                <Volunteer
                    logo="gai-logo.png"
                    organization="Global App Initiative"
                    location="Boston, MA"
                    role="App Developer"
                    startDate="September 2013"
                    endDate="May 2014"
                    description="During my freshman year of undergrad I worked with teams of other BU students to develop mobile applications for non-profit organizations. I specialized in Android app development."
                />
                <br />
            </div>}
            <ToggleDetails showDetails={showDetails} setShowDetails={setShowDetails}/>
            <br />
        </div>
    )
}

export default VolunteerSection