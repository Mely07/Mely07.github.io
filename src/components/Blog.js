import React, { Component } from 'react';

class Blog extends Component {
    state = {
        render: false
    }

    componentDidMount() {
        setTimeout(function () {
            this.setState({ render: true })
        }.bind(this), 1000)
    }

    render() {
        let renderContainer = false

        renderContainer = <div className="container mt-5 p-md-5 rounded bg-light"><p>Redirecting to Medium... </p> <img width="50%" src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png" /></div>

        if (this.state.render) {
            window.location.href = "https://damely-tineo.medium.com/"
        }
        return (
            renderContainer
        )
    }
}

export default Blog;