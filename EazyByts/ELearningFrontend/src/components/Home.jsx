import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import HeaderSide from "./HeaderSide";
import Footer from "./Footer";
import {
  faCamera,
  faChartLine,
  faChartSimple,
  faCode,
  faCog,
  faMusic,
  faPen,
  faVial,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3,
  faHtml5,
  faJs,
  faPhp,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const Home = ({ isLoggedIn, userData, logoutHandler }) => {
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

  return (
    <div>
      <HeaderSide isLoggedIn={isLoggedIn} userData={userData} logoutHandler={logoutHandler} />
      
      <section className="home-grid">
        <h1 className="heading">quick options</h1>
        <div className="box-container">
          <div className="box">
            <h3 className="title">likes and comments</h3>
            <p className="likes">total likes : <span>25</span></p>
            <p className="likes">total comments : <span>12</span></p>
            <p className="likes">saved playlists : <span>4</span></p>
            <Link to="/courses"><button className="inline-btn">view playlists</button></Link>
          </div>
          <div className="box">
            <h3 className="title">top categories</h3>
            <div className="flex">
              <a href="#"><FontAwesomeIcon icon={faCode} /><span>development</span></a>
              <a href="#"><FontAwesomeIcon icon={faChartSimple} /><span>business</span></a>
              <a href="#"><FontAwesomeIcon icon={faPen} /><span>design</span></a>
              <a href="#"><FontAwesomeIcon icon={faChartLine} /><span>marketing</span></a>
              <a href="#"><FontAwesomeIcon icon={faMusic} /><span>music</span></a>
              <a href="#"><FontAwesomeIcon icon={faCamera} /><span>photography</span></a>
              <a href="#"><FontAwesomeIcon icon={faCog} /><span>software</span></a>
              <a href="#"><FontAwesomeIcon icon={faVial} /><span>science</span></a>
            </div>
          </div>
          <div className="box">
            <h3 className="title">popular topics</h3>
            <div className="flex">
              <a href="#"><FontAwesomeIcon icon={faHtml5} /><span>HTML</span></a>
              <a href="#"><FontAwesomeIcon icon={faCss3} /><span>CSS</span></a>
              <a href="#"><FontAwesomeIcon icon={faJs} /><span>javascript</span></a>
              <a href="#"><FontAwesomeIcon icon={faReact} /><span>react</span></a>
              <a href="#"><FontAwesomeIcon icon={faPhp} /><span>PHP</span></a>
              <a href="#"><FontAwesomeIcon icon={faBootstrap} /><span>bootstrap</span></a>
            </div>
          </div>
          <div className="box">
            <h3 className="title">become a tutor</h3>
            <p className="tutor">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, nam?</p>
            <Link to="/teachers" className="inline-btn">get started</Link>
          </div>
        </div>
      </section>
      
      <section className="courses">
        <h1 className="heading">our courses</h1>
        <div className="box-container">
          {courses.map((course) => (
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
        <div className="more-btn">
          <Link to="/courses" className="inline-option-btn">view all courses</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
