import React from 'react';
import Iframe from 'react-iframe';
import { GoMarkGithub } from "react-icons/go";
import { FaMediumM } from "react-icons/fa"


const ProjectCard = (props) => {

    return (
        <div >
            <Iframe class="responsive-iframe" src={props.link}
                width="400px"
                height="250px" />

            <a style={{ color: 'black' }} href={props.glink}><GoMarkGithub /></a>
            <a style={{ color: 'black' }} href={props.mlink}><FaMediumM /></a>
        </div>
    );
};

export default ProjectCard;