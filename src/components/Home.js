import React, { Component } from 'react';
import About from './About';
import Projects from './Projects'
import Technologies from './Technologies';

class Home extends Component {
    render() {
        return (
            <div>
                <div class="container-fluid text-fluid" style={{ width: "100%", height: "100vh", backgroundImage: `url("https://img.paperform.co/fetch/f_auto,w_1800/https://s3.amazonaws.com/paperform-blog/2019/05/usabilitytesting.jpeg")` }}>
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
            </div>
        );
    }
}

export default Home;