import React from 'react'

function Company({logo, name, location}) {
    return (
        <div>
            <span style={{width: "150px"}}><img src={logo} style={{
                width: "150px",
                maxHeight: "50px",
                verticalAlign: "middle"
            }}/></span>
            <span style={{marginLeft: "75px", verticalAlign: "middle", fontWeight: "bold", fontSize: "20px"}}>
                {name}
            </span>
            <span style={{verticalAlign: "middle", float: "right", lineHeight: "75px"}}>
                {location}
            </span>
            <br style={{clear: "both"}}/>
        </div>
    )
}

function Role({title, startDate, endDate}) {
    return (
        <div style={{marginLeft: "225px"}}>
            <span style={{float: "left", fontWeight: "bold"}}>{title}</span>
            <span style={{float: "right"}}>{startDate + " - " + endDate}</span>
            <br style={{clear: "both"}}/>
        </div>
    )
}

function EmploymentSection() {
    return (
        <div>
            <h2>Work Experience</h2>

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
                />
                <Role
                    title="Technology Development Program Associate"
                    startDate="June 2017"
                    endDate="July 2018"
                />
                <Role
                    title="Technology Development Program Intern"
                    startDate="June 2016"
                    endDate="August 2016"
                />
                <br/>
            </div>

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
                />
                <br/>
            </div>

        </div>
    )
}

export default EmploymentSection