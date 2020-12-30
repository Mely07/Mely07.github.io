import React, { Component } from 'react';
import { FaGraduationCap } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { MdWork } from "react-icons/md"

class Experience extends Component {

    render() {
        return (

            <div className="container rounded mt-5 p-md-5 mb-4 rounded bg-light">

                <img src="https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg" />

                <div className="container rounded mb-4">
                    <h5><MdWork style={{ color: '#E9C46A' }} /> WORK EXPERIENCE</h5>
                    Director of Business St. Francis Xavier Church​, New York, NY 01/2016 – Present
                <br />
                    Administrative Assistant St. Francis Xavier Church​, New York, NY 06/2013 – 12/2015
                </div>


                <div className="container rounded mb-4">
                    <h5><FaGraduationCap style={{ color: '#DDA0DD' }} />  EDUCATION</h5>
                    Flatiron School​, New York, NY (Online) Full Stack Web Development, Ruby on Rails and JavaScript Coding Program
                <br />
                    Villanova University, Graduate School of Business​, Villanova, PA Master of Science (MS) in Church Business Management
                <br />
                    New York University, College of Arts and Science​, New York, NY Bachelor of Science (BS) in Psychology, Minor in Social Work
                </div>


                <div className="container rounded $orange-100">
                    <h5><FaHandsHelping style={{ color: '#3498DB' }} />  VOLUNTEER EXPERIENCE</h5>
                    Girls Who Code​ ​Co-Facilitator​ at Madison Square Boys and Girls Club Pinkerton
                <br />
                    The Latinas On The Verge of Excellence (L.O.V.E.) Mentorship Program​ ​Young Professionals Board Member
                </div>
            </div>

        );
    }
}

export default Experience;