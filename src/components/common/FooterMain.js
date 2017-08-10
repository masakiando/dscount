import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

class FooterMain extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="f-main-container" className="f-link_box">
        <div id="itemF-M-A"></div>
        <div id="itemF-M-B">
          <a href="#">
            <img src="http://cdn.dscount.com/images_2016/bottom/bottom_logo00.jpg" alt="dscount"/>
          </a>
        </div>
        <div id="itemF-M-C"></div>
        <div id="itemF-M-D"></div>

        <div id="itemF-M-E"></div>
        <div id="itemF-M-F">
          <p>(有)ディスカウント</p>
          <p>代表取締役：李東桓事業者登録番号：211-88-67647通信販売申告番号：第2017-ソウル江南-01966号</p>
          <p>住所：ソウル江南ノンヒョン200-7アーバンハイブ10階（交換及び返品は、必ず交換・返品アドレスに送ってください）</p>
          <p>個人情報保護責任者：バクギョンソ [事業者情報の確認]</p>
          <div className="f-link_box-copy_right">
            <p>dscount.comⓒall rights reserved。</p>
            <img src="http://cdn.dscount.com/images_2016/bottom/bottom_important.jpg" alt="img"/>
          </div>
        </div>
        <div id="itemF-M-G">
          <p>交換・返品アドレス</p>
          <p>ソウル特別市鍾路区鍾路6（瑞麟洞）光化門郵便局の小包室ディスカウント前</p>
          <p>コールセンター 1577-6654 </p>
          <p>平日。10：00〜17：00 / ランチ。12:00〜13:00 / 週末、祝日休業</p>
        </div>
        <div id="itemF-M-H"></div>

        <div id="itemF-M-I"></div>
        <div id="itemF-M-J"></div>
        <div id="itemF-M-K"></div>
        <div id="itemF-M-L"></div>
      </div>
    );
  }
}

export default FooterMain;
