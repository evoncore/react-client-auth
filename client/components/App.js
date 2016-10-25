import React from 'react';
import RoleAwareComponent from './RoleAwareComponent';

// Connect
import { connect } from 'react-redux';

function mapStateToProps (state) {
  return {
    access: state.access,
  }
}
// End Connect

class App extends RoleAwareComponent {

  constructor(props) {
    super(props);

    this.role(this.props.access);
    this.permissionGroup(this.props.routes[1].authorize);
  }

  render() {
    return this.access() ? (
      <div>
        <div className="container" id="app">
          app
        </div>
      </div>
    ) : null
  }

}

export default connect(mapStateToProps)(App);