import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './App.scss';

import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Tasks from './components/Tasks';
import Employees from './components/Employees';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nav: [
        {
          name: "Dashboard",
          path: "/"
        },
        {
          name: "Projects",
          path: "/projects"
        },
        {
          name: "Tasks",
          path: "/tasks"
        },
        {
          name: "Employees",
          path: "/employees"
        }
      ],
      user: {
        name: "Greg Rich"
      }
    }
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <header className="header">
              <nav className="nav">
                <ul>
                {this.state.nav.map((item) => (
                  <li>
                    <NavLink to={item.path}>{item.name}</NavLink>
                  </li>
                ))}
                </ul>
              </nav>
              <div className="user">
                {this.state.user.name}
              </div>
            </header>
            <Switch>
              <Route path="/" component={Dashboard} exact/>
              <Route path="/projects" component={Projects}/>
              <Route path="/tasks" component={Tasks}/>
              <Route path="/employees" component={Employees}/>
              <Route component={Error}/>
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
