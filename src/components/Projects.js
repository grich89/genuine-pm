import React, { Component } from 'react';
import axios from 'axios';
class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "Projects",
            projects: []
        }
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
        .then((response) => {
            console.log(response)
            this.setState({
                projects: response.data
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    render() {
        return (
            <div className="container">
                <h1>Projects</h1>
                <ul>
                    { this.state.projects.map(project => <li>{project.name}</li>)}
                </ul>
                {JSON.stringify(this.state.projects)}
            </div>
        );
    }
}

export default Projects;