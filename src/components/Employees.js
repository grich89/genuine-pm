import React, { Component } from 'react';
import axios from 'axios';
import './Employees.scss';

class Employees extends Component {
  constructor(props) {
      super(props);

        this.state = {
            employees: [],
            employeeData: [],
            projectData: [],
            profileOpened: false,
        }

        this.openProfile = this.openProfile.bind(this);
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://hackathon20191007122027.azurewebsites.net/api/data/allusers',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
        .then((response) => {
            console.log(response)
            this.setState({
                employees: response.data
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    openProfile(id) {
        console.log(id);
        axios.get(`https://hackathon20191007122027.azurewebsites.net/api/data/projectsforuser/${id}`).then((response) => {
            console.log(response);
            this.setState({
                employeeData: response.data,
                profileOpened: true
            })
        })
    }
    closeProfile() {
        this.setState({
            profileOpened: false
        })
    }
    expandProject(id) {
        axios({
            method: "get",
            url: `https://cors-anywhere.herokuapp.com/https://genuine.atlassian.net/rest/api/2/project/${id}`,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then((response) => {
            console.log(response);
            this.setState({
                projectData: response.data
            })
        })
    }
    render() {
        return (
            <div className="container">
                <h1>Employees</h1>
                {this.state.profileOpened ?
                    <div className="profile">
                        <button onClick={() => this.closeProfile()} className="close">X</button>
                        {this.state.employeeData.projectData ?
                            this.state.employeeData.projectData.map(project =>
                                <div className="profile-details" key={project.id}>
                                    <p>
                                        <button onClick={() => this.expandProject(project.id)} rel="noopener noreferrer" target="_blank">
                                           {project.name}
                                        </button>
                                    </p>
                                </div>
                            )
                        : <p>No data.</p>}
                    </div>
                : null}

                <ul className="employee-grid">
                    { this.state.employees.map(employee =>
                        <li key={employee.id}>
                            <div className="employee-header">
                                <img alt={employee.fullName} src={employee.photoPath} />
                                <div className="employee-stuff">
                                    <h2>{employee.fullName}</h2>
                                    <h3>{employee.headline}</h3>
                                </div>
                            </div>
                            <div className="employee-footer">
                                <span className="email"><a href={"mailto:" + employee.emailAddress}>{employee.emailAddress}</a></span>
                                <button className="openProfile" onClick={() => this.openProfile(employee.id)}>Open Profile</button>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Employees;
