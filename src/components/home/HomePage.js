import React from 'react';
import {Link} from 'react-router';
import TopBrandContents from './TopBrandContents';
import NewCloting from './NewCloting';

class HomePage extends React.Component {
  render() {
    return (
      <homepage>
        <TopBrandContents />
        <NewCloting />
      </homepage>
    );
  }
}

export default HomePage;
