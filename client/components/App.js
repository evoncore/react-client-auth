import React from 'react';
import AuthorizedComponent from './AuthorizedComponent';

// Connect
import { connect } from 'react-redux';

function mapStateToProps (state) {
  return {
    access: state.access,
  }
}
// End Connect

// Components
import GuestHome from './guest/Home';
import UserHome from './user/Home';
import AdminHome from './admin/Home';

class App extends AuthorizedComponent {

  constructor(props) {
    super(props);

    this.state = {
      access: props.access
    };

    this.role(props.access);
    this.notAuthorizedPath = '/not-found';
  }

  render() {
    return this._render(
      <div>
        <div className="container" id="app">
          <GuestHome access={this.state.access} />
          <UserHome access={this.state.access} />
          <AdminHome access={this.state.access} />
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps)(App);