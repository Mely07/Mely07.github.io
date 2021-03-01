import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            // <ul className="nav justify-content-center" style={{ fontSize: "1.2em" }}>
            <ul className="nav" style={{ fontSize: "1.2em" }}>
                <li className="nav-item">
                    <a className="nav-link color-coral" href="#projects">PROJECTS</a>
                </li><li className="nav-item">
                    <a className="nav-link color-coral" target="_blank" href="https://damely-tineo.medium.com/">BLOG</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link color-coral" target="_blank" href="https://drive.google.com/file/d/18-nZDXpniIFWn6ITyHdictuTIpe5jOk4/view">RESUME</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link color-coral" href="mailto:damely.tineo07@gmail.com?subject=Connecting via Portfolio">CONTACT</a>
                </li>
            </ul>
        );
    }
}

export default NavBar;