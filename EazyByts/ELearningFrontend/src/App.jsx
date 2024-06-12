import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Login from "./components/Login";
import Playlist from "./components/Playlist";
import Profile from "./components/Profile";
import Teachers from "./components/Teachers";
import Register from "./components/Register";
import WatchVideo from "./components/WatchVideo";
import TeacherProfile from "./components/TeacherProfile";
import Update from "./components/Update";
import EnrolledCourses from "./components/EnrolledCourses";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  const loginHandler = (data) => {
    setUserData(data);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setUserData({});
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Home isLoggedIn={isLoggedIn} userData={userData} />}
          />
          <Route
            path="/about"
            element={
              <About
                isLoggedIn={isLoggedIn}
                userData={userData}
                logoutHandler={logoutHandler}
              />
            }
          />
          <Route
            path="/courses"
            element={
              <Courses
                isLoggedIn={isLoggedIn}
                userData={userData}
                logoutHandler={logoutHandler}
              />
            }
          />
          <Route
            path="/teachers"
            element={
              <Teachers
                isLoggedIn={isLoggedIn}
                userData={userData}
                logoutHandler={logoutHandler}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact
                isLoggedIn={isLoggedIn}
                userData={userData}
                logoutHandler={logoutHandler}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                isLoggedIn={isLoggedIn}
                userData={userData}
                logoutHandler={logoutHandler}
              />
            }
          />
          <Route
            path="/playlist/:courseId"
            element={
              <Playlist
                isLoggedIn={isLoggedIn}
                userData={userData}
                logoutHandler={logoutHandler}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register
                isLoggedIn={isLoggedIn}
                userData={userData}
                logoutHandler={logoutHandler}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                isLoggedIn={isLoggedIn}
                userData={userData}
                logoutHandler={logoutHandler}
                loginHandler={loginHandler}
              />
            }
          />
          <Route
            path="/watchvideo/:courseId/:videoId" 
            element={
              <WatchVideo
                isLoggedIn={isLoggedIn}
                userData={userData}
                logoutHandler={logoutHandler}
              />
            }
          />
          <Route
            path="/teacherprofile"
            element={
              <TeacherProfile
                isLoggedIn={isLoggedIn}
                userData={userData}
                logoutHandler={logoutHandler}
              />
            }
          />
          <Route
            path="/update"
            element={
              <Update
                isLoggedIn={isLoggedIn}
                userData={userData}
                logoutHandler={logoutHandler}
              />
            }
          />
          <Route
            path="/enrolled-courses"
            element={
              <EnrolledCourses
                isLoggedIn={isLoggedIn}
                userData={userData}
                logoutHandler={logoutHandler}
              />
            }
          />
          {/* <Route path="*" element={<div>404 Not Found!</div>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
