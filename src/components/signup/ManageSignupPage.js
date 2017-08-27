import React, {PropTypes} from 'react';
import SignupPageHead from './SignupPageHead';
import SignupForm from './SignupForm';

class ManageSignupPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      signup: { username: '' }
    };
    this.onSignupChange = this.onSignupChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }
  onSignupChange(event) {
    const signup = this.state.signup;
    signup.username = event.target.value;
    this.setState({signup: signup});
  }
  onClickSave() {
    alert(`Saveing ${this.state.signup.username}`);
  }
  render() {
    return (
      <div>
      <SignupPageHead />
      <SignupForm />
      <div>
        <input
          type="text"
          onChange={this.onSignupChange}
          value={this.state.signup.username}
        />
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave}
        />
      </div>
      </div>
    );
  }
}

export default ManageSignupPage;
