import React, { Component } from 'react';
import ProjectCard from './ProjectCard'
import givingBackImage from '../images/giving_back.png';

class Projects extends Component {
    render() {
        return (
            <div className="album bg-light" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
                <div className="container">
                    {/* <h2 class="display-6 mb-4 text-center">PROJECTS</h2> */}

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col" style={{ paddingLeft: "8px", paddingRight: "8px", paddingBottom: "16px" }}><ProjectCard link="https://thestorytellerapplication.netlify.app/" glink="https://github.com/Mely07/Storyteller-React-Redux-Project" mlink="https://damely-tineo.medium.com/react-redux-and-store-state-7e4f4605ac8b" tech="RAILS - REACT - REDUX" title="Storyteller" summary="A single page story-building application built using CSS, Javascript, React, and Redux libraries on the frontend and a Ruby on Rails built API backend." /></div>
                        <div className="col" style={{ paddingLeft: "8px", paddingRight: "8px", paddingBottom: "16px" }}><ProjectCard link="https://www.youtube.com/embed/DQkHAqJT1f4" glink="https://github.com/Mely07/Book-It-JS-Rails-Project" mlink="https://damely-tineo.medium.com/object-oriented-classes-8e13ffdf7b1d" tech="RAILS - JAVASCRIPT" title="Book-It" summary="A single-page test-prep application, for students, grade 9 to 12, that provides a space to find and share honest reviews for books built using CSS and Javascript on the frontend and a Ruby on Rails built API backend." /></div>
                        <div className="col" style={{ paddingLeft: "8px", paddingRight: "8px", paddingBottom: "16px" }}><ProjectCard link="https://www.youtube.com/embed/5nCsvMZMjTA" glink="https://github.com/Mely07/Giving-Back-Rails-Project" mlink="https://damely-tineo.medium.com/helper-methods-9143cc1826b5" tech="RAILS" title="Giving Back" summary="A content management web application built using the Rails framework, that allows businesses to showcase their philanthropic initiatives." /></div>
                        <div className="col" style={{ paddingLeft: "8px", paddingRight: "8px", paddingBottom: "16px" }}><ProjectCard link="https://www.youtube.com/embed/FpFcbaQwXis" glink="https://github.com/Mely07/Whats-In-My-Fridge-Sinatra-Project" mlink="https://damely-tineo.medium.com/cookies-and-sessions-a6473729fbb9" tech="SINATRA" title="What's in my Fridge?" summary="A CRUD, MVC web application that allows users to keep track of and share with other users the items in their refrigerators." /></div>
                        <div className="col" style={{ paddingLeft: "8px", paddingRight: "8px", paddingBottom: "16px" }}><ProjectCard link="https://youtube.com/embed/TBF4YtSy7oM" glink="https://github.com/Mely07/CLI-Data-Gem-Project" mlink="https://damely-tineo.medium.com/apis-mass-assignment-and-metaprogramming-a4a0fbcaba08" tech="RUBY" summary="A Command Line Interface to the NYC Open Data list of locations offering flu vaccination services in New York City." /></div>
                    </div>
                </div>

                <div className="container">
                    <div class="row text-center">
                        <div class="col-lg-4">
                            <img src={givingBackImage} width="140" height="140" class="rounded-circle" alt="..." />
                            <h2>Giving Back</h2>
                            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                            <a class="btn btn-secondary mx-1" href="#" style={{ fontSize: "2em", color: "pink" }}><i className="fab fa-github-alt"></i></a>
                            <a class="btn btn-secondary mx-1" href="#" style={{ fontSize: "2em", color: "pink" }}><i className="fab fa-medium-m"></i></a>
                        </div>
                        <div class="col-lg-4">
                            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                            <h2>Storyteller</h2>
                            <p>A single page story-building application built using CSS, Javascript, React, and Redux libraries on the frontend and a Ruby on Rails built API backend.</p>
                            <a class="btn btn-outline-secondary mx-1" href="#" style={{ fontSize: "2em", color: "pink" }}><i className="fab fa-github-alt"></i></a>
                            <a class="btn btn-outline-secondary mx-1" href="#" style={{ fontSize: "2em", color: "pink" }}><i className="fab fa-medium-m"></i></a>
                        </div>
                        <div class="col-lg-4">
                            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                            <h2>What's in my Fridge?</h2>
                            <p>And lastly this, the third column of representative placeholder content.</p>
                            <a class="btn btn-secondary mx-1" href="#" style={{ fontSize: "2em", color: "pink" }}><i className="fab fa-github-alt"></i></a>
                            <a class="btn btn-secondary mx-1" href="#" style={{ fontSize: "2em", color: "pink" }}><i className="fab fa-medium-m"></i></a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Projects;