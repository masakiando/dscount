import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav className="nav nav--center">
      <IndexLink to="/" className="" activeClassName="active">
        <span className="glyphicon glyphicon-menu-hamburger"></span>
      </IndexLink>
      {" | "}
      <Link to="/about" className="" activeClassName="active">About</Link>
    </nav>
  );
};
export default Header;
