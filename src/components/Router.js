import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter as Switch, Route } from 'react-router-dom';


class Router extends Component {
    render() {
        return (
            <div >
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </div>
        );
    }
}
export default Router;