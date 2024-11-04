import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello, I am Pramodini from Mangalore, an aspiring Front-End
              Developer with a strong passion for crafting engaging and dynamic
              user experiences.
            </p>
            <p>
              With over 7 years of experience in different roles, including 6
              years as a Video Coverage Analyst at Stats Systems Ind Pvt Ltd and
              my current role as a Technical Trainer at Aisect,
            </p>
            <p>Focused on transitioning into front-end development.</p>
            <p>
              I am proficient in web technologies such as HTML, CSS, and
              JavaScript.
            </p>
            <p>
              My background in technical training has honed my ability to
              simplify complex concepts.
            </p>
            <p>
              I am driven by the challenge of solving problems through code and
              creating visually appealing, responsive websites that offer
              seamless user experiences.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML &CSS</p>
              <hr style={{ width: "50%" }} />
            </div>

            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>AWS &DevOps</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>7+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
