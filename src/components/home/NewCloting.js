import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

class NewCloting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const discount = true;// 仮のブルー値
    const discountRate = 10;// 仮のブルー値
    const preRelease = true;// 仮のブルー値
    const releaseDate = "8/15";
    // 仮の日付値 現在日づけと発売日比較して発売前ならpreReleaseをtrueにしてreleaseDateを表示する
    return (
      <div>
        <div className="h-heading">
          <h1 >- New Clothing -</h1>
        </div>
        <div id="h-new_cloting-container" className="h-n-link_box">
          <div id="h-top_brandA">
            <a href="#">
              <img src="http://www.dzimg.com/Dahong/201707/712573_16212027_k3.gif" alt="dscount"/>
            </a>
            {discount && <p> {discountRate}%OFF</p>}
            {preRelease && <p>【{releaseDate}以降の発送を開始】</p>}
            <p>★S、M★足がきれいに見えるスラックス</p>
            <a href="#">ロンドンブリッジベーシックロングスラックス</a>
            {discount ? <p className="discount">37,800ウォン</p> : <p>37,800ウォン</p>}
            {discount && <p>32,800ウォン</p>}
          </div>
          <div id="h-top_brandB">
          <a href="#">
            <img src="http://www.dzimg.com/Dahong/201707/712462_16217190_k3_3.jpg" alt="dscount"/>
          </a>
          {discount && <p> {discountRate}%OFF</p>}
          {preRelease && <p>【{releaseDate}以降の発送を開始】</p>}
          <p>リボンストラップであまりにも愛らしいチェックブラ！</p>
          <a href="#">ラブドアチェックリボンブラウス </a>
          {discount ? <p className="discount">37,800ウォン</p> : <p>37,800ウォン</p>}
          {discount && <p>32,800ウォン</p>}
          </div>
          <div id="h-top_brandC">
          <a href="#">
            <img src="http://www.dzimg.com/Dahong/201708/712905_16219570_k3_3.gif" alt="dscount"/>
          </a>
          {discount && <p> {discountRate}%OFF</p>}
          {preRelease && <p>【{releaseDate}以降の発送を開始】</p>}
          <p>ローブ＆ワンピース2wayとして活用可能ですよ♥♥</p>
          <a href="#">ウィンディデーローブワンピース</a>
          {discount ? <p className="discount">45,500ウォン</p> : <p>45,500ウォン</p>}
          {discount && <p>32,800ウォン</p>}
          </div>
          <div id="h-top_brandD">
          <a href="#">
            <img src="http://www.dzimg.com/Dahong/201706/709796_16160270_k3_3.gif" alt="dscount"/>
          </a>
          {discount && <p> {discountRate}%OFF</p>}
          {preRelease && <p>【{releaseDate}以降の発送を開始】</p>}
          <p>トレンディな姉♥のように見える魔性のジャンプスーツ</p>
          <a href="#">フィエスタワイドラップジャンプスーツ</a>
          {discount ? <p className="discount">13,800ウォン</p> : <p>13,800ウォン</p>}
          {discount && <p>32,800ウォン</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default NewCloting;
