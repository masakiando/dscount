import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron homepage">
        <h1>Pluralsight Administration</h1>
        <div>
          <a href="#">下線チェック</a>
        </div>
        <a href="#">下線チェック</a>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
