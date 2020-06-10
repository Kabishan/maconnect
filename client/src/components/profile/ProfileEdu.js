import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEdu = ({
  education: { school, degree, fieldofstudy, from, to, description },
}) => (
  <div>
    <h3 className='text-dark'>{school}</h3>
    <p>
      <Moment format='YYYY/MM/DD'>{from}</Moment> -{' '}
      {!to ? ' Present' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
    </p>
    <p>
      <strong>Field of Study: </strong> {fieldofstudy}
    </p>
    <p>
      <strong>Degree: </strong> {degree}
    </p>
    {description && (
      <p>
        <strong>Description: </strong> {description}
      </p>
    )}
  </div>
);

ProfileEdu.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEdu;
