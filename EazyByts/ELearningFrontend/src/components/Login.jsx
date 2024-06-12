import React, { useState } from 'react';
import Footer from './Footer';
import HeaderSide from './HeaderSide';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({isLoggedIn, userData, logoutHandler, loginHandler }) => {
  const navigate=useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      email: formData.get('email'),
      password: formData.get('pass'),
    };

    try {
      const response = await axios.post('http://localhost:8080/api/login', data);

      if (response.data) {
        loginHandler(response.data);
        navigate('/');
        
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred');
    }
  };

  return (
    <div>
      <HeaderSide isLoggedIn={isLoggedIn} userData={userData} logoutHandler={logoutHandler}/>
      <section className="form-container">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h3>login now</h3>
          <p>
            Your Email <span>*</span>
          </p>
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            required
            maxLength="50"
            className="box"
          />
          <p>
            Your Password <span>*</span>
          </p>
          <input
            type="password"
            name="pass"
            placeholder="enter your password"
            required
            maxLength="20"
            className="box"
          />
          {error && <div className="error">{error}</div>}
          <input type="submit" value="Login" name="submit" className="btn" />
          <Link to="/register">
            <button className="btn">Register</button>
          </Link>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
