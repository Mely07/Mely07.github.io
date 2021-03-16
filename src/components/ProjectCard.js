import React from 'react';


const ProjectCard = (props) => {

    return (
        <div className="card shadow-lg mb-5 bg-white rounded" style={{ height: '31rem' }}>
            <img src={props.image} class="card-img-top" width="100%" height="180" alt="..."></img>
            <div class="card-body">
                <h5 className="color-green">{props.title}</h5>
                <p className="text-muted">{props.tech}</p>
                <p class="card-text">{props.summary}</p>
            </div>
            <div class="card-body">
                <a class="btn btn-outline-secondary mx-1" href={props.glink} style={{ fontSize: "1.5em", color: "coral" }}><i className="fab fa-github-alt"></i></a>
                <a class="btn btn-outline-secondary mx-1" href={props.mlink} style={{ fontSize: "1.5em", color: "coral" }}><i className="fab fa-medium-m"></i></a>
            </div>
        </div>
    );
};

export default ProjectCard;

