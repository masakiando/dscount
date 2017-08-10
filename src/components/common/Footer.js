import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import FooterTopLine from './FooterTopLine';
import FooterTop from './FooterTop';
import FooterMain from './FooterMain';
import FooterSpace from './FooterSpace';


class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <FooterTopLine />
        <FooterTop />
        <FooterSpace />
        <FooterMain />
      </footer>
    );
  }
}

export default Footer;
