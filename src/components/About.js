import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
import Iframe from 'react-iframe';

class About extends Component {

    render() {
        return (
            <div>
                <div className="container rounded text-center">
                    <div class="row py-md-5">
                        <div class="col">
                            <h1 class="display-3">Damely Tineo</h1>
                            <h1 class="display-6">Software Engineer</h1>
                            <p>
                                <div>
                                    <a aria-label="My LinkedIn" target="_blank" href="https://linkedin.com/in/damely-tineo/"><i class="fab fa-linkedin-in mr-3" aria-hidden="true" style={{ fontSize: "32px" }}></i></a>
                                    <a aria-label="My Github" target="_blank" href="https://github.com/Mely07"><i class="icon fab fa-github mr-3" aria-hidden="true" style={{ fontSize: "32px" }}></i></a>
                                    <a aria-label="My Medium" target="_blank" href="https://damely-tineo.medium.com/"><i class="icon fab fa-medium-m" aria-hidden="true" style={{ fontSize: "32px" }}></i></a>                                </div>
                                <a href="https://drive.google.com/file/d/18-nZDXpniIFWn6ITyHdictuTIpe5jOk4/view">Resume</a>

                                {/* <i class="icon fab fa-linkedin-in fa-5x circle-icon" target="_blank" href="https://linkedin.com/in/damely-tineo/"/>
                                <i class="icon fab fa-github fa-5x circle-icon" />
                                <i class="icon fab fa-medium-m fa-5x circle-icon" /> */}
                                <a href="https://drive.google.com/file/d/18-nZDXpniIFWn6ITyHdictuTIpe5jOk4/view" class="btn btn-secondary mt-3">Resume</a>
                            </p>
                            <p class="lead text-muted">Hi there! My name is Damely Tineo. I am a recent bootcamp graduate looking to break into tech! I would love to work for an edtech company helping build the products/tools used to further educational opportunities for underrepresented populations.
                            Hi there! My name is Damely Tineo. I am a recent bootcamp graduate looking to break into tech! I would love to work for an edtech company helping build the products/tools used to further educational opportunities for underrepresented populations.</p>
                        </div>
                    </div>
                </div>

                {/* <a href="https://docs.google.com/document/d/1zbIQRbSCLLapoO1D801yR4fD0R_UOtWBgWm3ELbQmgI/export?format=pdf">RESUME</a>
                <embed src="/Resume.pdf" width="800px" height="1100px" /> */}

                {/* <Iframe className="responsive-iframe rounded text-center " src="https://drive.google.com/file/d/18-nZDXpniIFWn6ITyHdictuTIpe5jOk4/preview" width="50%%" height="50%" /> */}
            </div>

        )
    }
}

export default About;