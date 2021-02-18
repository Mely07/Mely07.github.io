import React from 'react';
import Iframe from 'react-iframe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoColorFill } from 'react-icons/io5';

const ProjectCard = (props) => {

    return (
        <div className="card shadow-sm">
            {/* <Iframe className="responsive-iframe rounded" src={props.link} width="100%" height="258px" frameBorder="0" /> */}
            <img src="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg" class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 className="text-muted">{props.title}</h5>
                <p className="text-muted">{props.tech}</p>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <a style={{ fontSize: "2em", color: "pink" }} href={props.mlink}>
                            <i className="fab fa-medium-m"></i></a>
                        <a style={{ fontSize: "2em", color: "pink" }} href={props.glink}>
                            <i className="fab fa-github-alt"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;

