import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderSide from "./HeaderSide";
import Footer from "./Footer";
import axios from "axios";

const Courses = ({ isLoggedIn, userData, logoutHandler }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    // Fetch enrolled courses data
    const fetchEnrolledCourses = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/enrollments/student/${userData.s_id}`
        );
        const enrollments = response.data; // Assuming this returns an array of enrollments
        setEnrolledCourses(
          enrollments.map((enrollment) => enrollment.course.c_id)
        );
      } catch (error) {
        console.error("Error fetching enrolled courses:", error);
      }
    };

    if (userData.s_id) {
      fetchEnrolledCourses();
    }
  }, [userData.s_id]);

  const courses = [
    {
      id: 1,
      title: "Complete HTML tutorial",
      tutor: "john deo",
      date: "21-10-2022",
      thumb: "images/thumb-1.png",
    },
    {
      id: 2,
      title: "Complete CSS tutorial",
      tutor: "john deo",
      date: "21-10-2022",
      thumb: "images/thumb-2.png",
    },
    {
      id: 3,
      title: "Complete JS tutorial",
      tutor: "john deo",
      date: "21-10-2022",
      thumb: "images/thumb-3.png",
    },
    {
      id: 4,
      title: "Complete Bootstrap tutorial",
      tutor: "john deo",
      date: "21-10-2022",
      thumb: "images/thumb-4.png",
    },
    {
      id: 5,
      title: "Complete JQuery tutorial",
      tutor: "john deo",
      date: "21-10-2022",
      thumb: "images/thumb-5.png",
    },
    {
      id: 6,
      title: "Complete SASS tutorial",
      tutor: "john deo",
      date: "21-10-2022",
      thumb: "images/thumb-6.png",
    },
    {
      id: 7,
      title: "Complete PHP tutorial",
      tutor: "john deo",
      date: "21-10-2022",
      thumb: "images/thumb-7.png",
    },
    {
      id: 8,
      title: "Complete MySQL tutorial",
      tutor: "john deo",
      date: "21-10-2022",
      thumb: "images/thumb-8.png",
    },
    {
      id: 9,
      title: "Complete React tutorial",
      tutor: "john deo",
      date: "21-10-2022",
      thumb: "images/thumb-9.png",
    },
  ];

  const enrolledCourseDetails = courses.filter((course) =>
    enrolledCourses.includes(course.id)
  );

  return (
    <div>
      <HeaderSide
        isLoggedIn={isLoggedIn}
        userData={userData}
        logoutHandler={logoutHandler}
      />

      <section className="courses">
        <h1 className="heading">your enrolled courses</h1>

        <div className="box-container">
          {enrolledCourseDetails.map((course) => (
            <div className="box" key={course.id}>
              <div className="tutor">
                <img src="images/pic-2.jpg" alt="" />
                <div className="info">
                  <h3>{course.tutor}</h3>
                  <span>{course.date}</span>
                </div>
              </div>
              <Link to={`/playlist/${course.id}`}>
                <div className="thumb">
                  <img src={course.thumb} alt="" />
                  <span>10 videos</span>
                </div>
                <h3 className="title">{course.title}</h3>
                <button className="inline-btn">view playlist</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
