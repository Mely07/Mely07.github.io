import React, { Component } from 'react';
import ProjectCard from './ProjectCard'

class Projects extends Component {
    render() {
        return (
            <div className="album py-5 bg-light">
                <div className="container">
                    
                    {/* <h2 class="display-6 mb-4 text-center">PROJECTS</h2> */}

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col" style={{paddingLeft: "8px", paddingRight: "8px", paddingBottom: "16px"}}><ProjectCard link="https://thestorytellerapplication.netlify.app/" glink="https://github.com/Mely07/Storyteller-React-Redux-Project" mlink="https://damely-tineo.medium.com/react-redux-and-store-state-7e4f4605ac8b" tech="RAILS - REACT - REDUX" title="Storyteller" /></div>
                        <div className="col" style={{paddingLeft: "8px", paddingRight: "8px", paddingBottom: "16px"}}><ProjectCard link="https://www.youtube.com/embed/DQkHAqJT1f4" glink="https://github.com/Mely07/Book-It-JS-Rails-Project" mlink="https://damely-tineo.medium.com/object-oriented-classes-8e13ffdf7b1d" tech="RAILS - JAVASCRIPT" title="Book-It" /></div>
                        <div className="col" style={{paddingLeft: "8px", paddingRight: "8px", paddingBottom: "16px"}}><ProjectCard link="https://www.youtube.com/embed/5nCsvMZMjTA" glink="https://github.com/Mely07/Giving-Back-Rails-Project" mlink="https://damely-tineo.medium.com/helper-methods-9143cc1826b5" tech="RAILS" title="Giving Back" /></div>
                        <div className="col" style={{paddingLeft: "8px", paddingRight: "8px", paddingBottom: "16px"}}><ProjectCard link="https://www.youtube.com/embed/FpFcbaQwXis" glink="https://github.com/Mely07/Whats-In-My-Fridge-Sinatra-Project" mlink="https://damely-tineo.medium.com/cookies-and-sessions-a6473729fbb9" tech="SINATRA" title="What's in my Fridge?" /></div>
                        <div className="col" style={{paddingLeft: "8px", paddingRight: "8px", paddingBottom: "16px"}}><ProjectCard link="https://youtube.com/embed/TBF4YtSy7oM" glink="https://github.com/Mely07/CLI-Data-Gem-Project" mlink="https://damely-tineo.medium.com/apis-mass-assignment-and-metaprogramming-a4a0fbcaba08" tech="RUBY" /></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;