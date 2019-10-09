import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
class Projects extends Component {
    state = {
        todos: []
    }
    componentDidMount() {
        fetch('https://hackathon20191007122027.azurewebsites.net/api/data/alljiraprojects')
        .then(res => res.text())
        .then((data) => {
          this.setState({ todos: data })
          console.log(this.state.todos)
        })
        .catch(console.log)
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