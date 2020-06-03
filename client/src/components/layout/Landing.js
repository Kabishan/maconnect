import React from 'react';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>MAConnect</h1>
          <p className='lead'>
            Create your very own MAConnect account today and network with other
            McMaster students
          </p>
          <div className='buttons'>
            <a href='#' className='btn btn-primary'>
              Sign Up
            </a>
            <a href='#' className='btn btn-light'>
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
