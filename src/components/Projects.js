import React, { Component } from 'react';
import axios from 'axios';
class Projects extends Component {
    state = {
        todos: []
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://hackathon20191007122027.azurewebsites.net/api/data/alljiraprojects',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            console.log('something');
        });
    }
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <h1>Projects!</h1>
            </div>
        );
    }
}

export default Projects;