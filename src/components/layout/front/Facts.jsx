import React, { useEffect } from "react";
import "./Facts.css";
import PureCounter from "@srexi/purecounterjs";
import {
  BsEmojiSmile,
  BsJournalRichtext,
  BsHeadset,
  BsPeople,
} from "react-icons/bs";

const Facts = () => {
  useEffect(() => {
    new PureCounter({
      selector: ".counterSmile",
      start: 0,
      end: 232,
      duration: 2,
    });
    new PureCounter({
      selector: ".counterJournal",
      start: 0,
      end: 521,
      duration: 2,
    });
    new PureCounter({
      selector: ".counterHeadset",
      start: 0,
      end: 1453,
      duration: 2,
    });
    new PureCounter({
      selector: ".counterPeople",
      start: 0,
      end: 32,
      duration: 2,
    });
  }, []);
  return (
    <section id="facts" className="facts section">
      <div className="container">
        <div className="section-title">
          <h2>Facts</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row no-gutters">
          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
          >
            <div className="count-box">
              <i>
                <BsEmojiSmile />
              </i>
              <span className="counterSmile">0</span>
              <p>
                <strong>Happy Clients </strong>achieve that
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="count-box">
              <i>
                <BsJournalRichtext />
              </i>
              <span className="counterJournal">0</span>
              <p>
                <strong>Projects</strong> get and when because or
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="count-box">
              <i>
                <BsHeadset />
              </i>
              <span className="counterHeadset">0</span>
              <p>
                <strong>Hours Of Support</strong> or seek advantage
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="count-box">
              <i>
                <BsPeople />
              </i>
              <span className="counterPeople">0</span>
              <p>
                <strong>Hard Workers</strong> the harsher pain of things
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
