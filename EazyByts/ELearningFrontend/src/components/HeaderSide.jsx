import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChalkboardUser,
  faGraduationCap,
  faHeadset,
  faHome,
  faMoon,
  faQuestion,
  faSun,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const HeaderSide = ({ isLoggedIn, userData, logoutHandler }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("dark-mode") === "enabled"
  );
  const [profileActive, setProfileActive] = useState(false);
  const [sideBarActive, setSideBarActive] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setProfileActive(false);
      if (window.innerWidth < 1200) {
        setSideBarActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (sideBarActive) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [sideBarActive]);
  
  
  const toggleDarkMode = () => {
    if (darkMode) {
      localStorage.setItem("dark-mode", "disabled");
      setDarkMode(false);
    } else {
      localStorage.setItem("dark-mode", "enabled");
      setDarkMode(true);
    }
  };

  const toggleProfile = () => {
    setProfileActive(!profileActive);
  };

  const toggleSideBar = () => {
    setSideBarActive(!sideBarActive);
  };

  const closeSideBar = () => {
    setSideBarActive(false);
  };

  const handleLogout = () => {
    logoutHandler();
    // Additional logic can be added here, e.g., redirecting to login page
  };

  return (
    <div>
      <header className="header">
        <section className="flex">
          <Link to="/" className="logo">
            EazyByts Infotech
          </Link>

          <form action="/search" method="post" className="search-form">
            <input
              type="text"
              name="search_box"
              required
              placeholder="search courses..."
              maxLength="100"
            />
            <button type="submit" className="fas fa-search"></button>
          </form>

          <div className="icons">
            <div className="menu-btn" onClick={toggleSideBar}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="user-btn" onClick={toggleProfile}>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div
              id="toggle-btn"
              className="toggle-btn"
              onClick={toggleDarkMode}
            >
              <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
            </div>
          </div>

          <div className={`profile ${profileActive ? "active" : ""}`}>
            <img src="/images/pic-1.jpg" className="image" alt="" />
            {userData && (
              <>
                <h3 className="name">{userData.name}</h3>
                <p className="role">student</p>

                {isLoggedIn && (
                  <Link to="/profile" className="btn">
                    view profile
                  </Link>
                )}

                <div className="flex-btn">
                  {isLoggedIn ? (
                    <>
                      <Link
                        to="/"
                        className="option-btn"
                        onClick={handleLogout}
                      >
                        logout
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className="option-btn">
                        login
                      </Link>
                      <Link to="/register" className="option-btn">
                        register
                      </Link>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </section>
      </header>

      <div className={`side-bar ${sideBarActive ? "active" : ""}`}>
        <div id="close-btn" onClick={closeSideBar}>
          <FontAwesomeIcon icon={faTimes} />
        </div>

        <div className="profile">
          <img src="/images/pic-1.jpg" className="image" alt="" />
          {userData && (
            <>
              <h3 className="name">{userData.name}</h3>
              {isLoggedIn && <p className="role">student</p>}
              {isLoggedIn && (
                <Link to="/profile" className="btn">
                  view profile
                </Link>
              )}
            </>
          )}
        </div>

        <nav className="navbar">
          <Link to="/" onClick={closeSideBar}>
            <FontAwesomeIcon icon={faHome} />
            <span>home</span>
          </Link>
          <Link to="/about" onClick={closeSideBar}>
            <FontAwesomeIcon icon={faQuestion} />
            <span>about</span>
          </Link>
          <Link to="/courses" onClick={closeSideBar}>
            <FontAwesomeIcon icon={faGraduationCap} />
            <span>courses</span>
          </Link>
          <Link to="/teachers" onClick={closeSideBar}>
            <FontAwesomeIcon icon={faChalkboardUser} />
            <span>teachers</span>
          </Link>
          <Link to="/contact" onClick={closeSideBar}>
            <FontAwesomeIcon icon={faHeadset} />
            <span>contact us</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default HeaderSide;
