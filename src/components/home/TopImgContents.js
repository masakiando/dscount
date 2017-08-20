import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import Slider from 'react-slick';

const Background = "//www.dzimg.com/mainbanner/26_p1.jpg";
const imgStyle = {
  // backgroundImage: `url(${Background})`
};

class TopImgContents extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      rtl: true
    };
    return (
      <div className="h-top_img-container-N">
        <Slider {...settings} >
          <div>
            <a href="#top">
              <img
                src="//www.dzimg.com/mainbanner/26_p1.jpg"
                alt="dscount"
              />
            </a>
          </div>
          <div>
            <a href="#top">
              <img
                src="//www.dzimg.com/mainbanner/26_p1.jpg"
                alt="dscount"
              />
            </a>
          </div>
          <div>
            <a href="#top">
              <img
                src="//www.dzimg.com/mainbanner/26_p1.jpg"
                alt="dscount"
              />
            </a>
          </div>
          <div>
            <a href="#top">
              <img
                src="//www.dzimg.com/mainbanner/26_p1.jpg"
                alt="dscount"
              />
            </a>
          </div>
          <div>
            <a href="#top">
              <img
                src="//www.dzimg.com/mainbanner/26_p1.jpg"
                alt="dscount"
              />
            </a>
          </div>
          <div>
            <a href="#top">
              <img
                src="//www.dzimg.com/mainbanner/26_p1.jpg"
                alt="dscount"
              />
            </a>
          </div>
        </Slider>
        <div id="h-top_img-inside_bar-N">
          <a href="#1"><img src="http://cdn.dscount.com/images_2016/main/shop_bt01.png" alt="dscount1185 * 500"/></a>
          <a href="#2"><img src="http://cdn.dscount.com/images_2016/main/shop_bt02.png" alt="dscount"/></a>
          <a href="#3"><img src="http://cdn.dscount.com/images_2016/main/shop_bt03.png" alt="dscount"/></a>
          <a href="#4"><img src="http://cdn.dscount.com/images_2016/main/shop_bt04.png" alt="dscount"/></a>
        </div>
      </div>
    );
  }
}

export default TopImgContents;
