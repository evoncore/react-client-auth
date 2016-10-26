import { PropTypes } from 'react';
import RoleAwareComponent from './RoleAwareComponent';

class AuthorizedComponent extends RoleAwareComponent {

  constructor(props) {
    super(props);

    props.routes.map(el => {
      this.permissionGroup(el.authorize);
    });
  }

  componentWillMount() {
    const { router } = this.context;

    if (!this.access()) {
      router.push(this.notAuthorizedPath);
    }
  }

};

AuthorizedComponent.contextTypes = {
  router: PropTypes.object.isRequired
};

export default AuthorizedComponent;