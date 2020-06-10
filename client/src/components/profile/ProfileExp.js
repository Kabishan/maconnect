import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExp = ({
  experience: { company, position, location, current, from, to, description },
}) => (
  <div>
    <h3 className='text-dark'>{company}</h3>
    <p>
      <Moment format='YYYY/MM/DD'>{from}</Moment> -{' '}
      {!to ? ' Present' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
    </p>
    <p>
      <strong>Position: </strong> {position}
    </p>
    {location && (
      <p>
        <strong>Location: </strong> {location}
      </p>
    )}
    {description && (
      <p>
        <strong>Description: </strong> {description}
      </p>
    )}
  </div>
);
ProfileExp.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExp;
