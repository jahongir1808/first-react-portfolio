import React from "react";
import "./About.css";
import aboutImg from "../../../assets/img/profile-img.jpg";

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>
            It takes great pains to benefit. His needs result from something
            that actually drives him away. Let them be what they want. Anyone
            whom anyone desires. And no one who hinders receives the others.
            Because he should flee from the offices of convenience which he has
            here.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={aboutImg} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Frontend - Web Developer.</h3>
            <p className="fst-italic">
              My name is Jahongir. I am a future front-end developer. I want to
              be one of the best programmers
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Birthday:</strong> <span>18 August 2004</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Website:</strong> <span>www.example.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone:</strong> <span>+998 91 990-18-08</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>City:</strong> <span>Uzbekistan, Navoiy</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Age:</strong> <span>18</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree:</strong> <span>Junior</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>PhEmailone:</strong>{" "}
                    <span>jahongir.developer18@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Freelance:</strong> <span>Not available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Therefore, choosing the services of labor and pains is the choice
              of the services. Anyone can get everything and that. There are no
              prosecutors in charge of the services at the time. And all his
              Because of desire, as said, most of the offices. But those who
              will be pursued will not be repulsed. Something really interesting
              to look for with desire. And from him who is repulsed by all the
              guilt of great praise the pains.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
