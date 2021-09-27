import React from 'react';
import { Router, Route } from 'react-router';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

export class Home extends React.Component {
  browserHistory = null;
  constructor(){
    super();
    this.browserHistory = createBrowserHistory();
  }
  render() {
    
    return (
      <div>
        home
        <br />
        <nav>
          <a href="UserDetails">Details</a>
          <br/>
          <a href="UserList">List</a>
        </nav>
        <Router history={this.browserHistory}>
          <Route path={'/UserDetails'} component={UserDetails} />
          <Route path={'/UserList'} component={UserList} />
        </Router>
      </div>
    );
  }
}

class UserDetails extends React.Component {
  render() {
    return (
      <div>
        <h1>UserDetails</h1>
      </div>
    );
  }
}
class UserList extends React.Component {
  render() {
    return (
      <div>
        <h1>UserList</h1>
      </div>
    );
  }
}
