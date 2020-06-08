import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteEdu } from '../../actions/profile';

const Education = ({ education, deleteEdu }) => {
  const edus = education.map(edu => (
    <tr key={edu._id}>
      <td className='hide-sm'>{edu.fieldofstudy}</td>
      <td className='hide-sm'>{edu.degree}</td>
      <td>{edu.school}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{edu.from}</Moment> -{' '}
        {edu.to === null ? (
          ' Present'
        ) : (
          <Moment format='YYYY/MM/DD'>{edu.to}</Moment>
        )}
      </td>
      <td>
        <button onClick={() => deleteEdu(edu._id)} className='btn btn-danger'>
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Education Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th className='hide-sm'>Field of Study</th>
            <th className='hide-sm'>Degree</th>
            <th>School</th>
            <th className='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{edus}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEdu: PropTypes.func.isRequired,
};

export default connect(null, { deleteEdu })(Education);
