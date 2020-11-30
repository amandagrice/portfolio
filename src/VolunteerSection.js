import {useState} from "react";
import {ToggleDetails} from "./Utilities";

function Volunteer({organization, logo, location, role, startDate, endDate}) {
    return (
        <div>
            <div style={{ float: "left", width: "150px", height: "75px", textAlign: "center"}}><img src={logo} style={{ maxWidth: "150px", maxHeight: "50px" }}/></div>
            <div style={{ float: "left", marginLeft: "75px", width: "775px" }}>
                <span style={{ fontWeight: "bold", float: "left", fontSize: "20px"}}>{organization}</span>
                <span style={{ float: "right"}}>{location}</span>
                <br style={{ clear: "both"}} />
                <span style={{ float: "left"}}>{role}</span>
                <span style={{ float: "right"}}>{startDate + " - " + endDate}</span>
                <br style={{ clear: "both"}} />
            </div>
            <br style={{ clear: "both"}} />
        </div>
    )
}

function VolunteerSection() {
    const [showDetails, setShowDetails] = useState(false)
    return (
        <div>
            <h2>Volunteer Experience</h2>
            <Volunteer
                logo="citizen-schools-logo.png"
                organization="Citizen Schools"
                location="Boston, MA"
                role="Coding Teacher"
                startDate="February 2020"
                endDate="Present"
            />
            <br />

            <Volunteer
                logo="boston-cares-logo.png"
                organization="Boston Cares"
                location="Boston, MA"
                role="General Volunteer"
                startDate="January 2019"
                endDate="Present"
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
                />
                <br />

                <Volunteer
                    logo="klexon-logo.jpg"
                    organization="Kyoto International Club Klexon"
                    location="Kyoto, Japan"
                    role="English as a Second Language Tutor"
                    startDate="January 2017"
                    endDate="April 2017"
                />
                <br />

                <Volunteer
                    logo="gai-logo.png"
                    organization="Global App Initiative"
                    location="Boston, MA"
                    role="App Developer"
                    startDate="September 2013"
                    endDate="May 2014"
                />
                <br />
            </div>}
            <ToggleDetails showDetails={showDetails} setShowDetails={setShowDetails}/>

        </div>
    )
}

export default VolunteerSection