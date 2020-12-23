import React, { Component } from 'react';
import ProjectCard from './ProjectCard'

class Projects extends Component {
    render() {
        return (
            
            <div className="row cols-1 cols-md-3 mb-3 text-center">
                <div><ProjectCard link="https://www.youtube.com/embed/DQkHAqJT1f4"/></div>
                <div><ProjectCard link="https://www.youtube.com/embed//nYkO9-n-NKs"/></div>
                <div><ProjectCard link="https://www.youtube.com/embed/FpFcbaQwXis"/></div>
                <div><ProjectCard link="https://youtube.com/embed/TBF4YtSy7oM"/></div>
            </div>
        );
    }
}

export default Projects;