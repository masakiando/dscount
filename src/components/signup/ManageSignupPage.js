import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as signupActions from '../../actions/signupActions';
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
    // alert(`Saveing ${this.state.signup.username}`);
    this.props.userSignupRequest(this.state.signup);
  }

  signupRow(signup, index) {
    return <div key={index}>{signup.username}</div>;
  }

  render() {
    return (
      <div>
      <SignupPageHead />
      <SignupForm />
      {this.props.signup.map(this.signupRow)}
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

ManageSignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  signup: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    signup: state.signup
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userSignupRequest: signup => dispatch(signupActions.userSignupRequest(signup))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageSignupPage);
