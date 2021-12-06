import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

import Logo from '../../img/logo.png';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <ul>
      <p className="naji-menu-subtitle">Home</p>
      <div className="naji-menu-clearfix"></div>
      <li>
        <Link to="/news">
          <i className="fas fa-newspaper"></i>
          <span className="hide-sm"> News</span>
        </Link>
      </li>
      <li>
        <Link to="/faq">
          <i className="fas fa-hands-helping"></i>
          <span className="hide-sm"> FAQs</span>
        </Link>
      </li>

      
      <p className="naji-menu-subtitle">Contact Us</p>
      <div className="naji-menu-clearfix"></div>
      <li>
        <Link to="/News">
          <i className="fas fa-newspaper"></i>
          <span className="hide-sm"> Message</span>
        </Link>
      </li>

    </ul>
  );

  const guestLinks = (
    <ul>

    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <center><p><Link to="/"><img src={Logo} className="logo" /></Link></p></center>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
