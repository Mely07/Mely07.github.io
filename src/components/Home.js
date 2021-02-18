import React, { Component } from 'react';
import About from './About';
import Projects from './Projects';
import Technologies from './Technologies';
import Footer from './Footer'

class Home extends Component {
    render() {
        return (
            <div>
                <div class="container-fluid text-fluid" style={{ width: "100%", height: "100vh", backgroundImage: `url("https://img.paperform.co/fetch/f_auto,w_1800/https://s3.amazonaws.com/paperform-blog/2019/05/usabilitytesting.jpeg")` }}>
                    <div className="container p-md-5" >
                        <header>
                            {/* <nav className="nav nav-masthead"> link1</nav>
                            <nav> link2</nav>
                            <nav> link3</nav> */}
                            <ul className="nav justify-content-center">
                                <li className="nav-item">
                                    <a className="nav-link" href="#about" style={{ color: 'white' }}>About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#projects" style={{ color: 'white' }}>Projects</a>
                                </li>
                                <h1>DT</h1>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{ color: 'white' }}>Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{ color: 'white' }}>Link</a>
                                </li>
                            </ul>
                        </header>

                    </div>

                    <svg class="arrows">
                        <path class="a1" d="M0 0 L30 32 L60 0"></path>
                        <path class="a2" d="M0 20 L30 52 L60 20"></path>
                        <path class="a3" d="M0 40 L30 72 L60 40"></path>
                    </svg>
                </div>
                <div>
                    <About />
                </div>
                <div>
                    <Technologies />
                </div>
                <div>
                    <Projects />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home;