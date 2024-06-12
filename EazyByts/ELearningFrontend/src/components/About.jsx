import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import HeaderSide from "./HeaderSide";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faChalkboardUser, faGraduationCap, faStar, faStarHalf, faStarHalfAlt, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

const About = ({ isLoggedIn, userData, logoutHandler }) => {
  return (
    <div>
      <HeaderSide isLoggedIn={isLoggedIn} userData={userData} logoutHandler={logoutHandler}/>

      <section className="about">
        <div className="row">
          <div className="image">
            <img src="images/about-img.svg" alt="" />
          </div>

          <div className="content">
            <h3>why choose us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
              dolorum quasi illo? Distinctio expedita commodi, nemo a quam error
              repellendus sint, fugiat quis numquam eum eveniet sequi aspernatur
              quaerat tenetur.
            </p>
            <Link to="/courses" className="inline-btn">
              our courses
            </Link>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <FontAwesomeIcon icon={faGraduationCap}/>
            <div>
              <h3>+10k</h3>
              <p>online courses</p>
            </div>
          </div>

          <div className="box">
            <FontAwesomeIcon icon={faUserGraduate}/>
            <div>
              <h3>+40k</h3>
              <p>brilliant students</p>
            </div>
          </div>

          <div className="box">
            <FontAwesomeIcon icon={faChalkboardUser}/>
            <div>
              <h3>+2k</h3>
              <p>expert tutors</p>
            </div>
          </div>

          <div className="box">
            <FontAwesomeIcon icon={faBriefcase}/>
            <div>
              <h3>100%</h3>
              <p>job placement</p>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews">
        <h1 className="heading">student's reviews</h1>

        <div className="box-container">
          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <img src="images/pic-2.jpg" alt="" />
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStarHalfAlt}/>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <img src="images/pic-3.jpg" alt="" />
              <div>
                <h3>john deo</h3>
                <div className="stars">
                <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStarHalfAlt}/>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <img src="images/pic-4.jpg" alt="" />
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStarHalfAlt}/>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <img src="images/pic-5.jpg" alt="" />
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStarHalfAlt}/>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <img src="images/pic-6.jpg" alt="" />
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStarHalfAlt}/>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <img src="images/pic-7.jpg" alt="" />
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStarHalfAlt}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default About;
