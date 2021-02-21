import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
import Iframe from 'react-iframe';
import portfolioImage from '../images/portfolio.jpg'

class About extends Component {

    render() {
        return (
            <div>
                <div className="text-center">
                    <div class="row mt-5">
                        <div class="col">
                            <h1 class="display-2 cursive">Damely Tineo</h1>
                            <img src={portfolioImage} class="my-3 rounded-circle" alt="..." style={{width: '15%'}}></img>
                            <h2 class="display-6 text-muted">Software Engineer</h2>
                            <p>
                                <div class="btn-group">
                                    <a class="btn btn-outline-secondary mx-1 shadow-sm" href="https://github.com/Mely07" style={{ fontSize: "2em", color: "pink" }}><i className="fab fa-github-alt"></i></a>
                                    <a class="btn btn-outline-secondary mx-1 shadow-sm" href="https://damely-tineo.medium.com/" style={{ fontSize: "2em", color: "pink" }}><i className="fab fa-medium-m"></i></a>
                                    <a class="btn btn-outline-secondary mx-1 shadow-sm" href="https://linkedin.com/in/damely-tineo/" style={{ fontSize: "2em", color: "pink" }}><i className="fab fa-linkedin-in"></i></a>
                                </div>
                                <br/>
                                <a href="https://drive.google.com/file/d/18-nZDXpniIFWn6ITyHdictuTIpe5jOk4/view" target="_blank" class="btn btn-secondary mt-3">Resume</a>
                            </p>
                            <br />
                            <p class="lead text-muted">
                                I am a business administrator with 7+ years of expereince in business administration seeking to utilize past experiences and newfound JavaScript and Ruby on Rails web development skills to make an exciting career change.
                                I aspire to help build innovative, creative solutions to problems within a growth-minded organization. I also hope to help close the gender gap by encouraging more women to pursue careers in technology.
                                In additon to continue to __ I serve as a volunteer for:
                                To learn more about me you can email me at damely.tineo07@gmail.com </p>
                        </div>
                    </div>
                </div>


            </div>

        )
    }
}

export default About;