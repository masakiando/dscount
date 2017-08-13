import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Background = "//www.dzimg.com/mainbanner/26_p1.jpg";
const imgStyle = {
  // backgroundImage: `url(${Background})`
};

class TopImgContents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: -500,
      count: 1,
      a: true,
      b: false,
      c: false,
      d: false
    };
    this.countUp = this.countUp.bind(this);
  }

  countUp(event) {
    event.preventDefault();
    this.setState({
      count: this.state.count + 1
    });
    if (this.state.left > 930) {
      this.setState({
        left: 50
      });
    } else {
      this.setState({
        left: this.state.left + (1185 / 4 )
      });
    }
    this.dips();
  }
  dips() {
    console.log(this.state.count % 4 + 1);
    if (1 === this.state.count % 4 + 1) {
        this.setState({a: true});
        this.setState({b: false});
        this.setState({c: false});
        this.setState({d: false});
    }
    if (2 === this.state.count % 4 + 1) {
        this.setState({a: false});
        this.setState({b: true});
        this.setState({c: false});
        this.setState({d: false});
    }
    if (3 === this.state.count % 4 + 1) {
        this.setState({a: false});
        this.setState({b: false});
        this.setState({c: true});
        this.setState({d: false});
    }
    if (4 === this.state.count % 4 + 1) {
        this.setState({a: false});
        this.setState({b: false});
        this.setState({c: false});
        this.setState({d: true});
    }
  }
  render() {
    const { a, b, c, d } = this.state;
    const panelStyle = {
      position: 'absolute',
      animationDuration: "1s",
      top: 0,
      // bottom: 0,
      left: `${this.state.left}`,
      // left: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // height: '100vh',
      width: 275,
      background: '#45B0F9'
    }
    return (
      <div id="h-top_img-container" className="h-top_img-container">
        {a && <a href="#"><img onClick={this.countUp} className="top" src="//www.dzimg.com/mainbanner/26_p1.jpg" alt="A"/></a>}
        {true && <a style={panelStyle} href="#"><img onClick={this.countUp} className="top" src="" alt="B"/></a>}
        {c && <a href="#"><img onClick={this.countUp} className="top" src="" alt="C"/></a>}
        {d && <a href="#"><img onClick={this.countUp} className="top" src="" alt="D"/></a>}
        <div id="h-top_img-inside_bar">
          <a href="#">
            <img src="http://cdn.dscount.com/images_2016/main/shop_bt01.png" alt="dscount"/>
          </a>
          <a href="#">
            <img src="http://cdn.dscount.com/images_2016/main/shop_bt02.png" alt="dscount"/>
          </a>
          <a href="#">
            <img src="http://cdn.dscount.com/images_2016/main/shop_bt03.png" alt="dscount"/>
          </a>
          <a href="#">
            <img src="http://cdn.dscount.com/images_2016/main/shop_bt04.png" alt="dscount"/>
          </a>
        </div>
      </div>
    );
  }
}

export default TopImgContents;
