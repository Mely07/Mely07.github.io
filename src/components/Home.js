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
                <div class="container-fluid pt-4" style={{paddingLeft:'2%'}}>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-11"><NavBar /></div>
                    </div>
                    
                </div>
                <div>
                    <div class="container-fluid" style={{ paddingLeft: '3%', paddingRight: '3%' }}>
                        <div class="row justify-content-center align-items-center">
                            <div class="col-md-1"></div>
                            <div class="col-md-5 pl-0" style={{paddingRight: "0px"}}>
                                <img class="img-fluid" src="/bg4.svg" alt="Portfolio Image" />
                            </div>
                            <div class="col-md-5 pr-0">
                                <About />
                            </div>
                            <div class="col-md-1"></div>
                        </div>
                    </div>
                </div>

                <div class="container mb-5 border-top" id="tech">
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