import React from 'react';
import Iframe from 'react-iframe';
import { GoMarkGithub } from "react-icons/go";
import { FaMediumM } from "react-icons/fa"


const ProjectCard = (props) => {

    return (
        <div >
            <Iframe className="responsive-iframe rounded" src={props.link} width="100%" height="258px" />
            <div className="center">
                <a style={{ color: 'black' }} href={props.glink}><GoMarkGithub /></a>
                <a style={{ color: 'black' }} href={props.mlink}><FaMediumM /></a>
                <p>{props.tech}</p>
            </div>
        </div>
    );
};

export default ProjectCard;