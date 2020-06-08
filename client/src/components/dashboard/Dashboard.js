import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentProfile } from '../../actions/profile';
import Experience from './Experience';
import Education from './Education';
import Spinner from '../layout/Spinner';
import { deleteProfile } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  deleteProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fa fa-user'></i> Welcome{' '}
        <strong>{user && user.name}</strong>
      </p>
      {profile !== null ? (
        <Fragment>
          <div className='dash-buttons'>
            <Link to='edit-profile' className='btn btn-light'>
              <i className='fa fa-user-circle text-primary'></i> Edit Profile
            </Link>
            <Link to='/add-experience' className='btn btn-light'>
              <i className='fa fa-black-tie text-primary'></i> Add Experience
            </Link>
            <Link to='/add-education' className='btn btn-light'>
              <i className='fa fa-graduation-cap text-primary'></i> Add
              Education
            </Link>
          </div>
          <Experience experiences={profile.experiences} />
          <Education education={profile.education} />
          <div className='my-2'>
            <button className='btn btn-danger' onClick={() => deleteProfile()}>
              <i className='fa fa-user-minus'></i> Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>
            A profile has not been set up for your account. Please create your
            profile now.
          </p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteProfile })(
  Dashboard
);
