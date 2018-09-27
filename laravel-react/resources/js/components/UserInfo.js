import React, { Component } from 'react';
import axios from 'axios';

const CDN_URL = "https://modootraining.co.kr/";

export default class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            userLogin: '',
            photo: '',
            gender: ''
        }
    }

    componentWillMount() {
        axios.get('/api/test').then(response => {
            // console.log(response)
            this.setState({
                name: response.data.username,
                userLogin: response.data.userLogin,
                photo: response.data.photo,
                gender: response.data.gender,
                birthday: response.data.birthday

            })
        }).catch(error => {
            console.log(error);
        }) 
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="user-info">
                        <div className="user-pic-info"><img src={CDN_URL + this.state.photo} /></div>
                        <ul className="col-md-5  list-group">
                            <li className="list-group-item">이름: {this.state.name}</li>
                            <li className="list-group-item">아이디: {this.state.userLogin}</li>
                            <li className="list-group-item">생년월일: {this.state.birthday}</li>
                            <li className="list-group-item">성별: {this.state.gender == "M" ? "남" : "여"}</li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}

// if (document.getElementById('example')) {
//     ReactDOM.render(<UserInfo />, document.getElementById('example'));
// }
