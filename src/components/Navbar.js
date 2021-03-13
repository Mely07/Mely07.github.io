import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            // <ul className="nav justify-content-center" style={{ fontSize: "1.2em" }}>
            <ul className="nav" style={{ fontSize: "1.2em", fontWeight: "300" }}>
                <li className="nav-item">
                    <a className="nav-link color-coral" target="_blank" href="https://github.com/Mely07">Github</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link color-coral" target="_blank" href="https://damely-tineo.medium.com/">Blog</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link color-coral" target="_blank" href="https://www.linkedin.com/in/damely-tineo/">Linkedin</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link color-coral" target="_blank" href="https://drive.google.com/file/d/18-nZDXpniIFWn6ITyHdictuTIpe5jOk4/view">Resume</a>
                </li>
            </ul>
        );
    }
}

export default NavBar;