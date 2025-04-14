import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      {/* Main About Section */}
      <section className="about-section">
        <div className="lavender-book-hub">
          <img
            src="/assets/images/lavender-book-hub.jpeg"
            alt="Lavender Book Hub"
          />
          <div className="about-details">
            <h1 className="about-title">About Lavender Book Hub</h1>
            <p className="about-description">
              Welcome to Lavender Book Hub, your cozy corner for discovering,
              sharing, and celebrating books that inspire and captivate. Our
              mission is to create a vibrant community where book lovers can
              connect, explore diverse stories, and find their next great read.
            </p>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="about-cards">
        <div className="card">
          <img src="/assets/images/vision.png" alt="Vision icon" />
          <div>
            <h3>Our Vision</h3>
            <p>
              To foster a love for reading by curating stories that spark joy,
              curiosity, and connection.
            </p>
          </div>
        </div>
        <div className="card">
          <img src="/assets/images/community.png" alt="Community icon" />
          <div>
            <h3>Our Community</h3>
            <p>
              Join readers from around the world to discuss, recommend, and
              celebrate the books that matter to you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
