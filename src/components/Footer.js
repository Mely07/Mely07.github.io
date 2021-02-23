import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer class="text-muted text-center">
                <div class="row">
                    <span class="col-md-1"></span>
                    <span class="col-md-2 mb-5" style={{ borderRight: '3px solid #6c757d'}}><a target="_blank" href="https://github.com/Mely07" style={{ fontSize: "1.5rem", color: 'teal'}}>Github</a></span>
                    <span class="col-md-2 mb-5" style={{ borderRight: '3px solid #6c757d'}}><a target="_blank" href="https://linkedin.com/in/damely-tineo/" style={{ fontSize: "1.5rem", color: "teal" }}>LinkedIn</a></span>
                    <span class="col-md-2 mb-5" style={{ borderRight: '3px solid #6c757d'}}><a target="_blank" href="https://damely-tineo.medium.com/" style={{ fontSize: "1.5rem", color: "teal" }}>Medium</a></span>
                    <span class="col-md-2 mb-5"><a href="https://drive.google.com/file/d/18-nZDXpniIFWn6ITyHdictuTIpe5jOk4/view" target="_blank" style={{ fontSize: "1.5rem", color: "teal" }}>Resume</a></span>
                    <span class="col-md-2">
                        <a href="#" class="to-top"></a>
                        <p class="text-muted">Return to top</p>
                    </span>
                    <span class="col-md-1"></span>
                </div>
                {/* <span class="pr-4 pt-2" style={{ borderRight: '3px solid #6c757d'}}><a target="_blank" href="https://github.com/Mely07" style={{ fontSize: "2rem", color: 'teal'}}>Github</a></span>
                <span class="px-4 pt-2" style={{ borderRight: '3px solid #6c757d'}}><a target="_blank" href="https://linkedin.com/in/damely-tineo/" style={{ fontSize: "2rem", color: "teal" }}>LinkedIn</a></span>
                <span class="px-4 pt-2" style={{ borderRight: '3px solid #6c757d'}}><a target="_blank" href="https://damely-tineo.medium.com/" style={{ fontSize: "2rem", color: "teal" }}>Medium</a></span>
                <span class="pl-4"><a href="https://drive.google.com/file/d/18-nZDXpniIFWn6ITyHdictuTIpe5jOk4/view" target="_blank" style={{ fontSize: "2rem", color: "teal" }}>Resume</a></span> */}

                <p class="float-right">

                </p>
            </footer>
        );
    }
}

export default Footer;