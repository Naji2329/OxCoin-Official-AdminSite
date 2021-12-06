import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">OXSTOCKS ADMIN SITE</h1>
          <p className="lead">
          OX STOCKS is owned and operated by Australian Company OX STOCKS PTY LTD (ABN : 61 654 485 300) before using our service please review our Terms and Conditions. OX STOCKS is a platform, we are not brokers, financial institutions or creditors. We do not provide financial advice - as such as do not hold an Australian Financial Services License. For more information please email us at info@oxstocks.com
          </p>
          <div className="buttons">
            {/* <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link> */}
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
