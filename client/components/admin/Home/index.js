import React from 'react';
import RoleAwareComponent from '../../RoleAwareComponent';

class Home extends RoleAwareComponent {

  constructor(props) {
    super(props);

    this.role(props.access);
    this.permissionGroup(['admin']);
  }

  render() {
    return this.access() ? <h1>Admin</h1> : null;
  }


}

export default Home;