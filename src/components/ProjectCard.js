import React from 'react';
import Iframe from 'react-iframe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoColorFill } from 'react-icons/io5';
// import givingBackImage from '../images/giving_back.png';

const ProjectCard = (props) => {

    return (
        <div className="card shadow-sm">
            {/* <img src={props.image} class="card-img-top" alt="..."></img> */}
            <div class="card-body">
                <h5 className="text-muted">{props.title}</h5>
                <p className="text-muted">{props.tech}</p>
                <p class="card-text">{props.summary}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <a class="btn btn-outline-secondary mx-1" href={props.glink} style={{ fontSize: "2em", color: "pink" }}><i className="fab fa-github-alt"></i></a>
                        <a class="btn btn-outline-secondary mx-1" href={props.mlink} style={{ fontSize: "2em", color: "pink" }}><i className="fab fa-medium-m"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;

