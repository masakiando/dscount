import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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

  onClickSave(event) {
    event.preventDefault();
    this.props.actions.userSignupRequest(this.state.signup);
  }

  signupRow(signup, index) {
    return <div key={index}>{signup.username}</div>;
  }

  render() {
    return (
      <div>
      <SignupPageHead />
      <SignupForm
        signup={this.state.signup}
        onChange={this.onSignupChange}
        onClick={this.onClickSave}
        signupes={this.props.signup}
        signupRow={this.signupRow}
      />
      </div>
    );
  }
}

ManageSignupPage.propTypes = {
  signup: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    signup: state.signup
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(signupActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageSignupPage);
