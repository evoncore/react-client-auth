import React from 'react';
import RoleAwareComponent from './RoleAwareComponent';

// Connect
import { connect } from 'react-redux';

// Components
import GuestHome from './guest/Home';
import UserHome from './user/Home';
import AdminHome from './admin/Home';

function mapStateToProps (state) {
  return {
    access: state.access,
  }
}
// End Connect

class App extends RoleAwareComponent {

  constructor(props) {
    super(props);

    this.state = {
      access: this.props.access
    }
  }

  render() {
    return (
      <div>
        <div className="container" id="app">
          <GuestHome access={this.state.access} />
          <UserHome access={this.state.access} />
          <AdminHome access={this.state.access} />
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps)(App);