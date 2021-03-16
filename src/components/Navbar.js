import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <ul className="nav" style={{ fontSize: "1.2em", fontWeight: "300" }}>
                <li className="nav-item">
                    <a className="nav-link color-coral" target="_blank" href="https://github.com/Mely07">GitHub</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link color-coral" target="_blank" href="https://damely-tineo.medium.com/">Blog</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link color-coral" target="_blank" href="https://www.linkedin.com/in/damely-tineo/">LinkedIn</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link color-coral" target="_blank" href="https://docs.google.com/document/d/1uAiOlT5Wsin9bwxCtMWktBwnJwk6JQ6Pmn-tx8cby6A/view">Resume</a>
                </li>
            </ul>
        );
    }
}

export default NavBar;