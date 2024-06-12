import React from "react";
import HeaderSide from "./HeaderSide";
import Footer from "./Footer";

const TeacherProfile = ({ isLoggedIn, userData, logoutHandler }) => {
  return (
    <div>
      <HeaderSide isLoggedIn={isLoggedIn} userData={userData} logoutHandler={logoutHandler}/>

      <section className="teacher-profile">
        <h1 className="heading">profile details</h1>

        <div className="details">
          <div className="tutor">
            <img src="images/pic-2.jpg" alt="" />
            <h3>john deo</h3>
            <span>developer</span>
          </div>
          <div className="flex">
            <p>
              total playlists : <span>4</span>
            </p>
            <p>
              total videos : <span>18</span>
            </p>
            <p>
              total likes : <span>1208</span>
            </p>
            <p>
              total comments : <span>52</span>
            </p>
          </div>
        </div>
      </section>

      <section className="courses">
        <h1 className="heading">our courses</h1>

        <div className="box-container">
          <div className="box">
            <div className="thumb">
              <img src="images/thumb-1.png" alt="" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete HTML tutorial</h3>
            <a href="playlist.html" className="inline-btn">
              view playlist
            </a>
          </div>

          <div className="box">
            <div className="thumb">
              <img src="images/thumb-2.png" alt="" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete CSS tutorial</h3>
            <a href="playlist.html" className="inline-btn">
              view playlist
            </a>
          </div>

          <div className="box">
            <div className="thumb">
              <img src="images/thumb-3.png" alt="" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete javascript tutorial</h3>
            <a href="playlist.html" className="inline-btn">
              view playlist
            </a>
          </div>

          <div className="box">
            <div className="thumb">
              <img src="images/thumb-4.png" alt="" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete Boostrap tutorial</h3>
            <a href="playlist.html" className="inline-btn">
              view playlist
            </a>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default TeacherProfile;
