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
        birthday: {
          year: 1970,
          month: 1,
          day: 1
        },
        gender: '',
        postalCode: '',
        address: '',
        email: '',
        mobilePhoneNumber: '',
        receiveEmail: true,
        receiveSNS: true
       }
    };
    this.onSignupChange = this.onSignupChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.onBirthdayChange = this.onBirthdayChange.bind(this);
  }
// parseInt(str, 10);
  onBirthdayChange(event, index, value) {
    debugger;
    if (/年/.test(event.target.innerText)) {
      let yearStr = event.target.innerText.replace(/年/g , "" );
      console.log(yearStr);
      let yearNumber = parseInt(yearStr, 10);
      console.log(yearNumber);
      let signup = this.state.signup;
      signup.birthday.year = yearNumber;
      this.setState({signup: signup});
    }
    if (/月/.test(event.target.innerText)) {
      console.log(event.target.innerText);
      let monthStr = event.target.innerText.replace( /月/g , "" );
      console.log(monthStr);
      let monthNumber = parseInt(monthStr, 10);
      console.log(monthNumber);
      let signup = this.state.signup;
      signup.birthday.month = monthNumber;
      this.setState({signup: signup});
    }
    if (/日/.test(event.target.innerText)) {
      console.log(event.target.innerText);
      let dayStr = event.target.innerText.replace( /日/g , "" );
      console.log(dayStr);
      let dayNumber = parseInt(dayStr, 10);
      console.log(dayNumber);
      let signup = this.state.signup;
      signup.birthday.day = dayNumber;
      this.setState({signup: signup});
    }
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
        onBirthdayChange={this.onBirthdayChange}
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
