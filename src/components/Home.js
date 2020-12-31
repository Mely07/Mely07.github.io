import React, { Component } from 'react';
import About from './About'

class Home extends Component {

    componentDidMount() {
        const x = document.getElementsByTagName("body")[0];
        x.style = 'background-image: url("https://img.paperform.co/fetch/f_auto,w_1800/https://s3.amazonaws.com/paperform-blog/2019/05/usabilitytesting.jpeg"); background-size: 100%';
    }

    componentWillUnmount() {
        const x = document.getElementsByTagName("body")[0];
        x.style = '';
    }

    render() {
        return (
            <div>
                <About />
            </div>
        );
    }
}

export default Home;