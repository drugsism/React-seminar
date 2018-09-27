import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import UserInfo from './components/UserInfo';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Main from './components/Main';
import Example from './components/Example';
import GetWorkout from './components/getWorkouts';


export default class Index extends Component {
    render() {
        return (
            <div className="container">
            <Router>
                <div>
                    <Link className="nav" to="/">Home</Link>
                    <Link className="nav" to="/userinfo">My Page</Link>
                    <Link className="nav" to="/getworkout">My Workouts</Link>


                    <Route path="/" exact component={Main} />
                    <Route path="/userinfo" exact component={UserInfo} />
                    <Route path="/getworkout" exact component={GetWorkout} />
                </div>
            </Router>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
