import React from 'react';
import Iframe from 'react-iframe';
import { GoMarkGithub } from "react-icons/go";
import { SiMedium } from "react-icons/si";


const ProjectCard = (props) => {

    return (
        <div className="col">
            <Iframe src={props.link}
                width="250px"
                height="250px"/>
              
            <a style={{color: 'black'}} href={props.glink}><GoMarkGithub /></a>
            <a style={{color: 'black'}} href={props.mlink}><SiMedium /></a>
        </div>
    );
};

export default ProjectCard;