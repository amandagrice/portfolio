import React from 'react'

interface SkillProps {
    have: string
}
function Skill({ have }: SkillProps) {
    return (
        <div style={{
            backgroundColor: "#d5e0f8",
            width: "100px",
            height: "30px",
            textAlign: "center",
            borderRadius: "25px",
            lineHeight: "30px",
            float: "left",
            marginBottom: "20px",
            marginRight: "10px"
        }}>
            {have}
        </div>
    )
}

function SkillsSection() {
    return (
        <div>
            <h2>Skills</h2>
            <Skill have="JavaScript"/>
            <Skill have="TypeScript"/>
            <Skill have="React"/>
            <Skill have="Angular"/>
            <Skill have="HTML"/>
            <Skill have="CSS"/>
            <Skill have="Python"/>
            <Skill have="Git"/>
            <Skill have="Java"/>
            <Skill have="Scala"/>
            <Skill have="SQL"/>
            <Skill have="PL/SQL"/>
            <Skill have="Unity"/>
            <Skill have="C#"/>
            <br style={{clear: "both"}}/>
        </div>
    )
}

export default SkillsSection