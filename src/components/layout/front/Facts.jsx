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
    <section id="facts" class="facts">
      <div class="container">
        <div class="section-title">
          <h2>Facts</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div class="row no-gutters">
          <div
            class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
          >
            <div class="count-box">
              <i>
                <BsEmojiSmile />
              </i>
              <span class="counterSmile">0</span>
              <p>
                <strong>Happy Clients</strong> consequuntur quae
              </p>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="count-box">
              <i>
                <BsJournalRichtext />
              </i>
              <span class="counterJournal">0</span>
              <p>
                <strong>Projects</strong> adipisci atque cum quia aut
              </p>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="count-box">
              <i>
                <BsHeadset />
              </i>
              <span class="counterHeadset">0</span>
              <p>
                <strong>Hours Of Support</strong> aut commodi quaerat
              </p>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="count-box">
              <i>
                <BsPeople />
              </i>
              <span className="counterPeople">0</span>
              <p>
                <strong>Hard Workers</strong> rerum asperiores dolor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
