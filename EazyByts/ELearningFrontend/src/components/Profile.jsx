import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderSide from "./HeaderSide";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Profile = ({ isLoggedIn, userData, logoutHandler }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/enrollments/student/${userData.s_id}`);
        setEnrolledCourses(response.data.map(enrollment => enrollment.course));
      } catch (error) {
        console.error("Error fetching enrolled courses:", error);
      }
    };

    if (userData.s_id) {
      fetchEnrolledCourses();
    }
  }, [userData.s_id]);

  return (
    <div>
      <HeaderSide isLoggedIn={isLoggedIn} userData={userData} logoutHandler={logoutHandler} />

      <section className="user-profile">
        <h1 className="heading">your profile</h1>

        <div className="info">
          <div className="user">
            <img src="images/pic-1.jpg" alt="" />
            <h3>{userData.name}</h3>
            <p>student</p>
            <Link to="/update" className="inline-btn">update profile</Link>
          </div>

          <div className="box-container">
            <div className="box">
              <div className="flex">
                <FontAwesomeIcon icon={faBookmark} />
                <div>
                  <span>{enrolledCourses.length}</span>
                  <p>enrolled courses</p>
                </div>
              </div>
              <Link to="/enrolled-courses" className="inline-btn">view courses</Link>
            </div>

            <div className="box">
              <div className="flex">
                <FontAwesomeIcon icon={faHeart} />
                <div>
                  <span>33</span>
                  <p>videos liked</p>
                </div>
              </div>
              <Link to="" className="inline-btn">view liked</Link>
            </div>

            <div className="box">
              <div className="flex">
                <FontAwesomeIcon icon={faComment} />
                <div>
                  <span>12</span>
                  <p>videos comments</p>
                </div>
              </div>
              <Link to="" className="inline-btn">view comments</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;
