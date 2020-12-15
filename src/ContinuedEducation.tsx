import React, {useState} from 'react'
import {ToggleDetails} from "./Utilities";

interface CourseProps {
    name: string
    certificate?: string
    time: string
}

function Course({name, certificate, time}: CourseProps) {
    return (<li><a href={certificate} target="_blank" rel="noreferrer">{name}</a><span
        style={{float: "right"}}>{time}</span></li>)
}

interface SchoolProps {
    name: string
    logo: string
    location: string
}

function School({name, logo, location}: SchoolProps) {
    return (
        <>
            <div style={{float: "left", width: "150px", height: "30px"}}>
                <img
                    src={logo}
                    className="logo-img"
                    alt={name + " logo"}
                />
            </div>
            <div style={{float: "left", marginLeft: "75px", width: "775px", height: "30px"}}>
                <span style={{fontWeight: "bold", float: "left", fontSize: "20px"}}>{name}</span>
                <span style={{float: "right"}}>{location}</span>
                <br style={{clear: "both"}}/>
            </div>
            <br/>
        </>
    )
}

function ContinuedEducation() {
    const [showDetails, setShowDetails] = useState(false)
    return (
        <div>
            <h2>Continued Education</h2>
            <p>
                I am a big believer in lifelong learning. Since graduating college I've taken many courses online and in
                person for fun in various subjects. I'm especially a big fan of Coursera where you
                can take online courses from accredited universities for free or very cheap. I do not believe in
                limiting my personal learning just to tech. You never really know what kind of experience can give
                someone the insight to crack a novel problem.
                Below is a list of some of the courses I've taken recently. Non-tech related ones are in the details
                section.
            </p>
            {showDetails && <p>(I have taken way too many of these recently because I'm bored out of my mind with all the COVID restrictions.)</p>}
            <br />
            <School name="Coursera" logo="coursera-logo.svg" location="Online"/>
            <ul>
                {showDetails && <>
                    <Course
                        name="Learning How to Learn"
                        time="November 2020 - December 2020"
                    />
                    <Course
                        name="The Modern World, Part One: Global History from 1760 to 1910"
                        time="October 2020 - December 2020"
                        certificate="https://coursera.org/share/f4acaafc06a87e3d9ed36beb456ed5c0"
                    />
                </>}
                <Course
                    name="Visual Elements of User Interface Design"
                    time="November 2020 - December 2020"
                />
                <Course
                    name="Functional Programming Principles in Scala"
                    time="November 2020 - December 2020"
                />
                {showDetails && <>
                    <Course
                        name="Skepticism"
                        certificate="https://coursera.org/share/c1fdc1f0bd0a9f220bba61e4f9650341"
                        time="October 2020 - November 2020"
                    />
                    <Course
                        name="Introduction to Food and Health"
                        certificate="https://coursera.org/share/06d4a866d1eed9b924c150d74df96838"
                        time="November 2020"
                    />
                </>}
            </ul>
            {showDetails && <>
                <br/>

                <School name="American Red Cross" logo="red-cross-logo.jpg" location="Medford, MA"/>
                <ul>
                    <Course
                        name="Adult and Pediatric First Aid/CPR/AED"
                        certificate="https://www.redcross.org/take-a-class/qrcode?certnumber=00CKHSG"
                        time="August 2020"
                    />
                </ul>
                <br/>

                <School name="Cambridge Center for Adult Education" logo="ccae-logo.jpg" location="Cambridge, MA"/>
                <ul>
                    <Course name="Chinese: Beginner Level 1" time="January 2020 - March 2020"/>
                    <Course name="Southern Fried Chicken and Side Dishes" time="March 2020"/>
                    <Course name="Introduction to Chinese Cuisine" time="January 2020"/>
                </ul>
            </>}
            <ToggleDetails showDetails={showDetails} setShowDetails={setShowDetails}/>
        </div>
    )
}

export default ContinuedEducation