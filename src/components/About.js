import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
import Iframe from 'react-iframe';
import portfolioImage from '../images/portfolio.jpg'

class About extends Component {

    render() {
        return (
            <div>
                <div className="">
                    <div class="row mt-5">
                        <div class="col">
                            <h1 class="display-3 cursive color-green">Damely Tineo</h1>
                            <h2 class="display-6 text-muted">Software Engineer</h2>
                            <p>
                                <div class="btn-group">
                                    <a class="btn btn-outline-secondary mx-1 shadow-sm" href="https://github.com/Mely07" style={{ fontSize: "2em", color: "coral" }}><i className="fab fa-github-alt"></i></a>
                                    <a class="btn btn-outline-secondary mx-1 shadow-sm" href="https://damely-tineo.medium.com/" style={{ fontSize: "2em", color: "coral" }}><i className="fab fa-medium-m"></i></a>
                                    <a class="btn btn-outline-secondary mx-1 shadow-sm" href="https://linkedin.com/in/damely-tineo/" style={{ fontSize: "2em", color: "coral" }}><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </p>

                            <p class="lead text-muted">
                                Problem Solver. Tech Enthusiast. Supporter of Mentorship and Diversity Programs.
                                <br/>
                                Business administrator turned JavaScript and Ruby on Rails Web Developer.
                                <br/>
                                To learn more about me you can email me at damely.tineo07@gmail.com
                            </p>
                            <p><a href="https://drive.google.com/file/d/18-nZDXpniIFWn6ITyHdictuTIpe5jOk4/view" target="_blank" class="btn btn-secondary mt-3">Resume</a></p>

                        </div>
                    </div>
                </div>


            </div>

        )
    }
}

export default About;