import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
import Iframe from 'react-iframe';
import portfolioImage from '../images/portfolio.jpg'

class About extends Component {

    render() {
        return (
            <div>
                <div className="">
                    <div class="row">
                        <div class="col">
                            <h1 class="display-3 cursive color-green mb-0">Damely Tineo</h1>
                            <h2 class="display-6 text-muted">Software Engineer</h2>
                            <p>
                                <div>
                                    <a class="btn btn-outline-secondary mx-1 shadow-sm" href="https://github.com/Mely07" style={{ fontSize: "1.5em", color: "coral" }}><i className="fab fa-github-alt"></i></a>
                                    <a class="btn btn-outline-secondary mx-1 shadow-sm" href="https://damely-tineo.medium.com/" style={{ fontSize: "1.5em", color: "coral" }}><i className="fab fa-medium-m"></i></a>
                                    <a class="btn btn-outline-secondary mx-1 shadow-sm" href="https://linkedin.com/in/damely-tineo/" style={{ fontSize: "1.5em", color: "coral" }}><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </p>

                            <p class="lead text-muted">
                                Problem Solver. Tech Enthusiast. Supporter of Mentorship and Diversity Initiatives.
                                <br/>
            
                                To learn more about me you can email me at <a href="mailto:damely.tineo07@gmail.com?subject=Connecting via Portfolio" className="text-muted" style={{textDecoration: 'underline'}}>damely.tineo07@gmail.com</a>
                            </p>
                            <h4><a href="https://drive.google.com/file/d/18-nZDXpniIFWn6ITyHdictuTIpe5jOk4/view" target="_blank" className="btn btn-outline-secondary">Resume</a></h4>

                        </div>
                    </div>
                </div>


            </div>

        )
    }
}

export default About;