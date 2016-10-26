import React from 'react';
import RoleAwareComponent from '../../RoleAwareComponent';

class Home extends RoleAwareComponent {

  constructor(props) {
    super(props);

    this.role(props.access);
    this.permissionGroup(['user', 'admin']);
  }

  render() {
    return this._render(
      <h1>User</h1>
    );
  }


}

export default Home;