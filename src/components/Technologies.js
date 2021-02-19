import React, { Component } from 'react';

class Technologies extends Component {
    render() {
        return (
            <div className="text-center container rounded mt-5 p-md-5 mb-4 border-top" style={{paddingBottom: "100px"}}>
                <div class="row mt-4">
                    <hr style={{ borderTop: "solid #black" }} />
                    <div class="col-md text-center" style={{ paddingLeft: "0", paddingRight: "0" }}>
                        <h2 style={{ marginBottom: "32px" }}>Design</h2>
                        <div style={{ marginBottom: "32px" }}>
                            <i class="devicon-bootstrap-plain colored" style={{ fontSize: "3.5em" }}></i>
                            <i class="devicon-html5-plain-wordmark" style={{ fontSize: "3.5em" }}></i>
                            <i class="devicon-css3-plain colored" style={{ fontSize: "3.5em" }}></i>
                        </div>
                        <p>DESIGN DESIGN DESIGN DESIGN DESIGN </p>
                    </div>

                    <div class="col-md text-center" style={{ paddingLeft: "0", paddingRight: "0" }}>
                        <h2 style={{ marginBottom: "32px" }}>Code</h2>
                        <div style={{ marginBottom: "32px" }}>
                            <i class="devicon-javascript-plain colored mr-1" style={{ fontSize: "3.5em" }}></i>
                            <i class="devicon-react-original-wordmark colored" style={{ fontSize: "3.5em" }}></i>
                            <i class="devicon-nodejs-plain-wordmark" style={{ fontSize: "3.5em" }}></i>
                            <i class="devicon-ruby-plain-wordmark colored" style={{ fontSize: "3.5em" }}></i>
                            <i class="devicon-rails-plain-wordmark colored" style={{ fontSize: "3.5em" }}></i>
                        </div>
                        <p>CODE CODE CODE CODE CODE </p>
                    </div>

                    <div class="col-md text-center" style={{ paddingLeft: "0", paddingRight: "0" }}>
                        <h2 style={{ marginBottom: "32px" }}>Tools</h2>
                        <div style={{ marginBottom: "32px" }}>
                            <i class="devicon-visualstudio-plain colored" style={{ fontSize: "3.5em" }}></i>
                            <i class="devicon-git-plain" style={{ fontSize: "3.5em" }}></i>
                        </div>
                        <p>TOOLS TOOLS TOOLS  TOOLS TOOLS </p>
                    </div>
                </div>
            </div>

        )
    }
}

export default Technologies;