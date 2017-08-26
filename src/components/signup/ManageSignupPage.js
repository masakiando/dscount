import React, {PropTypes} from 'react';
import SignupPageHead from './SignupPageHead';
import SignupForm from './SignupForm';

class ManageSignupPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      signup: {
        username: ''
      }
    };
  }

  render() {
    return (
      <div>
      <SignupPageHead />
      <SignupForm

      />
      </div>
    );
  }
}

export default ManageSignupPage;
