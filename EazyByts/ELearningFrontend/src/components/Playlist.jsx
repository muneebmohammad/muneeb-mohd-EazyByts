import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import HeaderSide from "./HeaderSide";
import Footer from "./Footer";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Playlist = ({ isLoggedIn, userData, logoutHandler }) => {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const [videos, setVideos] = useState([]);
  const [enrolled, setEnrolled] = useState(false); // Track enrollment status

  useEffect(() => {
    // Fetch course details and videos from the backend using courseId
    // Mock data for now
    const fetchCourseData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/courses/${courseId}`); // Assuming API endpoint for course details
        setCourse(response.data); // Set course data from response
      } catch (error) {
        console.error("Error fetching course data:", error);
        // Handle errors appropriately (e.g., display error message to user)
      }
    };
    fetchCourseData();
    setVideos([
      {
        id: 1,
        title: "Complete HTML tutorial (part 01)",
        thumb: "/images/post-1-1.png",
      },
      {
        id: 2,
        title: "Complete HTML tutorial (part 02)",
        thumb: "/images/post-1-2.png",
      },
      {
        id: 3,
        title: "Complete HTML tutorial (part 03)",
        thumb: "/images/post-1-3.png",
      },
      {
        id: 4,
        title: "Complete HTML tutorial (part 04)",
        thumb: "/images/post-1-4.png",
      },
      {
        id: 5,
        title: "Complete HTML tutorial (part 05)",
        thumb: "/images/post-1-5.png",
      },
      {
        id: 6,
        title: "Complete HTML tutorial (part 06)",
        thumb: "/images/post-1-6.png",
      },
    ]);
  }, [courseId]);

  const handleEnroll = (e) => {
    e.preventDefault(); // Prevent form submission
    const studentId = userData.s_id; // Assuming userData contains the student's ID

    axios
      .post(`http://localhost:8080/api/enroll`, { studentId, courseId })
      .then((response) => {
        alert("Enrolled successfully!");
        setEnrolled(true); // Disable the enroll button
        // Optionally update UI or redirect to another page
      })
      .catch((error) => {
        console.error("There was an error enrolling the student!", error);
        // Handle error response
      });
  };

  return (
    <div>
      <HeaderSide
        isLoggedIn={isLoggedIn}
        userData={userData}
        logoutHandler={logoutHandler}
      />

      <section className="playlist-details">
        <h1 className="heading">playlist details</h1>

        <div className="row">
          <div className="column">
            <Link to="/teacherprofile" className="inline-btn">
              view profile
            </Link>

            <div className="thumb">
              <img src={course.thumb} alt="" />
              <span>{videos.length} videos</span>
            </div>
          </div>
          <div className="column">
            <div className="tutor">
              <img src="/images/pic-2.jpg" alt="" />
              <div>
                <h3>{course.tutor}</h3>
                <span>{course.date}</span>
              </div>
            </div>

            <div className="details">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              {isLoggedIn ? (
                <form action="" method="post" className="save-playlist">
                  {!enrolled ? (
                    <button type="submit" onClick={handleEnroll}>
                      <FontAwesomeIcon icon={faBookmark} /> <span>Enroll</span>
                    </button>
                  ) : (
                    <button disabled>
                      <FontAwesomeIcon icon={faBookmark} />{" "}
                      <span>Enrolled</span>
                    </button>
                  )}
                </form>
              ) : (
                <Link to="/login" className="inline-btn">
                  Login to Enroll
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="playlist-videos">
        <h1 className="heading">playlist videos</h1>

        <div className="box-container">
          {videos.map((video) => (
            <Link to={`/watchvideo/${courseId}/${video.id}`} className="box" key={video.id}>
              <img src={video.thumb} alt="" />
              <h3>{video.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Playlist;
