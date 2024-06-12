import React, { useState, useEffect } from "react";
import HeaderSide from "./HeaderSide";
import Footer from "./Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { faCalendar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { LinearProgress } from "@mui/material";

const WatchVideo = ({ isLoggedIn, userData, logoutHandler }) => {
  const { courseId, videoId } = useParams(); // Assuming the route is /watchvideo/:courseId/:videoId
  const navigate = useNavigate();
  const [courseCompletion, setCourseCompletion] = useState(null);

  const currentVideoId = parseInt(videoId, 10);
  const nextVideoId = currentVideoId + 1;

  useEffect(() => {
    const fetchCourseCompletion = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/courseCompletion/${userData.s_id}/${courseId}`);
        setCourseCompletion(response.data);
      } catch (error) {
        console.error("Error fetching course completion data:", error);
      }
    };

    fetchCourseCompletion();
  }, [userData.s_id, videoId]); // Added videoId to the dependency array
  console.log(courseCompletion);

  const handleNextClick = async () => {
    if (courseCompletion && courseCompletion.videosCompleted >= currentVideoId) {
      navigate(`/watchvideo/${courseId}/${nextVideoId}`);
      return;
    }

    const courseCompletionRequest = {
      studentId: userData.s_id,
      courseId: courseId, // Replace with the appropriate course ID
    };

    try {
      const response = await axios.post("http://localhost:8080/api/courseCompletion/update", courseCompletionRequest);

      if (response.status === 200) {
        // If the current video is the last one, show a message
        if (currentVideoId === 6) {
          alert("Congratulations! You've finished the course.");
          navigate("/courses"); // Redirect to courses page or any other appropriate action
        } else {
          navigate(`/watchvideo/${courseId}/${nextVideoId}`);
        }
      } else {
        throw new Error("Failed to update course completion.");
      }
    } catch (error) {
      console.error("Error updating course completion:", error);
      // Handle error as needed
    }
  };

  const isLastVideo = currentVideoId === 6;

  // Calculate progress
  const progress = courseCompletion
    ? (courseCompletion.videosCompleted / courseCompletion.totalVideos) * 100
    : 0;

  return (
    <div>
      <HeaderSide
        isLoggedIn={isLoggedIn}
        userData={userData}
        logoutHandler={logoutHandler}
      />

      <section className="watch-video">
        <div className="video-container">
          <div className="video">
            <video
              src="/images/vid-1.mp4"
              controls
              poster={`/images/post-1-${videoId}.png`}
              id="video"
            ></video>
          </div>
          <h3 className="title">complete HTML tutorial (part {videoId})</h3>
          <div className="title-progress">
            <LinearProgress
              color="success"
              variant="determinate"
              value={progress}
              className="progress-bar"
            />
            <button onClick={handleNextClick} className="inline-btn next-finish-btn">
              {isLastVideo ? "Finish" : "Next"}
            </button>
          </div>
          <div className="info">
            <p className="date">
              <FontAwesomeIcon icon={faCalendar} />
              <span>22-10-2022</span>
            </p>
            <p className="date">
              <FontAwesomeIcon icon={faHeart} />
              <span>44 likes</span>
            </p>
          </div>
          <div className="tutor">
            <img src="/images/pic-2.jpg" alt="" />
            <div>
              <h3>john deo</h3>
              <span>developer</span>
            </div>
          </div>
          <form className="flex">
            <Link to="/playlist" className="inline-btn">
              view playlist
            </Link>
            <button type="submit">
              <FontAwesomeIcon icon={faHeart} />
              <span>like</span>
            </button>
          </form>
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            labore ratione, hic exercitationem mollitia obcaecati culpa dolor
            placeat provident porro. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Aliquid iure autem non fugit sint. A, sequi rerum
            architecto dolor fugiat illo, iure velit nihil laboriosam cupiditate
            voluptatum facere cumque nemo!
          </p>
        </div>
      </section>
      <section className="comments">
        <h1 className="heading">5 comments</h1>
        <form className="add-comment">
          <h3>add comments</h3>
          <textarea
            name="comment_box"
            placeholder="enter your comment"
            required
            maxLength="1000"
            cols="30"
            rows="10"
          ></textarea>
          <input
            type="submit"
            value="add comment"
            className="inline-btn"
            name="add_comment"
          />
        </form>
        <h1 className="heading">user comments</h1>
        <div className="box-container">
          <div className="box">
            <div className="user">
              <img src="/images/pic-1.jpg" alt="" />
              <div>
                <h3>BOB</h3>
                <span>22-10-2022</span>
              </div>
            </div>
            <div className="comment-box">this is a comment</div>
            <form className="flex-btn">
              <input
                type="submit"
                value="edit comment"
                name="edit_comment"
                className="inline-option-btn"
              />
              <input
                type="submit"
                value="delete comment"
                name="delete_comment"
                className="inline-delete-btn"
              />
            </form>
          </div>
          <div className="box">
            <div className="user">
              <img src="/images/pic-2.jpg" alt="" />
              <div>
                <h3>john deo</h3>
                <span>22-10-2022</span>
              </div>
            </div>
            <div className="comment-box">awesome tutorial! keep going!</div>
          </div>
          <div className="box">
            <div className="user">
              <img src="/images/pic-3.jpg" alt="" />
              <div>
                <h3>john deo</h3>
                <span>22-10-2022</span>
              </div>
            </div>
            <div className="comment-box">
              amazing way of teaching! thank you so much!
            </div>
          </div>
          <div className="box">
            <div className="user">
              <img src="/images/pic-4.jpg" alt="" />
              <div>
                <h3>john deo</h3>
                <span>22-10-2022</span>
              </div>
            </div>
            <div className="comment-box">
              loved it, thanks for the tutorial!
            </div>
          </div>
          <div className="box">
            <div className="user">
              <img src="/images/pic-5.jpg" alt="" />
              <div>
                <h3>john deo</h3>
                <span>22-10-2022</span>
              </div>
            </div>
            <div className="comment-box">
              this is what I have been looking for! thank you so much!
            </div>
          </div>
          <div className="box">
            <div className="user">
              <img src="/images/pic-2.jpg" alt="" />
              <div>
                <h3>john deo</h3>
                <span>22-10-2022</span>
              </div>
            </div>
            <div className="comment-box">
              thanks for the tutorial! how to download source code file?
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WatchVideo;
