import React, { Component } from 'react';
import NavBar from './Navbar';
import Home from './Home'

export default class IntroComponent extends Component {
    render() {
        return (
            <div >
                <NavBar />
                <Home />
            </div>
        );
    }
}