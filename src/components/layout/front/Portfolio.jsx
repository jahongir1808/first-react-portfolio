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
    <section id="portfolio" class="portfolio section-bg section">
      <div class="container">
        <div class="section-title">
          <h2>Portfolio</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div class="row" data-aos="fade-up">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div
          class="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={portfolioImg1} class="img-fluid" alt="" />
              <div class="portfolio-links">
                <a
                  href={portfolioImg1}
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
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

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src={portfolioImg2} class="img-fluid" alt="" />
              <div class="portfolio-links">
                <a
                  href={portfolioImg2}
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
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

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={portfolioImg3} class="img-fluid" alt="" />
              <div class="portfolio-links">
                <a
                  href={portfolioImg3}
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
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

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src={portfolioImg4} class="img-fluid" alt="" />
              <div class="portfolio-links">
                <a
                  href={portfolioImg4}
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
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

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src={portfolioImg5} class="img-fluid" alt="" />
              <div class="portfolio-links">
                <a
                  href={portfolioImg5}
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
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

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={portfolioImg6} class="img-fluid" alt="" />
              <div class="portfolio-links">
                <a
                  href={portfolioImg6}
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
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

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src={portfolioImg7} class="img-fluid" alt="" />
              <div class="portfolio-links">
                <a
                  href={portfolioImg7}
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
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

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src={portfolioImg8} class="img-fluid" alt="" />
              <div class="portfolio-links">
                <a
                  href={portfolioImg8}
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
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

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src={portfolioImg9} class="img-fluid" alt="" />
              <div class="portfolio-links">
                <a
                  href={portfolioImg9}
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
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
