import React, { Component } from 'react';
import ProjectCard from './ProjectCard'
import givingBackImage from '../images/giving_back.png';
import storytellerImage from '../images/storyteller.png';
import fridgeAppImage from '../images/fridge_app.png';
import bookItImage from '../images/book_it.png';
import fluAppImage from '../images/flu_app.png';


class Projects extends Component {
    render() {
        return (
            <div>
                <h1 class="display-6 mb-5 text-center cursive" style={{ fontSize: "3em" }}>Projects</h1>
                <div className="row">
                    <div className="col-md-6 col-lg-4"><ProjectCard link="https://thestorytellerapplication.netlify.app/" glink="https://github.com/Mely07/Storyteller-React-Redux-Project" mlink="https://damely-tineo.medium.com/react-redux-and-store-state-7e4f4605ac8b" tech="RAILS - REACT - REDUX" title="Storyteller" summary="A single page story-building application built using CSS, Javascript, React, and Redux libraries on the frontend and a Ruby on Rails built API backend." image={storytellerImage} /></div>
                    <div className="col-md-6 col-lg-4"><ProjectCard link="https://www.youtube.com/embed/DQkHAqJT1f4" glink="https://github.com/Mely07/Book-It-JS-Rails-Project" mlink="https://damely-tineo.medium.com/object-oriented-classes-8e13ffdf7b1d" tech="RAILS - JAVASCRIPT" title="Book-It" summary="A single-page test-prep application, for students, grade 9 to 12, that provides a space to find and share honest reviews for books built using CSS and Javascript on the frontend and a Ruby on Rails built API backend." image={bookItImage} /></div>
                    <div className="col-md-6 col-lg-4"><ProjectCard link="https://www.youtube.com/embed/5nCsvMZMjTA" glink="https://github.com/Mely07/Giving-Back-Rails-Project" mlink="https://damely-tineo.medium.com/helper-methods-9143cc1826b5" tech="RAILS" title="Giving Back" summary="A content management web application built using the Rails framework, that allows businesses to showcase their philanthropic initiatives." image={givingBackImage} /></div>
                    <div className="col-md-6 col-lg-4"><ProjectCard link="https://www.youtube.com/embed/FpFcbaQwXis" glink="https://github.com/Mely07/Whats-In-My-Fridge-Sinatra-Project" mlink="https://damely-tineo.medium.com/cookies-and-sessions-a6473729fbb9" tech="SINATRA" title="What's in my Fridge?" summary="A CRUD, MVC web application that allows users to keep track of and share with other users the items in their refrigerators." image={fridgeAppImage} /></div>
                    <div className="col-md-6 col-lg-4"><ProjectCard link="https://youtube.com/embed/TBF4YtSy7oM" glink="https://github.com/Mely07/CLI-Data-Gem-Project" mlink="https://damely-tineo.medium.com/apis-mass-assignment-and-metaprogramming-a4a0fbcaba08" tech="RUBY" title="Flu Vaccination CLI" summary="A Command Line Interface to the NYC Open Data list of locations offering flu vaccination services in New York City." image={fluAppImage} /></div>
                </div>
            </div>
        );
    }
}

export default Projects;