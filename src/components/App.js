import React, {PropTypes} from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import Slider from 'react-slick';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid-f">
       <Header />
       {this.props.children}
       <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
