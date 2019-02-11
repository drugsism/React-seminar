import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Echo from 'laravel-echo'
window.io = require('socket.io-client');

// if (typeof io !== 'undefined') {
//     window.Echo = new Echo({
//         broadcaster: 'socket.io',
//         host: window.location.hostname + ':6001',
//     });
// }

export default class Main extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Main Component</div>

                            <div className="card-body">
                            Main component!
                            </div>

                            
                        </div>
                        <div>
                            <div className="card-body">
                                <a href="/login">Laravel Router</a>
                            </div>
                            <div className="card-body">
                                 <a href="/">React Router</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Main />, document.getElementById('example'));
}
