import React, { useState } from "react";
import HeaderSide from "./HeaderSide";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = ({ isLoggedIn, userData, logoutHandler }) => {
  const navigate = useNavigate();
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const password = formData.get("pass");
    const confirmPassword = formData.get("c_pass");

    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    }

    // Passwords match, handle form submission
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: password,
      confirmPassword: confirmPassword,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/students",
        data,
        {
          headers: {
            "Content-Type": "application/json", // Set the content type
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        // Handle successful registration (e.g., redirect)
        alert("Registration successful:", response.data);
      } else {
        throw new Error("Network response was not ok");
        // Handle registration errors based on the response
      }

      // Reset password match state
      setPasswordMatch(true);

      //navigate to login page on successful submission
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
      // Handle error as needed
    }
  };

  return (
    <div>
      <HeaderSide
        isLoggedIn={isLoggedIn}
        userData={userData}
        logoutHandler={logoutHandler}
      />

      <section className="form-container">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h3>Register Now</h3>
          <p>
            Your Name <span>*</span>
          </p>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            maxLength="50"
            className="box"
          />
          <p>
            Your Email <span>*</span>
          </p>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
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
            placeholder="Enter your password"
            required
            maxLength="20"
            className="box"
          />
          <p>
            Confirm Password <span>*</span>
          </p>
          <input
            type="password"
            name="c_pass"
            placeholder="Confirm your password"
            required
            maxLength="20"
            className="box"
          />
          {!passwordMatch && (
            <p style={{ color: "red" }}>Passwords do not match</p>
          )}

          <input type="submit" value="Register" name="submit" className="btn" />
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default Register;
