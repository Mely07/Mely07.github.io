import React from 'react';
import Iframe from 'react-iframe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoColorFill } from 'react-icons/io5';

const ProjectCard = (props) => {

    return (
        <div >
            <Iframe className="responsive-iframe rounded" src={props.link} width="100%" height="258px" />
            
            <div className="text-center">
                <a style={{ fontSize: "2em" }} href={props.mlink}>
                    <i className="fab fa-medium-m"></i></a>
                <a style={{ fontSize: "2em" }} href={props.glink}>
                    <i className="fab fa-github-alt"></i>
                </a>
                <p className="text-muted">{props.tech}</p>
            </div>
        </div>
    );
};

export default ProjectCard;

