import React, { Component } from 'react';
import About from './About';
import Projects from './Projects';
import Technologies from './Technologies';
import Footer from './Footer';
import NavBar from './Navbar';

class Home extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-light">
                    <div class="container-fluid" style={{ paddingLeft: '9%' }}>
                        <NavBar />
                    </div>
                </nav>

                <div className="d-none d-lg-block">
                    <div class="container-fluid mt-5 vh-100" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                        <div class="row justify-content-center align-items-center">
                            <div class="col-lg-6">
                                <About />
                            </div>
                            <div class="col-lg-6">
                                <img class="img-fluid" src="/portfolio2.png" alt="Portfolio Image" />
                            </div>
                        </div>
                    </div>
                    <a href="#tech">
                        <svg class="arrows">
                            <path class="a1" d="M0 0 L30 32 L60 0"></path>
                            <path class="a2" d="M0 20 L30 52 L60 20"></path>
                            <path class="a3" d="M0 40 L30 72 L60 40"></path>
                        </svg>
                    </a>
                </div>
                <div className="d-lg-none">
                    <div class="container-fluid mt-5" style={{ paddingLeft: '7%', paddingRight: '7%' }}>
                        <div class="row justify-content-center align-items-center">
                            <div class="col-lg-6">
                                <About />
                            </div>
                            <div class="col-lg-6">
                                <img class="img-fluid" src="/portfolio2.png" alt="Portfolio Image" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mb-5" id="tech">
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