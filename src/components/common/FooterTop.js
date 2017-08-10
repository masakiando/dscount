import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const styleLine = {
  margin: "0em 1em "
};

class FooterTop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div id="f-top-container" className="f-link_box">
          <div id="itemF-A"></div>
          <a   id="itemF-B" href="#">注文照会</a>
          <a   id="itemF-C" href="#">プライバシーポリシー</a>
          <a   id="itemF-D" href="#">利用規約</a>
          <a   id="itemF-E" href="#">お知らせ</a>
          <a   id="itemF-F" href="#">個人決済</a>
          <a   id="itemF-G" href="#">求人</a>
          <a   id="itemF-H" href="#">モデルのサポート</a>
          <a   id="itemF-I" href="#">提携のお問い合わせ</a>
          <div id="itemF-J" href="#"></div>
          <a   id="itemF-K" href="#">関連サイト</a>
          <a   id="itemF-L" href="#">DAHOIF</a>
          <a   id="itemF-M" href="#">ZINIF</a>
          <a   id="itemF-N" href="#">CREE'MARE</a>
          <div id="itemF-O" href="#"></div>
        </div>
    );
  }
}

export default FooterTop;
