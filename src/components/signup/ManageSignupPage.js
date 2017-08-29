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
      signup: {
        name: '',
        username: '',
        password: '',
        passwordConfirmation: '',
        birthday: '',
        gender: '',
        postalCode: '',
        address: '',
        email: '',
        mobilePhoneNumber: '',
        receiveEmail: '',
        receiveSNS: ''
       }
    };
    this.onSignupChange = this.onSignupChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onSignupChange(event) {
    let signup = this.state.signup;
    const field = event.target.name;
    signup[field] = event.target.value;
    this.setState({signup: signup});
  }

  onClickSave(event) {
    event.preventDefault();
    this.props.actions.userSignupRequest(this.state.signup);
  }

  signupRow(signup, index) {
    return (
      <div key={index}>
        {signup.name} +
        {signup.username} +
        {signup.password} +
        {signup.passwordConfirmation} +
        {signup.birthday} +
        {signup.gender} +
        {signup.postalCode} +
        {signup.address} +
        {signup.email} +
        {signup.mobilePhoneNumber} +
        {signup.receiveEmail} +
        {signup.receiveSNS} !!!!
      </div>
    );
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
