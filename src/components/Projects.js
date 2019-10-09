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
        const projects = res.data;
        this.setState({ projects });
      })

      .finally( () => {
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Projects!</h1>

        { this.state.projects.map(project =>
          <details key={"project_" + project.jiraProjectId} id={"project_" + project.jiraProjectId}>
            <summary>
            {project.jiraData.name}
            </summary>

            <p>
              Project users:
            </p>
            <ul>
              { project.participatingUsers.map(user => <li key={"user_" + user.id}>{user.fullName}</li>)}
            </ul>

            <p>
              Useful Links:
            </p>
            <ul>
              <li>
                JIRA: <a href={"https://genuine.atlassian.net/projects/"+project.jiraData.key} target="_blank" rel="noopener noreferrer ">{"https://genuine.atlassian.net/projects/"+project.jiraData.key}</a>
              </li>
              <li>
                MavenLink Project: <a href={project.timesheetLink} target="_blank" rel="noopener noreferrer ">{project.timesheetLink}</a>
              </li>
            </ul>
          </details>
        )}

      </div>
    );
  }
}

export default Projects;
