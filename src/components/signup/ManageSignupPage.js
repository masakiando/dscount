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
    this.updaTetargetState = this.updaTetargetState.bind(this);
  }
  updaTetargetState(event) {
    this.setState({
       [event.target.name]: event.target.value
     });
  }
  render() {
    return (
      <div>
      <SignupPageHead />
      <SignupForm
        onChange={this.updaTetargetState}
        signup={this.state.signup}
      />
      </div>
    );
  }
}

export default ManageSignupPage;
