import React from 'react';
import {Link} from 'react-router';
import TopImgContents from './TopImgContents';
import TopBrandContents from './TopBrandContents';
import NewCloting from './NewCloting';

class HomePage extends React.Component {
  render() {
    return (
      <homepage>
        <TopImgContents />
        <TopBrandContents />
        <NewCloting />
      </homepage>
    );
  }
}

export default HomePage;
