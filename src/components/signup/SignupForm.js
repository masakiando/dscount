import React, {PropTypes} from 'react';

import {MuiThemeProvider} from 'material-ui/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import * as consentText from './consentText';


const years = [];
const months = [];
const days = [];
for (let i = 0; i <= 117; i++ ) {
  years.push(<MenuItem value={i + 1900} key={i + 1900} primaryText={`${i + 1900}年`} />);
}
for (let i = 0; i <= 11; i++ ) {
  months.push(<MenuItem value={i + 1} key={i + 1} primaryText={`${i + 1}月`} />);
}
for (let i = 0; i <= 30; i++ ) {
  days.push(<MenuItem value={i + 1} key={i + 1} primaryText={`${i + 1}日`} />);
}
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: 'rgb(255, 64, 129)'
  },
  textField: {
    backgroundColor: '#fff'
  }
});

const styles = {
  block: {
    maxWidth: 250
  },
  radioButton: {
    marginBottom: 16,
    display: "inline-block"
  }
};

const SignupForm = ({
  signup,
  signupes,
  onChange,
  onClick,
  signupRow,
  onBirthdayChange
}) => {
    const radioBtnStyle = {
      marginTop: "16px",
      display: "grid",
      gridTemplateColumns: "100px 1fr",
      gridTemplateRows: "35px",
      gridGap: "1px"
    }
    const h4Styel = {
      marginTop: "40px"
    };
    const h5Styel = {
      margin: "0 auto",
      fontWeight: 700,
      fontSize: "16px",
      fontFamily: "Roboto, sans-serif",
      color: "rgba(0, 0, 0, 0.3)"
    };
    const style_of_input_in_TextField ={
      backgroundColor: '#f88'
    };
    const gridStyle = {
      display: "grid",
      gridTemplateColumns: "auto",
      gridTemplateRows: "60px 250",
      gridGap: "1px",
      marginTop: "50px",
      marginLeft: "50px",
      marginRight: "50px"
    };
    const line = {
      borderTop: "solid 3px gray",
      opacity: "0.1"
    };
    const style = {
      backgroundColor: "#EEEEEE",
      tableLayout: "fixed",
      width: "100%"
    };
    const textarea = {
      border: "solid 1px #d2d2d2",
      color: "#777777",
      fontSize: "9pt",
      width: "500px",
      height: "150px",
      padding: "15px",
      display: "block"
    };
    const inputCheckbox = {
      marginTop: "20px",
      marginRight: "10px",
      display: "inline"
    };
  return (
  <div>
    <form style={gridStyle}>
      <h4 style={h4Styel}>1. 利用規約に同意</h4>
      <div style={style}>
        <table className="table">
          <thead>
          <tr>
            <th>会員規約</th>
            <th>個人情報のための利用者の同意事項</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <textarea defaultValue={consentText.membershipContract}
                  style={textarea} />
                <input style={inputCheckbox} type="checkbox"/>
                <span>会員規約に同意する</span>
              </td>
              <td>
                <textarea defaultValue={consentText.personalInformation}
                  style={textarea} />
                <input style={inputCheckbox} type="checkbox"/>
                <span className="control-label">会員規約に同意する</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 style={h4Styel}>2. 情報の入力</h4>
        <div>
          <MuiThemeProvider muiTheme={muiTheme}>
            <div>
              <form className="signupform">
                 <div className="form-group">
                   <TextField inputStyle={style_of_input_in_TextField}
                     name="name"
                     type="text"
                     floatingLabelText="名前 *"
                     floatingLabelFixed={true}
                     onChange={onChange}
                     value={signup.name}
                  />
                 </div>
                 <div className="form-group">
                   <TextField inputStyle={style_of_input_in_TextField}
                     name="username"
                     type="text"
                     floatingLabelFixed={true}
                     floatingLabelText="ユーザ名 *"
                     onChange={onChange}
                     value={signup.username}
                   />
                 </div>
                 <div className="form-group">
                   <TextField
                     name="password"
                     type="password"
                     floatingLabelText="Password *"
                     floatingLabelFixed={true}
                     onChange={onChange}
                     value={signup.password}
                   />
                 </div>
                 <div className="form-group">
                   <TextField
                     name="passwordConfirmation"
                     type="password"
                     floatingLabelFixed={true}
                     floatingLabelText="Passwordの確認 *"
                     onChange={onChange}
                     value={signup.passwordConfirmation}
                   />
                 </div>

                 <div className="form-group">
                   <h5 style={h5Styel}>生年月日 *</h5>
                   <SelectField
                     floatingLabelText="年"
                     value={signup.birthday.year}
                     onChange={onBirthdayChange}
                     maxHeight={200}
                   >
                    {years}
                   </SelectField>
                   <SelectField
                     floatingLabelText="月"
                     value={signup.birthday.month}
                     onChange={onBirthdayChange}
                     maxHeight={200}
                   >
                    {months}
                   </SelectField>
                   <SelectField
                     floatingLabelText="日"
                     value={signup.birthday.day}
                     onChange={onBirthdayChange}
                     maxHeight={200}
                   >
                    {days}
                   </SelectField>
                 </div>

                 <div className="form-group">
                   <h5 style={h5Styel}>性別 *</h5>
                   <RadioButtonGroup style={radioBtnStyle}
                     name="gender"
                     onChange={onChange}
                     >
                     <RadioButton
                       name="gender"
                       value="male"
                       label="男性"
                       style={styles.radioButton}
                     />
                     <RadioButton
                       name="gender"
                       value="female"
                       label="女性"
                       style={styles.radioButton}
                     />
                  </RadioButtonGroup>　
                 </div>
                 <div className="form-group">
                   <TextField
                     name="postalCode"
                     type="text"
                     floatingLabelFixed={true}
                     floatingLabelText="郵便番号"
                     onChange={onChange}
                     value={signup.postalCode}
                   />
                 </div>
                 <div className="form-group">
                   <TextField
                     name="address"
                     type="text"
                     floatingLabelFixed={true}
                     floatingLabelText="住所"
                     onChange={onChange}
                     value={signup.address}
                   />
                 </div>
                 <div className="form-group">
                   <TextField
                     name="email"
                     type="text"
                     floatingLabelFixed={true}
                     floatingLabelText="E-mail"
                     onChange={onChange}
                     value={signup.email}
                   />
                 </div>
                 <div className="form-group">
                   <TextField
                     name="mobilePhoneNumber"
                     type="text"
                     floatingLabelFixed={true}
                     floatingLabelText="携帯電話"
                     onChange={onChange}
                     value={signup.mobilePhoneNumber}
                   />
                 </div>
                 <div className="form-group">
                   <h5 style={h5Styel}>メール受信</h5>
                   <RadioButtonGroup style={radioBtnStyle}
                     label="メール受信"
                     name="receiveEmail"
                     defaultSelected={signup.receiveEmail}
                     onChange={onChange}
                     >
                     <RadioButton
                       name="receiveEmail"
                       value={true}
                       label="同意"
                       style={styles.radioButton}
                     />
                     <RadioButton
                       name="receiveEmail"
                       value={false}
                       label="同意しない"
                       style={styles.radioButton}
                     />
                  </RadioButtonGroup>　
                 </div>
                 <div className="form-group">
                   <h5 style={h5Styel}>SMSの受信</h5>
                   <RadioButtonGroup style={radioBtnStyle}
                     name="receiveSNS"
                     defaultSelected={signup.receiveSNS}
                     onChange={onChange}
                     >
                     <RadioButton
                       name="receiveSNS"
                       value={true}
                       label="同意"
                       style={styles.radioButton}
                     />
                     <RadioButton
                       name="receiveSNS"
                       value={false}
                       label="同意しない"
                       style={styles.radioButton}
                     />
                  </RadioButtonGroup>　
                 </div>
                 <div className="form-group">
                   <RaisedButton
                     primary={true}
                     type="submit"
                     label="Sign Up"
                     onClick={onClick}
                   />
                 </div>
               </form>
            </div>
          </MuiThemeProvider>
        </div>
        {signupes.map(signupRow)}
    </form>
  </div>
  );
};

SignupForm.propTypes = {
  signup: PropTypes.object.isRequired,
  signupes: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  signupRow: PropTypes.func.isRequired,
  onBirthdayChange: PropTypes.func.isRequired
};

export default SignupForm;
