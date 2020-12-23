import React from 'react';
import Iframe from 'react-iframe';

const ProjectCard = (props) => {
    return (
        <div className="col">
            <Iframe src={props.link}
                width="250px"
                height="250px"/>
        </div>
    );
};

export default ProjectCard;