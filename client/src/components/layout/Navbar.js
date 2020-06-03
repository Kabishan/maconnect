import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <a href='index.html'>
          <i className='fas fa-code'></i> MAConnect
        </a>
      </h1>
      <ul>
        <li>
          <a href='#'>Students</a>
        </li>
        <li>
          <a href='#'>Register</a>
        </li>
        <li>
          <a href='#'>Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
