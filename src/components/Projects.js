import React, { Component } from 'react';
import axios from 'axios';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }
  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://hackathon20191007122027.azurewebsites.net/api/data/mappedprojects',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
      .then((res) => {
        // console.log(res.data)

        const projects = res.data;
        this.setState({ projects });
        console.log(this.state)

      })

      .finally( () => {
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Projects!</h1>

        { this.state.projects.map(project =>
          <details>
            <summary>
            {project.jiraData.name}
            </summary>
            more things
          </details>
        )}

      </div>
    );
  }
}

export default Projects;