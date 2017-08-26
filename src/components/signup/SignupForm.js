import React, {PropTypes} from 'react';

const SignupForm = () => {
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
    const textarea_a = `
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
    `
    const textarea_b = `
      ■ 수집하는 개인정보 항목

      ο 수집항목 : 이름 , 생년월일 , 로그인ID , 비밀번호 , 자택 전화번호 , 자택 주소 , 휴대전화번호 , 이메일 , 신체정보 , 서비스 이용기록 , 접속 로그 , 쿠키 , 접속 IP 정보 , 결제기록
      ο 개인정보 수집방법 : 홈페이지(회원가입,상담게시판) , 배송 요청

      ■ 개인정보의 수집 및 이용목적
       ο 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산
      콘텐츠 제공 , 구매 및 요금 결제 , 물품배송 또는 청구지 등 발송
       ο 회원 관리
      회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 불만처리 등 민원처리 , 고지사항 전달
       ο 마케팅 및 광고에 활용
      신규 서비스(제품) 개발 및 특화 , 이벤트 등 광고성 정보 전달 , 인구통계학적 특성에 따른 서비스 제공 및 광고 게재 , 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계

      ■ 개인정보의 보유 및 이용기간

      원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 "몰"은 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.


       보존 항목 : 서비스 이용기록 , 결제기록
       보존 근거 : 전자상거래등에서의 소비자보호에 관한 법률
       보존 기간 : 5년

      대금결제 및 재화 등의 공급에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률)
    `
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
                <textarea defaultValue={textarea_a} style={textarea} />
                <input style={inputCheckbox} type="checkbox"/>
                <span>会員規約に同意する</span>
              </td>
              <td>
                <textarea defaultValue={textarea_b} style={textarea} />
                <input style={inputCheckbox} type="checkbox"/>
                <span className="control-label">会員規約に同意する</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h4>2. 情報の入力</h4>

    </form>
  );
};
export default SignupForm;
