import React, { Component } from 'react';
import About from './About';
import Projects from './Projects';
import Technologies from './Technologies';
import Footer from './Footer';

class Home extends Component {
    render() {
        return (
            <div>
                {/* <div class="container-fluid text-fluid img-fluid" style={{ width: "100%", height: "100vh", background: `url("https://img.paperform.co/fetch/f_auto,w_1800/https://s3.amazonaws.com/paperform-blog/2019/05/usabilitytesting.jpeg") no-repeat center center fixed`, backgroundSize: 'cover'}}> */}
                {/* <div class="container-fluid text-fluid img-fluid" style={{ width: "100%", height: "100vh", background: `url("bG3.jpg") center center fixed`, backgroundSize: 'cover'}}> */}
                {/* <div class="container-fluid text-fluid img-fluid" style={{ width: "100%", height: "100vh", background: `url("/background2.jpg") no-repeat center center fixed`, backgroundSize: 'cover'}}> */}
                {/* <div class="container-fluid text-fluid img-fluid" style={{ width: "100%", height: "100vh", background: `url("/bg_warm.jpg") no-repeat center center fixed`, backgroundSize: 'cover'}}> */}
                <div class="container-fluid text-fluid img-fluid" style={{ width: "50%", height: "100vh", background: `url("/x.jpg") no-repeat center center fixed`}}> 

                    <div className="container p-md-5" >
                        <header>
                            <ul className="nav justify-content-center" style={{fontSize: "1.2em" }}>
                                <li className="nav-item">
                                    <a className="nav-link active" style={{ color: 'teal' }} href="#about">ABOUT</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ color: 'teal' }} href="#projects">PROJECTS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ color: 'teal' }} target="_blank" href="https://drive.google.com/file/d/18-nZDXpniIFWn6ITyHdictuTIpe5jOk4/view">RESUME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{ color: 'teal' }} href="#projects">CONTACT</a>
                                </li>
                            </ul>
                        </header>
                    </div>
                    <a href="#about">
                        <svg class="arrows">
                            <path class="a1" d="M0 0 L30 32 L60 0"></path>
                            <path class="a2" d="M0 20 L30 52 L60 20"></path>
                            <path class="a3" d="M0 40 L30 72 L60 40"></path>
                        </svg>
                    </a>
                </div>

                {/* <div class="container-fluid text-fluid" style={{width: '100%', minHeight: '100vh', background: '#1a222c'}}>
                    <div class="header">
                            <h1 class="display-2 cursive">Damely Tineo</h1>
                            <h2 class="display-6 text-muted">Software Engineer</h2>
                        <div class="header-icons">
                            <a aria-label="My LinkedIn" target="_blank" href="#"><i style={{boxSizing: 'content-box', color: 'pink'}} class="icon fab fa-linkedin-in" aria-hidden="true"></i></a>
                            <a aria-label="My Github" target="_blank" href="#"><i style={{boxSizing: 'content-box', color: 'pink'}} class="icon fab fa-github" aria-hidden="true"></i></a>
                            <a aria-label="My Medium" target="_blank" href="#"><i style={{boxSizing: 'content-box', color: 'pink'}} class="icon fab fa-medium-m" aria-hidden="true"></i></a>
                        </div>
                        <div class="header-links">
                            <a class="link" href="#about" data-scroll="">About Me</a>
                            <a class="link" href="#projects" data-scroll="">Projects</a>
                        </div>
                    </div>
                </div> */}

                <div class="container mb-5" id="about">
                    <About />
                </div>
                <div class="container border-top mb-5 pt-3" id="tech">
                    <Technologies />
                </div>
                <div class="container border-top pt-5 text-center" id="projects">
                    <Projects />
                </div>
                <div class="container py-5">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home;