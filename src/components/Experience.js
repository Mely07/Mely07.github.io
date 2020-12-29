import React, { Component } from 'react';
import { FaGraduationCap } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { MdWork } from "react-icons/md"

class Experience extends Component {
    render() {
        return (
            <div className="container mt-5">
                <img src="https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg" />

                <div className="bg-light">
                    <h4><MdWork />  WORK EXPERIENCE</h4>
                    Director of Business St. Francis Xavier Church​, New York, NY 01/2016 – Present
                <br />
                    Administrative Assistant St. Francis Xavier Church​, New York, NY 06/2013 – 12/2015
                </div>
                <div>
                    <h4><FaGraduationCap />  EDUCATION</h4>
                    Flatiron School​, New York, NY (Online) Full Stack Web Development, Ruby on Rails and JavaScript Coding Program
                <br />
                    Villanova University, Graduate School of Business​, Villanova, PA Master of Science (MS) in Church Business Management
                <br />
                    New York University, College of Arts & Science​, New York, NY Bachelor of Science (BS) in Psychology, Minor in Social Work
                </div>
                <div className="bg-light" >
                    <h4><FaHandsHelping />  VOLUNTEER EXPERIENCE</h4>
                    Girls Who Code​ ​Co-Facilitator​ at Madison Square Boys & Girls Club Pinkerton
                <br />
                    The Latinas On The Verge of Excellence (L.O.V.E.) Mentorship Program​ ​Young Professionals Board Member
                </div>
            </div>

        );
    }
}

export default Experience;