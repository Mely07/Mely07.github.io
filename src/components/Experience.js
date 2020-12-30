import React, { Component } from 'react';
import { FaGraduationCap } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { MdWork } from "react-icons/md"

class Experience extends Component {

    render() {
        return (

            <div className="container rounded mt-5 p-md-5 mb-4 rounded bg-light">
                <h1 center>Experience</h1>
                {/* <img src="https://www.clipartkey.com/mpngs/m/33-339256_volunteering-symbol-png.png" /> */}
                <br />
                <div className="row">
                    <div className="col-3">IMAGE HERE</div>
                    
                    <div className="col-9 mb-4 border-left">
                        <h5><MdWork style={{ color: '#E9C46A' }} />  WORK</h5>
                        <li><b>Director of Business</b> <i>St. Francis Xavier Church​ </i> 01/2016 – Present</li>

                        <li><b>Administrative Assistant </b><i>St. Francis Xavier Church​ </i> 06/2013 – 12/2015</li>
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">IMAGE HERE</div>

                    <div className="col-9 mb-4 border-left">
                        <h5><FaGraduationCap style={{ color: '#DDA0DD' }} />  EDUCATION</h5>
                        <li><b>Flatiron School​</b>,  <i>Full Stack Web Development, Ruby on Rails and JavaScript Coding Program</i></li>

                        <li><b>Villanova University</b>, Graduate School of Business​ <i>Master of Science in Church Business Management</i></li>

                        <li> <b>New York University</b>, College of Arts and Science​ <i>Bachelor of Science in Psychology, Minor in Social Work</i></li>
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">IMAGE HERE</div>

                    <div className="col-9 border-left">
                        <h5><FaHandsHelping style={{ color: '#3498DB' }} />  VOLUNTEER </h5>
                        <li><b>Girls Who Code​ ​</b>Co-Facilitator​ at <i>Madison Square Boys and Girls Club Pinkerton</i></li>

                        <li><b>The Latinas On The Verge of Excellence (L.O.V.E.) Mentorship Program​ ​</b>Young Professionals Board Co-Founder</li>
                    </div>
                </div>
            </div>

        );
    }
}

export default Experience;