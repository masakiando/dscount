import React, {PropTypes} from 'react';
import SignupPageHead from './SignupPageHead';

class SignupPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <SignupPageHead />
    );
  }
}

export default SignupPage;
