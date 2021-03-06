import React, { Component } from 'react';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Dashboard",
            user: {
            name: "Greg Rich",
            role: "Front End Developer",
            projects: [
                {
                "id": 1,
                client: "Edelman Intelligence",
                producer: "Nikki Heffernan",
                description: "Move site from Wordpress to SiteFactory.",
                status: "development"
                },
                {
                "id": 2,
                client: "Sandoz",
                producer: "Maggie",
                description: "New website for two prescription opiate addiction applications.",
                status: "live"
                }
            ],
            tickets: [
                {
                client: "BIDMC",
                producer: "Tonada",
                description: "Move logo.",
                status: "Not Started"
                },
                {
                client: "BIDMC",
                producer: "Tonada",
                description: "Build page.",
                status: "Not Started"
                },
                {
                client: "Sandoz",
                producer: "Maggie",
                description: "Troubleshoot form.",
                status: "Not Started"
                },
                {
                client: "Sandoz",
                producer: "Tonada",
                description: "Create new section.",
                status: "Not Started"
                }
            ]
            }
        }
    }
    render() {
    return (
        <div className="container">
            <h1>{this.state.title}</h1>
            <div className="dashboard">
                <div className="projects">
                <h2>Projects</h2>
                <div className="headings">
                    <div className="heading">Client</div>
                    <div className="heading">Producer</div>
                    <div className="heading">Description of Work</div>
                    <div className="heading">Status</div>
                </div>
                {this.state.user.projects.map((project) => (
                    <div className="project">
                    <div className="client">{project.client}</div>
                    <div className="producer">{project.producer}</div>
                    <div className="description">{project.description}</div>
                    <div className="status">{project.status}</div>
                    </div>
                ))}
                </div>
                <div className="tickets">
                <h2>Tickets</h2>
                <div className="headings">
                    <div className="heading">Client</div>
                    <div className="heading">Producer</div>
                    <div className="heading">Description of Work</div>
                    <div className="heading">Status</div>
                </div>
                {this.state.user.tickets.map((ticket) => (
                    <div className="ticket">
                    <div className="client">{ticket.client}</div>
                    <div className="producer">{ticket.producer}</div>
                    <div className="description">{ticket.description}</div>
                    <div className="status">{ticket.status}</div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
    }
}

export default Dashboard;