import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

const SignupPageForm = (
  onChange,
  signup
) => {
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
    <form style={gridStyle}>
      <h4>1. 利用規約に同意</h4>
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
                <textarea style={textarea} >
                  제2조 약관의 효력
                  본 약관은 "몰"의 홈페이지에 게시하거나 그 외 방법으로 회원에게 공지함으로써 효력을 발생합니다.
                  제3조 약관의 변경
                  본 약관은 "몰"의 사정에 의해 변경될 수 있으며 변경된 약관은 변경된 약관은 "몰"의 사이트에 공지함으로써 효력을 발생합니다. 회원이 변경된 약관에 동의하지 않을 경우 언제든지 탈퇴를 요청할 수 있습니다.

                  제4조 약관에 정하지 아니한 사항
                  본 약관에서 정하지 아니한 사항과 본 규약의 해석에 관하여는 관계법령 또는 전자상거래 관례에 따릅니다.

                  제2장 이용방법

                  제1조 이용계약
                  본 약관에 동의한 이용자가 가입신청서양식을 통하여 신청하고 "몰"이 이의가 없다고 판단된 회원에게 ID를 발급함으로 이용계약이 성립합니다.

                  제2조 회원등록
                  회원등록은 온라인 가입신청 양식에 기록하여 신청합니다.

                  제3조 회원탈퇴
                  회원은 언제든지 탈퇴요청서 또는 E-mail을 통하여 탈퇴할 수 있습니다.

                  제4조 회원자격 정지 및 자격제한
                  "몰"은 회원이 다음에 해당되는 경우 별도의 통보절차 없이 회원의 자격을 정지할 수 있습니다.
                </textarea>
                <input style={inputCheckbox} type="checkbox"/>
                <span>会員規約に同意する</span>
              </td>
              <td>
                <textarea style={textarea} >
                  제2조 약관의 효력
                  본 약관은 "몰"의 홈페이지에 게시하거나 그 외 방법으로 회원에게 공지함으로써 효력을 발생합니다.

                  제3조 약관의 변경
                  본 약관은 "몰"의 사정에 의해 변경될 수 있으며 변경된 약관은 변경된 약관은 "몰"의 사이트에 공지함으로써 효력을 발생합니다. 회원이 변경된 약관에 동의하지 않을 경우 언제든지 탈퇴를 요청할 수 있습니다.

                  제4조 약관에 정하지 아니한 사항
                  본 약관에서 정하지 아니한 사항과 본 규약의 해석에 관하여는 관계법령 또는 전자상거래 관례에 따릅니다.

                  제2장 이용방법

                  제1조 이용계약
                  본 약관에 동의한 이용자가 가입신청서양식을 통하여 신청하고 "몰"이 이의가 없다고 판단된 회원에게 ID를 발급함으로 이용계약이 성립합니다.

                  제2조 회원등록
                  회원등록은 온라인 가입신청 양식에 기록하여 신청합니다.

                  제3조 회원탈퇴
                  회원은 언제든지 탈퇴요청서 또는 E-mail을 통하여 탈퇴할 수 있습니다.

                  제4조 회원자격 정지 및 자격제한
                  "몰"은 회원이 다음에 해당되는 경우 별도의 통보절차 없이 회원의 자격을 정지할 수 있습니다.
                </textarea>
                <input style={inputCheckbox} type="checkbox"/>
                <span className="control-label">会員規約に同意する</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h4>2. 情報の入力</h4>
          <TextInput
            name="username"
            label="Username"
            value={signup.username}
            onChange={onChange}
          />
    </form>
  );
};
//this.props list
SignupPageForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired
};
export default SignupPageForm;
