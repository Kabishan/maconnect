import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <img src={logo} alt='McMaster Crest' style={{ width: '4.25%' }} />{' '}
          MAConnect
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='!#'>Marauders</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
