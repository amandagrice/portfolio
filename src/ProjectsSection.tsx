import {faLink} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

interface ProjectProps {
    logo: string
    name: string
    tools: string
    description: string
    link: string
}
function Project({ logo, name, tools, description, link }: ProjectProps) {
    return (
        <div style={{ height: "250px", width: "475px", backgroundColor: "#f2f2f5", marginBottom: "25px", float: "left", marginLeft: "25px"}}>
            <div style={{ float: "left"}}>
                <img src={logo} style={{ marginTop: "25px", marginLeft: "25px", height: "200px", width: "200px"}}  alt={"icon for project " + name}/>
            </div>
            <div style={{ position: "relative", float: "left", width: "250px", height: "100%"}}>
                <div style={{ marginTop: "25px", fontWeight: "bold", marginLeft: "25px", backgroundColor: "#d5e0f8", textAlign: "center", fontSize: "20px"}}>
                    {name}
                </div>
                <div style={{ marginLeft: "10px", fontStyle: "italic", fontSize: "13px", marginTop: "15px"}}>{tools}</div>
                <div style={{ marginLeft: "10px", marginTop: "15px"}}>{description}</div>
                <br />
                <div style={{ position: "absolute", bottom: 5, right: 10}}><a href={link} target="_blank"><FontAwesomeIcon icon={faLink} style={{ marginRight: "5px"}}/>link</a></div>
            </div>
            <br style={{ clear: "both"}}/>
        </div>
    )
}

function ProjectsSection() {
    return (
        <div>
            <h2>Projects</h2>
            <Project
                name="Shenwrong"
                logo="goku.jpg"
                tools="Angular, TypeScript, HTML, CSS, AWS S3"
                description="Website created to design custom Dragon Ball Super cards for the TCG."
                link="http://shenwrong.com/"
            />
            <Project
                name="Social Distancing"
                logo="groceries.jpg"
                tools="Unity, C#, AWS S3"
                description="A silly game inspired by the COVID pandemic where you have to grab all the groceries but you lose if you get near anyone else."
                link="http://socialdistancinggame.s3-website-us-east-1.amazonaws.com/"
            />
            <Project
                name="Kanji Flashcards"
                logo="love-kanji.jpg"
                tools="Javascript, HTML, CSS, AWS S3"
                description="A three-sided flashcard website I made for personally studying Japanese and Mandarin."
                link="http://threesidedflashcards.s3-website-us-east-1.amazonaws.com/"
            />

            <Project
                name="Animal Crossing Bestiary"
                logo="animal-crossing-cj.jpg"
                tools="React, Javascript"
                description="A website to keep track of fish and bugs caught in Animal Crossing."
                link="http://animal-crossing-bestiary.s3-website-us-east-1.amazonaws.com/"
            />
            <br style={{ clear: "both"}}/>
        </div>
    )
}

export default ProjectsSection