import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer class="text-muted text-center py-5">
                <div class="container">
                    <p class="float-right mb-1">
                        <a href="#" class="to-top">Back to top</a>
                    </p>
                    <div>
                        <a aria-label="My LinkedIn" target="_blank" href="https://linkedin.com/in/damely-tineo/"><i class="fab fa-linkedin-in mr-3" aria-hidden="true" style={{ fontSize: "32px" }}></i></a>
                        <a aria-label="My Github" target="_blank" href="https://github.com/Mely07"><i class="icon fab fa-github mr-3" aria-hidden="true" style={{ fontSize: "32px" }}></i></a>
                        <a aria-label="My Medium" target="_blank" href="https://damely-tineo.medium.com/"><i class="icon fab fa-medium-m" aria-hidden="true" style={{ fontSize: "32px" }}></i></a>                                </div>
                    <a href="https://drive.google.com/file/d/18-nZDXpniIFWn6ITyHdictuTIpe5jOk4/view">Resume</a>
                </div>
            </footer>
        );
    }
}

export default Footer;