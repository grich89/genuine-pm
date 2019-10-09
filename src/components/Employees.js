import React, { Component } from 'react';
import axios from 'axios';
class Employees extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: [],
            employeeData: [],
            profileOpened: false
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
                profileOpened: true,
                employeeData: response.data
            })
        })
    }
    render() {
        return (
            <div className="container">
                <h1>Employees!</h1>
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
                            {employee.emailAddress}
                            <button onClick={() => this.openProfile(employee.id)}>Open Profile</button>

                            {this.state.profileOpened ?
                                <div className="profile">
                                    {this.state.employeeData.projectData ?
                                        this.state.employeeData.projectData.map(project =>
                                            <div class="profile-details" key={project.id}>
                                                <p>Name: {project.key}.</p>
                                            </div>
                                        )
                                    : <p>No data.</p>}
                                </div>
                            : null}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Employees;