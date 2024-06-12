import React, { useState } from 'react';
import HeaderSide from './HeaderSide';
import Footer from './Footer';
import axios from 'axios';

const Update = ({ isLoggedIn, userData, logoutHandler }) => {
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      old_pass: formData.get("old_pass"),
      new_pass: formData.get("new_pass"),
      c_pass: formData.get("c_pass"),
    };

    try {
      const response = await axios.put("http://localhost:8080/api/update-profile", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

    } catch (error) {
      console.error(error);
      setError("Failed to update profile");
    }
  };

  return (
    <div>
      <HeaderSide isLoggedIn={isLoggedIn} userData={userData} logoutHandler={logoutHandler}/>

      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <h3>update profile</h3>
          <p>update name</p>
          <input type="text" name="name" placeholder="Enter your name" maxLength="50" className="box" />
          <p>update email</p>
          <input type="email" name="email" placeholder="Enter your mail id" maxLength="50" className="box" />
          <p>previous password</p>
          <input type="password" name="old_pass" placeholder="enter your old password" maxLength="20" className="box" />
          <p>new password</p>
          <input type="password" name="new_pass" placeholder="enter your new password" maxLength="20" className="box" />
          <p>confirm password</p>
          <input type="password" name="c_pass" placeholder="confirm your new password" maxLength="20" className="box" />
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <input type="submit" value="update profile" name="submit" className="btn" />
        </form>
      </section>
      
      <Footer/>
    </div>
  );
};

export default Update;