import React, { Component } from 'react';
import NavBar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects'
import Experience from './Experience'
import Contact from './Contact'

import { BrowserRouter as Switch, Route } from 'react-router-dom';

class Router extends Component {
    render() {
        return (
            <div >
                <NavBar />

                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/experience' component={Experience} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/blog' component={() => {
                        window.location.href = 'https://damely-tineo.medium.com/';
                        return null;
                    }} />
                </Switch>
            </div>
        );
    }
}
export default Router;