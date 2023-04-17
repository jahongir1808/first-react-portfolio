import React from "react";
import "./Portfolio.css";
import portfolioImg1 from "../../../assets/img/portfolio/portfolio-1.jpg";
import portfolioImg2 from "../../../assets/img/portfolio/portfolio-2.jpg";
import portfolioImg3 from "../../../assets/img/portfolio/portfolio-3.jpg";
import portfolioImg4 from "../../../assets/img/portfolio/portfolio-4.jpg";
import portfolioImg5 from "../../../assets/img/portfolio/portfolio-5.jpg";
import portfolioImg6 from "../../../assets/img/portfolio/portfolio-6.jpg";
import portfolioImg7 from "../../../assets/img/portfolio/portfolio-7.jpg";
import portfolioImg8 from "../../../assets/img/portfolio/portfolio-8.jpg";
import portfolioImg9 from "../../../assets/img/portfolio/portfolio-9.jpg";
import { BiLink, BiPlus } from "react-icons/bi";
const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section-bg section">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={portfolioImg1} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a
                  href={portfolioImg1}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 1"
                >
                  <i>
                    <BiPlus />
                  </i>
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i>
                    <BiLink />
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={portfolioImg2} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a
                  href={portfolioImg2}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Web 3"
                >
                  <i>
                    <BiPlus />
                  </i>
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i>
                    <BiLink />
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={portfolioImg3} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a
                  href={portfolioImg3}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 2"
                >
                  <i>
                    <BiPlus />
                  </i>
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i>
                    <BiLink />
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={portfolioImg4} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a
                  href={portfolioImg4}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Card 2"
                >
                  <i>
                    <BiPlus />
                  </i>
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i>
                    <BiLink />
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={portfolioImg5} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a
                  href={portfolioImg5}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Web 2"
                >
                  <i>
                    <BiPlus />
                  </i>
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i>
                    <BiLink />
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={portfolioImg6} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a
                  href={portfolioImg6}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 3"
                >
                  <i>
                    <BiPlus />
                  </i>
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i>
                    <BiLink />
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={portfolioImg7} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a
                  href={portfolioImg7}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Card 1"
                >
                  <i>
                    <BiPlus />
                  </i>
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i>
                    <BiLink />
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={portfolioImg8} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a
                  href={portfolioImg8}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Card 3"
                >
                  <i>
                    <BiPlus />
                  </i>
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i>
                    <BiLink />
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={portfolioImg9} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a
                  href={portfolioImg9}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Web 3"
                >
                  <i>
                    <BiPlus />
                  </i>
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i>
                    <BiLink />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
