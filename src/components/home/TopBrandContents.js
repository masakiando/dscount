import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

class TopBrandContents extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="h-top_brand-container" className="">
        <div id="h-top_brandA">
          <a href="#">
            <img src="//www.dzimg.com/main/keyword_rolling/857.jpg" alt="dscount"/>
          </a>
        </div>
        <div id="h-top_brandB">
        <a href="#">
          <img src="//www.dzimg.com/main/keyword_rolling/858.jpg" alt="dscount"/>
        </a>
        </div>
        <div id="h-top_brandC">
        <a href="#">
          <img src="//www.dzimg.com/main/keyword_rolling/859.jpg" alt="dscount"/>
        </a>
        </div>
        <div id="h-top_brandD">
        <a href="#">
          <img src="//www.dzimg.com/main/keyword_rolling/860.jpg" alt="dscount"/>
        </a>
        </div>
      </div>
    );
  }
}

export default TopBrandContents;
