import RoleAwareComponent from './RoleAwareComponent';

class AuthorizedComponent extends RoleAwareComponent {

  constructor(props) {
    super(props);

    this.props.routes.map(el => {
      this.permissionGroup(el.authorize);
    });
  }

}

export default AuthorizedComponent;