import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import Slider from 'react-slick';

class TryContents extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      rtl: true
    };
    const div = {
      dots: true
    };
    return (
      <div className="aaa">
        <h2>Right to Left</h2>
        <Slider {...settings} >
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </Slider>
      </div>
    );
  }
}

export default TryContents;
