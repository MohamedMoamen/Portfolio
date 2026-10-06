import React from "react";
import "./Education.css";
import CairoUniversity_logo from "../../Images/CairoUniversity_logo.png";

const Education = () => {
  return (
    <section id="education">
      <h1 className="education-title">Education</h1>

      <div className="education-content">
        <div className="education-item">
          <img
            src={CairoUniversity_logo}
            alt="Cairo University logo"
            className="education-logo"
          />

          <div className="education-info">
            <h2>
              B.S. in Electronics and Electrical Communication Engineering
            </h2>

            <h3>Cairo University</h3>

            <p className="education-details">2020 | Grade: Good</p>
          </div>
        </div>

        <div className="education-project">
          <h3>Graduation Project: Collision Avoidance and Warning System</h3>

          <p>
            Developed a collision avoidance and warning system using CNN and
            Vehicle-to-Vehicle (V2V) communication, sponsored by IHub and graded
            Excellent.
          </p>

          <p>
            The project included three use cases: Forward Collision Warning,
            Road Bump Detection, and Pedestrian Detection, using TM4C123GXL and
            NVIDIA Jetson Nano, with V2V communication through Wi-Fi and GPS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
