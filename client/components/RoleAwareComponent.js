import React from 'react';

class RoleAwareComponent extends React.Component {

  role(group) {
    this.role = group;
  }

  permissionGroup(group) {
    this.permissionGroup = group;
  }

  access() {
    var truth = false;

    this.role.map(role => {
      this.permissionGroup.map(permissionItem => {
        if (role == permissionItem) truth = true;
      });
    });

    return truth;
  }

}

export default RoleAwareComponent;