import React, { Component } from 'react';
import ProjectCard from './ProjectCard'

class Projects extends Component {
    render() {
        return (
            <div className="row cols-1 cols-md-3 mb-3 text-center">
                <div><ProjectCard link="https://www.youtube.com/embed//nYkO9-n-NKs" glink="https://github.com/Mely07/Storyteller-React-Redux-Project" mlink="https://damely-tineo.medium.com/react-redux-and-store-state-7e4f4605ac8b" /></div>
                <div><ProjectCard link="https://www.youtube.com/embed/DQkHAqJT1f4" glink="https://github.com/Mely07/Book-It-JS-Rails-Project" mlink="https://damely-tineo.medium.com/object-oriented-classes-8e13ffdf7b1d" /></div>
                <div><ProjectCard link="https://www.youtube.com/embed/5nCsvMZMjTA" glink="https://github.com/Mely07/Giving-Back-Rails-Project" mlink="https://damely-tineo.medium.com/helper-methods-9143cc1826b5" /></div>
                <div><ProjectCard link="https://www.youtube.com/embed/FpFcbaQwXis" glink="https://github.com/Mely07/Whats-In-My-Fridge-Sinatra-Project" mlink="https://damely-tineo.medium.com/cookies-and-sessions-a6473729fbb9" /></div>
                <div><ProjectCard link="https://youtube.com/embed/TBF4YtSy7oM" glink="https://github.com/Mely07/CLI-Data-Gem-Project" mlink="https://damely-tineo.medium.com/apis-mass-assignment-and-metaprogramming-a4a0fbcaba08" /></div>
            </div>
        );
    }
}

export default Projects;