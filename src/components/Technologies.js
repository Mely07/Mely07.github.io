import React, { Component } from 'react';

class Technologies extends Component {
    render() {
        return (

            <div className="text-center container rounded mt-5 p-md-5 mb-4">
                <div className="row">
                    <div className="col">
                        DESIGN
                        <i class="devicon-bootstrap-plain colored" style={{fontSize: "3em"}}></i>
                        <i class="devicon-html5-plain-wordmark" style={{fontSize: "3em"}}></i>
                        <i class="devicon-css3-plain colored" style={{fontSize: "3em"}}></i>
                    </div>
                    <div className="col">
                        CODE
                        <i class="devicon-javascript-plain colored mr-1" style={{fontSize: "3em"}}></i>
                        <i class="devicon-react-original-wordmark colored" style={{fontSize: "3em"}}></i>
                        <i class="devicon-nodejs-plain-wordmark" style={{fontSize: "3em"}}></i>
                        <i class="devicon-ruby-plain-wordmark colored" style={{fontSize: "3em"}}></i>
                        <i class="devicon-rails-plain-wordmark colored" style={{fontSize: "3em"}}></i>
                    </div>
                    <div className="col">
                        TOOLS
                        <i class="devicon-visualstudio-plain colored" style={{fontSize: "3em"}}></i>
                        <i class="devicon-git-plain" style={{fontSize: "3em"}}></i>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Technologies;