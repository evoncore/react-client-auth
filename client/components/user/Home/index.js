import React from 'react';
import RoleAwareComponent from '../../RoleAwareComponent';

class Home extends RoleAwareComponent {

  constructor(props) {
    super(props);

    this.role(props.access);
    this.permissionGroup(['user', 'admin']);
  }

  render() {
    return this.access() ? <h1>User</h1> : null;
  }

}

export default Home;