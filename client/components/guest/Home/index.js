import React from 'react';
import RoleAwareComponent from '../../RoleAwareComponent';

class Home extends RoleAwareComponent {

  constructor(props) {
    super(props);

    this.role(props.access);
    this.permissionGroup(['guest', 'user', 'admin']);
  }

  render() {
    return this.access() ? <h1>Guest</h1> : null;
  }

}

export default Home;