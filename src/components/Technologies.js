import React, { Component } from 'react';

class Technologies extends Component {
    render() {
        return (
            <div className="text-center">
                <div class="row mt-5">
                    <div class="col-md-4 text-center text-muted">
                        {/* <h3 class="mb-4">Design</h3> */}
                        <div class="mb-4">
                            <i class="devicon-bootstrap-plain colored" style={{ fontSize: "2em" }}></i>
                            <i class="devicon-html5-plain colored" style={{ fontSize: "2em" }}></i>
                            <i class="devicon-css3-plain colored" style={{ fontSize: "2em" }}></i>
                        </div>
                        <ul class="list-inline">
                            <li class="list-inline-item">HTML5</li>
                            <li class="list-inline-item">&bull; CSS</li>
                            <li class="list-inline-item">&bull; BOOTSTRAP</li>
                        </ul>
                    </div>

                    <div class="col-md-4 text-center text-muted" style={{ paddingLeft: "0", paddingRight: "0" }}>
                        {/* <h3 class="mb-4">Code</h3> */}
                        <div class="mb-4">
                            <i class="devicon-javascript-plain colored mr-1" style={{ fontSize: "2em" }}></i>
                            <i class="devicon-react-original colored" style={{ fontSize: "2em" }}></i>
                            <i class="devicon-nodejs-plain-wordmark colored" style={{ fontSize: "2em" }}></i>
                            <i class="devicon-ruby-plain colored" style={{ fontSize: "2em" }}></i>
                            <i class="devicon-rails-plain colored" style={{ fontSize: "2em" }}></i>
                        </div>
                        <ul class="list-inline">
                            <li class="list-inline-item">JAVASCRIPT</li>
                            <li class="list-inline-item">&bull; REACT</li>
                            <li class="list-inline-item">&bull; NODEJS</li>
                            <li class="list-inline-item">&bull; RUBY</li>
                            <li class="list-inline-item">&bull; RAILS</li>
                        </ul>
                    </div>

                    <div class="col-md-4 text-center text-muted">
                        {/* <h3 class="mb-4">Tools</h3> */}
                        <div class="mb-4">
                            <i class="devicon-visualstudio-plain colored" style={{ fontSize: "2em" }}></i>
                            <i class="devicon-git-plain colored" style={{ fontSize: "2em" }}></i>
                        </div>
                        <ul class="list-inline">
                            <li class="list-inline-item">VISUAL STUDIO</li>
                            <li class="list-inline-item">&bull; GIT</li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}

export default Technologies;