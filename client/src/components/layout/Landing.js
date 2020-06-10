import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ auth: { isAuthenticated, loading } }) => {
  const authLinks = (
    <Fragment>
      <p className='lead'>Welcome to MAConnect, visit your dashboard now...</p>
      <div className='buttons'>
        <Link to='/dashboard' className='btn btn-primary'>
          Dashboard
        </Link>
      </div>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <p className='lead'>
        Create your very own MAConnect account today and network with other
        McMaster students
      </p>
      <div className='buttons'>
        <Link to='/register' className='btn btn-primary'>
          Sign Up
        </Link>
        <Link to='/login' className='btn btn-light'>
          Login
        </Link>
      </div>
    </Fragment>
  );

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>MAConnect</h1>
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
