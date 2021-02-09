import React, { Component } from 'react';
import ProjectCard from './ProjectCard'

class Projects extends Component {
    render() {
        return (
            <div className="container rounded mt-4 p-md-5 mb-4">
                <h1 class="display-4 mb-4">Projects</h1>
                <div className="row">
                    <div className="col-4"><ProjectCard link="https://www.youtube.com/embed//nYkO9-n-NKs" glink="https://github.com/Mely07/Storyteller-React-Redux-Project" mlink="https://damely-tineo.medium.com/react-redux-and-store-state-7e4f4605ac8b" tech="RAILS - REACT - REDUX"/></div>
                    <div className="col-4"><ProjectCard link="https://www.youtube.com/embed/DQkHAqJT1f4" glink="https://github.com/Mely07/Book-It-JS-Rails-Project" mlink="https://damely-tineo.medium.com/object-oriented-classes-8e13ffdf7b1d" tech="RAILS - JAVASCRIPT"/></div>
                    <div className="col-4"><ProjectCard link="https://www.youtube.com/embed/5nCsvMZMjTA" glink="https://github.com/Mely07/Giving-Back-Rails-Project" mlink="https://damely-tineo.medium.com/helper-methods-9143cc1826b5" tech="RAILS"/></div>
                    <div className="col-4"><ProjectCard link="https://www.youtube.com/embed/FpFcbaQwXis" glink="https://github.com/Mely07/Whats-In-My-Fridge-Sinatra-Project" mlink="https://damely-tineo.medium.com/cookies-and-sessions-a6473729fbb9" tech="SINATRA"/></div>
                    <div className="col-4"><ProjectCard link="https://youtube.com/embed/TBF4YtSy7oM" glink="https://github.com/Mely07/CLI-Data-Gem-Project" mlink="https://damely-tineo.medium.com/apis-mass-assignment-and-metaprogramming-a4a0fbcaba08" tech="RUBY"/></div>
                </div>
            </div>
        );
    }
}

export default Projects;