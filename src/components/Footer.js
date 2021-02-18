import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer class="text-muted text-center py-5">
                <div class="container">
                    <p class="float-right mb-1">
                        <a href="#" class="to-top">Back to top</a>
                    </p>
                    {/* <div>
                        <a aria-label="My LinkedIn" target="_blank" href="https://linkedin.com/in/damely-tineo/"><i class="fab fa-linkedin-in mr-3" aria-hidden="true" style={{ fontSize: "40px" }}></i></a>
                        <a aria-label="My Github" target="_blank" href="https://github.com/Mely07"><i class="icon fab fa-github mr-3" aria-hidden="true" style={{ fontSize: "40px" }}></i></a>
                        <a aria-label="My Medium" target="_blank" href="https://damely-tineo.medium.com/"><i class="icon fab fa-medium-m" aria-hidden="true" style={{ fontSize: "40px" }}></i></a>                                </div>
                    <a href="https://drive.google.com/file/d/18-nZDXpniIFWn6ITyHdictuTIpe5jOk4/view" target="_blank" class="btn btn-secondary mt-3">Resume</a> */}

                    {/* <a style={{ borderRightStyle: "solid" }}>Github</a>
                    <a style={{ borderRightStyle: "solid" }}>LinkedIn</a>
                    <a style={{ borderRightStyle: "solid" }}>Medium</a>
                    <a>Resume</a> */}
                    <span style={{ borderRightStyle: "solid", paddingRight: "22px" }}><a target="_blank" href="https://github.com/Mely07" style={{ fontSize: "22px", color: "pink" }}>Github</a></span>
                    <span style={{ borderRightStyle: "solid", paddingLeft: "22px", paddingRight: "22px" }}><a target="_blank" href="https://linkedin.com/in/damely-tineo/" style={{ fontSize: "22px", color: "pink" }}>LinkedIn</a></span>
                    <span style={{ borderRightStyle: "solid", paddingLeft: "22px", paddingRight: "22px" }}><a target="_blank" href="https://damely-tineo.medium.com/" style={{ fontSize: "22px", color: "pink" }}>Medium</a></span>
                    <span style={{ paddingLeft: "22px" }}><a href="https://drive.google.com/file/d/18-nZDXpniIFWn6ITyHdictuTIpe5jOk4/view" target="_blank" style={{ fontSize: "22px", color: "pink" }}>Resume</a></span>
                </div>
            </footer>
        );
    }
}

export default Footer;