import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
import Iframe from 'react-iframe';

class About extends Component {

    render() {
        return (
            <div>
                <div className="container p-md-5 rounded text-center">
                    <div class="row py-md-5">
                        <div class="col">
                            <h1 class="display-4">Damely Tineo</h1>
                            <p class="lead text-muted">Hi there! My name is Damely Tineo. I am a recent bootcamp graduate looking to break into tech! I would love to work for an edtech company helping build the products/tools used to further educational opportunities for underrepresented populations.</p>
                            <p>
                                <a href="https://drive.google.com/file/d/18-nZDXpniIFWn6ITyHdictuTIpe5jOk4/view" class="btn btn-secondary my-2">Resume</a>
                            </p>
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