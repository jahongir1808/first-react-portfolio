import React from "react";
import "./Services.css";
import {
  BsBriefcase,
  BsCardChecklist,
  BsBarChart,
  BsCalendarWeek,
  BsBrightnessHigh,
  BsBinoculars,
} from "react-icons/bs";

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>
            It takes great pains to benefit. His needs result from something
            that actually drives him away. Let them be what they want. Anyone
            whom anyone desires. And no one who hinders receives the others.
            Because he should flee from the offices of convenience which he has
            here.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div className="icon">
              <i>
                <BsBriefcase />
              </i>
            </div>
            <h4 className="title">
              <a href="">Lorem Ipsum</a>
            </h4>
            <p className="description">
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="icon">
              <i>
                <BsCardChecklist />
              </i>
            </div>
            <h4 className="title">
              <a href="">Dolor Sitema</a>
            </h4>
            <p className="description">
              Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat tarad limino ata
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="icon">
              <i>
                <BsBarChart />
              </i>
            </div>
            <h4 className="title">
              <a href="">Sed ut perspiciatis</a>
            </h4>
            <p className="description">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="icon">
              <i>
                <BsBinoculars />
              </i>
            </div>
            <h4 className="title">
              <a href="">Magni Dolores</a>
            </h4>
            <p className="description">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="icon">
              <i>
                <BsBrightnessHigh />
              </i>
            </div>
            <h4 className="title">
              <a href="">Nemo Enim</a>
            </h4>
            <p className="description">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="icon">
              <i>
                <BsCalendarWeek />
              </i>
            </div>
            <h4 className="title">
              <a href="">Eiusmod Tempor</a>
            </h4>
            <p className="description">
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
