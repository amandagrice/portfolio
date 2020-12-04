import React, {useState} from 'react'
import {ToggleDetails} from "./Utilities";

interface CompanyProps {
    logo: string
    name: string
    location: string
}
function Company({logo, name, location}: CompanyProps) {
    return (
        <div>
            <div style={{float: "left", width: "150px", height: "30px", textAlign: "center" }}><img src={logo} className="logo-img" alt={"logo for " + name}/></div>
            <div style={{float: "left", marginLeft: "75px", width: "775px", height: "30px"}}>
                <span style={{fontWeight: "bold", float: "left", fontSize: "20px"}}>{name}</span>
                <span style={{float: "right"}}>{location}</span>
                <br style={{clear: "both"}}/>
            </div>
            <br/>
        </div>
    )
}

interface RoleProps {
    title: string
    startDate: string
    endDate: string
    jobDescription: string
}
function Role({title, startDate, endDate, jobDescription}: RoleProps) {
    return (
        <div style={{marginLeft: "225px"}}>
            <span style={{float: "left", fontWeight: "bold"}}>{title}</span>
            <span style={{float: "right"}}>{startDate + " - " + endDate}</span>
            <br style={{clear: "both"}}/>
            <p>{jobDescription}</p>
        </div>
    )
}

function EmploymentSection() {
    const [showDetails, setShowDetails] = useState(false)
    return (
        <div>
            <h2>Work Experience</h2>
            <p>
                Ut ornare lectus sit amet est placerat in. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Consequat nisl vel pretium lectus quam. Arcu dictum varius duis at. Molestie nunc non blandit massa enim nec. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Semper viverra nam libero justo laoreet sit. Adipiscing elit pellentesque habitant morbi tristique. Vivamus at augue eget arcu. Cursus metus aliquam eleifend mi in. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Mattis pellentesque id nibh tortor id.
            </p>
            <br />
            <div>
                <Company
                    logo="capital-one-logo.png"
                    name="Capital One"
                    location="Cambridge, MA"
                />
                <Role
                    title="Software Engineer"
                    startDate="July 2019"
                    endDate="Present"
                    jobDescription="A arcu cursus vitae congue. Felis eget nunc lobortis mattis aliquam faucibus purus in. A pellentesque sit amet porttitor eget dolor. Sed turpis tincidunt id aliquet risus feugiat in ante. Quis blandit turpis cursus in hac habitasse platea. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Turpis egestas integer eget aliquet nibh praesent tristique. Interdum varius sit amet mattis vulputate enim nulla. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Suscipit adipiscing bibendum est ultricies integer quis auctor. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris."
                />
                <br/>
            </div>

            <div>
                <Company
                    logo="optum-logo.png"
                    name="Optum"
                    location="Boston, MA"
                />
                <Role
                    title="Associate Software Engineer"
                    startDate="July 2018"
                    endDate="June 2019"
                    jobDescription="Developed backend PL/SQL and Java code for a healthcare EDI portal that handles in excess of 10 million transactions per day. Designed and implemented a new web portal page using Angular. Improved a data extraction process and freed about 6 hours of labor per week."
                />
                <Role
                    title="Technology Development Program Associate"
                    startDate="June 2017"
                    endDate="July 2018"
                    jobDescription="Developed software on several Agile development teams as part of a rotational new grad program. Presented wireframes and business case to executives to advocate funding a new internal tool. Designed and developed an internal ReactJS website from scratch as part of a 3 person team. Developed features for both a Google Home app and an Alexa skill. Established automated testing on voice assistance apps and achieved 100% coverage. Handled a large code reorganization and refactoring operation for a Java EDI web portal. Developed frontend code for a Java EDI web portal."
                />
            </div>

            {showDetails &&
            <div>
                <Role
                    title="Technology Development Program Intern"
                    startDate="June 2016"
                    endDate="August 2016"
                    jobDescription="Worked on an Agile development team using the Elasticsearch stack to develop a collection of tools for analyzing big data sets. Developed web apps using AngularJS that consolidated big data visualizations. Created dashboards with Kibana."
                />
                <br/>
                <div>
                    <Company
                        logo="pavlok-logo.png"
                        name="Pavlok"
                        location="Boston, MA"
                    />
                    <Role
                        title="Quality Engineer Intern"
                        startDate="November 2015"
                        endDate="May 2016"
                        jobDescription="Assembled printed circuit boards into functioning Pavlok units — a wearable device that shocks users out of their bad habits. Tested units at all phases of assembly. Disassembled, debugged, and repaired non-working or malfunctioning devices. Packaged product for shipping to customers. Quality assurance tested mobile applications."
                    />
                    <br/>
                </div>

                <div>
                    <Company
                        logo="imeasureu-logo.png"
                        name="IMeasureU"
                        location="Auckland, New Zealand"
                    />
                    <Role
                        title="Software Engineer Intern"
                        startDate="July 2015"
                        endDate="November 2015"
                        jobDescription="Developed a native Android application in Java that syncs with company's wearable sensors over Bluetooth Low Energy. Application provides feedback to help athletes optimize their technique and avoid injury. Implemented sharing data with multiple third party applications."
                    />
                    <br/>
                </div>

                <div>
                    <Company
                        logo="brant-rock-market-logo.png"
                        name="Brant Rock Market"
                        location="Marshield, MA"
                    />
                    <Role
                        title="Deli Worker"
                        startDate="May 2014"
                        endDate="August 2014"
                        jobDescription="Maintained high standards of customer service in a busy and fast-paced environment. Prepared sandwiches and salads. Sliced and packaged meats and cheeses. Operated the grill and fryer. Washed dishes and kept the kitchen spotless. Carefully followed all food safety procedures."
                    />
                    <br/>
                </div>

                <div>
                    <Company
                        logo="agganis-logo.jpg"
                        name="Agganis Arena"
                        location="Boston, MA"
                    />
                    <Role
                        title="Operations"
                        startDate="September 2013"
                        endDate="June 2017"
                        jobDescription="Performed various tasks to changeover the arena for events and provided other operational tasks as needed. Collaborated on teams to build stages for concerts, set-up the ice hockey rink, lay down basketball flooring, and clean the arena. Assisted customers with questions and checked tickets. Monitored public skating events to enforce safety rules. Supervised large volunteer student groups cleaning the seating after events."
                    />
                    <br/>
                </div>
            </div>}
            <ToggleDetails showDetails={showDetails} setShowDetails={setShowDetails}/>
            <br/>

        </div>
    )
}

export default EmploymentSection