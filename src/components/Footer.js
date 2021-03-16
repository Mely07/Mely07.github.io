import React, { Component } from 'react';
import NavBar from './Navbar';

class Footer extends Component {
    render() {
        return (
            <footer class="text-muted nav justify-content-center">
                <NavBar />
                <p class="float-right">
                </p>
            </footer>
        );
    }
}

export default Footer;