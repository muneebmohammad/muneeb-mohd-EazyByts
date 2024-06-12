import React from "react";
import HeaderSide from "./HeaderSide";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = ({ isLoggedIn, userData, logoutHandler }) => {
  return (
    <div>
      <HeaderSide isLoggedIn={isLoggedIn} userData={userData} logoutHandler={logoutHandler}/>

      <section className="contact">
        <div className="row">
          <div className="image">
            <img src="images/contact-img.svg" alt="" />
          </div>

          <form action="#" method="post">
            <h3>get in touch</h3>
            <input
              type="text"
              placeholder="enter your name"
              name="name"
              required
              maxLength="50"
              className="box"
            />
            <input
              type="email"
              placeholder="enter your email"
              name="email"
              required
              maxLength="50"
              className="box"
            />
            <input
              type="number"
              placeholder="enter your number"
              name="number"
              required
              maxLength="50"
              className="box"
            />
            <textarea
              name="msg"
              className="box"
              placeholder="enter your message"
              required
              maxLength="1000"
              cols="30"
              rows="10"
            ></textarea>
            <input
              type="submit"
              value="send message"
              className="inline-btn"
              name="submit"
            />
          </form>
        </div>

        <div className="box-container">
          <div className="box">
            <FontAwesomeIcon icon={faPhone}/>
            <h3>phone number</h3>
            <a href="tel:1234567890">123-456-7890</a>
            <a href="tel:1112223333">111-222-3333</a>
          </div>

          <div className="box">
            <FontAwesomeIcon icon={faEnvelope}/>
            <h3>email address</h3>
            <a href="mailto:shaikhanas@gmail.com">johndoe@example.com</a>
          </div>

          <div className="box">
          <FontAwesomeIcon icon={faMapMarkerAlt}/>
            <h3>office address</h3>
            <a href="#">
              ADDRESS
            </a>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Contact;
