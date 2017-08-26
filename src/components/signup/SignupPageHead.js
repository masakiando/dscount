import React, {PropTypes} from 'react';

const SignupPageHead = () => {
    const style = {
      display: "grid",
      gridTemplateColumns: "auto",
      gridTemplateRows: "150px 5px 250px",
      marginTop: "50px",
      marginLeft: "50px",
      marginRight: "50px"
    };
    const h2Font = {
      fontWeight: 600
    };
    const line = {
      borderTop: "solid 3px gray",
      opacity: "0.1"
    };
  return (
    <div style={style}>
      <div>
        <h2 style={h2Font}>統合会員登録</h2>
        <p>ディスカウントはダホン/ゼニフ/クリーマーレ統合IDをで運営されます。</p>
        <p>IDで簡単に獲得、様々な割引を受けましょう〜</p>
      </div>
      <div style={line}></div>
      <div>
        <h2 style={h2Font}>新規会員登録のメリット</h2>
        <p>会員になると、すぐに使用可能なクーポン4枚を差し上げます！</p>
        <img src="//cdn.dscount.com/images_2016/member/benefit_img04.jpg" alt=""/>
      </div>
    </div>
  );
};

export default SignupPageHead;
