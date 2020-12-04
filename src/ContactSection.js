import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEnvelope, faLocationArrow} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"

function ContactSection() {
    return (
        <div style={{width: "100%", textAlign: "center", marginTop: "10px"}}>
            <span><FontAwesomeIcon icon={faEnvelope}/>{' amandalyngrice@gmail.com'}</span>
            <span style={{ marginLeft: "20px"}}><FontAwesomeIcon icon={faLinkedin}/><a href="https://www.linkedin.com/in/amandagrice/">{' in/amandagrice'}</a></span>
            <span style={{ marginLeft: "20px"}}><FontAwesomeIcon icon={faGithub}/><a href="https://github.com/amandagrice">{' amandagrice'}</a></span>
            <span style={{ marginLeft: "20px"}}><FontAwesomeIcon icon={faLocationArrow}/>{' Boston, MA'}</span>
        </div>
    )
}

export default ContactSection