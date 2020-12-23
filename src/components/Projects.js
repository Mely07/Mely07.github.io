import React, { Component } from 'react';
import Iframe from 'react-iframe'

class Projects extends Component {
    render() {
        return (
            <div>
                <Iframe url="https://www.youtube.com/embed/DQkHAqJT1f4"
                    width="250px"
                    height="250px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative" />
            </div>
        );
    }
}

export default Projects;