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