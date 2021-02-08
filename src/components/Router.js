import React, { Component } from 'react';
import NavBar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Blog from './Blog'


import { BrowserRouter as Switch, Route } from 'react-router-dom';

class Router extends Component {
    render() {
        return (
            <div >
                {/* <NavBar /> */}

                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/blog' component={Blog} />
                </Switch>
            </div>
        );
    }
}
export default Router;