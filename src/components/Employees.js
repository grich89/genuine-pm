import React, { Component } from 'react';
import axios from 'axios';
class Employees extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: []
        }
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
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Employees;