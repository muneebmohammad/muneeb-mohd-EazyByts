import React from "react";
import { Link } from "react-router-dom";
import HeaderSide from "./HeaderSide";
import Footer from "./Footer";

const Teachers = ({ isLoggedIn, userData, logoutHandler }) => {
  return (
    <div>
      <HeaderSide isLoggedIn={isLoggedIn} userData={userData} logoutHandler={logoutHandler}/>

      <section className="teachers">
        <h1 className="heading">expert teachers</h1>

        <form action="" method="post" className="search-tutor">
          <input
            type="text"
            name="search_box"
            placeholder="search tutors..."
            required
            maxLength="100"
          />
          <button
            type="submit"
            className="fas fa-search"
            name="search_tutor"
          ></button>
        </form>

        <div className="box-container">
          <div className="box offer">
            <h3>become a tutor</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              itaque ipsam fuga ex et aliquam.
            </p>
            <Link to="/register" className="inline-btn">get started</Link>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="images/pic-2.jpg" alt="" />
              <div>
                <h3>john deo</h3>
                <span>developer</span>
              </div>
            </div>
            <p>
              total playlists : <span>4</span>
            </p>
            <p>
              total videos : <span>18</span>
            </p>
            <p>
              total likes : <span>1208</span>
            </p>
            <Link to="/teacherprofile" className="inline-btn">view profile</Link>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="images/pic-3.jpg" alt="" />
              <div>
                <h3>john deo</h3>
                <span>developer</span>
              </div>
            </div>
            <p>
              total playlists : <span>4</span>
            </p>
            <p>
              total videos : <span>18</span>
            </p>
            <p>
              total likes : <span>1208</span>
            </p>
            <Link to="/teacherprofile" className="inline-btn">view profile</Link>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="images/pic-4.jpg" alt="" />
              <div>
                <h3>john deo</h3>
                <span>developer</span>
              </div>
            </div>
            <p>
              total playlists : <span>4</span>
            </p>
            <p>
              total videos : <span>18</span>
            </p>
            <p>
              total likes : <span>1208</span>
            </p>
            <Link to="/teacherprofile" className="inline-btn">view profile</Link>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="images/pic-5.jpg" alt="" />
              <div>
                <h3>john deo</h3>
                <span>developer</span>
              </div>
            </div>
            <p>
              total playlists : <span>4</span>
            </p>
            <p>
              total videos : <span>18</span>
            </p>
            <p>
              total likes : <span>1208</span>
            </p>
            <Link to="/teacherprofile" className="inline-btn">view profile</Link>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="images/pic-6.jpg" alt="" />
              <div>
                <h3>john deo</h3>
                <span>developer</span>
              </div>
            </div>
            <p>
              total playlists : <span>4</span>
            </p>
            <p>
              total videos : <span>18</span>
            </p>
            <p>
              total likes : <span>1208</span>
            </p>
            <Link to="/teacherprofile" className="inline-btn">view profile</Link>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="images/pic-7.jpg" alt="" />
              <div>
                <h3>john deo</h3>
                <span>developer</span>
              </div>
            </div>
            <p>
              total playlists : <span>4</span>
            </p>
            <p>
              total videos : <span>18</span>
            </p>
            <p>
              total likes : <span>1208</span>
            </p>
            <Link to="/teacherprofile" className="inline-btn">view profile</Link>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="images/pic-8.jpg" alt="" />
              <div>
                <h3>john deo</h3>
                <span>developer</span>
              </div>
            </div>
            <p>
              total playlists : <span>4</span>
            </p>
            <p>
              total videos : <span>18</span>
            </p>
            <p>
              total likes : <span>1208</span>
            </p>
            <Link to="/teacherprofile" className="inline-btn">view profile</Link>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Teachers;
