import React from 'react'

function Company({logo, name, location}) {
    return (
        <div>
            <img src={logo} style={{width: "150px", verticalAlign: "middle"}}/>
            <span style={{marginLeft: "75px", verticalAlign: "middle", fontWeight: "bold", fontSize: "20px"}}>
                {name}
            </span>
            <span style={{verticalAlign: "middle", float: "right", lineHeight: "75px"}}>
                {location}
            </span>
            <br style={{ clear: "both"}} />
        </div>
    )
}

function Role({title, startDate, endDate}) {
    return (
        <div style={{ marginLeft: "225px"}}>
            <span style={{ float: "left", fontWeight: "bold"}}>{title}</span>
            <span style={{ float: "right"}}>{startDate + " - " + endDate}</span>
            <br style={{ clear: "both"}} />
        </div>
    )
}

function EmploymentSection() {
    return (
        <div>
            <h2>Work Experience</h2>

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

            <br />

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

            <br />

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
        </div>
    )
}

export default EmploymentSection