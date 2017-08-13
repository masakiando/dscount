import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Background = "//www.dzimg.com/mainbanner/26_p1.jpg";
const imgStyle = {
  // backgroundImage: `url(${Background})`
};

class TopImgContents extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div id="h-top_img-container" className="h-top_img-container">
        <a href="#top">
          <img src="//www.dzimg.com/mainbanner/26_p1.jpg" alt="dscount"/>
        </a>

        <div id="h-top_img-inside_bar">
          <a href="#1"><img src="http://cdn.dscount.com/images_2016/main/shop_bt01.png" alt="dscount1185 * 500"/></a>
          <a href="#2"><img src="http://cdn.dscount.com/images_2016/main/shop_bt02.png" alt="dscount"/></a>
          <a href="#3"><img src="http://cdn.dscount.com/images_2016/main/shop_bt03.png" alt="dscount"/></a>
          <a href="#4"><img src="http://cdn.dscount.com/images_2016/main/shop_bt04.png" alt="dscount"/></a>
        </div>
        <div></div>
      </div>
    );
  }
}

export default TopImgContents;
