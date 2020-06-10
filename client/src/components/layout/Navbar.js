import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ logout, auth: { user, isAuthenticated, loading } }) => {
  const authLinks = (
    <ul>
      <li>
        Hello, <strong>{user && user.name.split(' ')[0]} </strong>
      </li>
      <li>
        <Link to='/profiles'>Marauders</Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fa fa-user' aria-hidden='true'></i>{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout}>
          <i className='fa fa-sign-out' aria-hidden='true'></i>{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/profiles'>Marauders</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <img
            src={logo}
            alt='McMaster Crest'
            style={{ maxWidth: '15px', maxHeight: '18px' }}
          />{' '}
          MAConnect
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
