import React, { Component } from 'react';

class About extends Component {
    state = {
        render: false
    }
    
    componentDidMount() {
        setTimeout(function () {
            this.setState({ render: true })
        }.bind(this), 2000)
    }

    render() {
        let renderContainer = false
        
        if (this.state.render) {
            renderContainer = <div className="container mt-5 p-md-5 rounded bg-light"><p>Hi there! My name is Damely Tineo. I am a recent bootcamp graduate looking to break into tech! I would love to work for an edtech company helping build the products/tools used to further educational opportunities for underrepresented populations. </p></div>
        }
        return (
            renderContainer
        )
    }
}

export default About;