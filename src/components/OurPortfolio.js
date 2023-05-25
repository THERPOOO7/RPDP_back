import React from 'react'

// import v1 from './Images/w1.jpg.webp'
// import v2 from './Images/w2.jpg.webp'
// import v3 from './Images/w3.jpg.webp'
// import v4 from './Images/w4.jpg.webp'

import W1 from './Images/w1.jpg.webp'

import W2 from './Images/w2.jpg.webp'

import W3 from './Images/w3.jpg.webp'

import W4 from './Images/w4.jpg.webp' 

const OurPortfolio = () => {
  return (
    <div className="">
      <section className="work-area section-gap-top" id="work">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h3>Our Portfolio</h3>

                <h2>
                  <span>Check</span> Our Work
                </h2>
              </div>
            </div>

            <div className="col-lg-12 d-none">
              <div className="filters">
                <ul>
                  <li className="active" data-filter=".all" />
                </ul>
              </div>
            </div>
          </div>

          <div className="filters-content">
            <div
              className="row grid"
              style={{ position: "relative", height: 1160 }}
            >
              <div className="col-lg-4 col-md-6 grid-sizer" />

              <div
                className="col-lg-8 col-md-12 grid-item all wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0s"
                style={{
                  visibility: "visible",

                  animationDuration: "2s",

                  animationDelay: "0s",

                  animationName: "fadeIn",

                  position: "absolute",

                  left: "0%",

                  top: 0,
                }}
              >
                <div className="single-work">
                  <div className="relative">
                    <div className="thumb">
                      <img className="image img-fluid" src={W1} alt="" />
                    </div>

                    <div className="middle">
                      <h4>2D Vinyl Design</h4>

                      <div className="cat">Client Project</div>
                    </div>

                    <a className="overlay" href="project-details.html" />
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 grid-item col-md-6 all wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",

                  animationDuration: "2s",

                  animationDelay: "0.4s",

                  animationName: "fadeIn",

                  position: "absolute",

                  left: "66.5789%",

                  top: 0,
                }}
              >
                <div className="single-work">
                  <div className="relative">
                    <div className="thumb">
                      <img className="image img-fluid" src={W2} alt="" />
                    </div>

                    <div className="middle">
                      <h4>2D Vinyl Design</h4>

                      <div className="cat">Client Project</div>
                    </div>

                    <a className="overlay" href="project-details.html" />
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 grid-item col-md-6 all wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",

                  animationDuration: "2s",

                  animationDelay: "0.4s",

                  animationName: "fadeIn",

                  position: "absolute",

                  left: "66.5789%",

                  top: 507,
                }}
              >
                <div className="single-work">
                  <div className="relative">
                    <div className="thumb">
                      <img className="image img-fluid" src={W4} alt="" />
                    </div>

                    <div className="middle">
                      <h4>2D Vinyl Design</h4>

                      <div className="cat">Client Project</div>
                    </div>

                    <a className="overlay" href="project-details.html" />
                  </div>
                </div>
              </div>

              <div
                className="col-lg-8 grid-item col-md-12 all wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",

                  animationDuration: "2s",

                  animationDelay: "0.4s",

                  animationName: "fadeIn",

                  position: "absolute",

                  left: "0%",

                  top: 580,
                }}
              >
                <div className="single-work">
                  <div className="relative">
                    <div className="thumb">
                      <img className="image img-fluid" src={W3} alt="" />
                    </div>

                    <div className="middle">
                      <h4>2D Vinyl Design</h4>

                      <div className="cat">Client Project</div>
                    </div>

                    <a className="overlay" href="project-details.html" />
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 text-center grid-item col-md-12 all creative wow fadeIn"
                data-wow-duration="2s"
                style={{
                  visibility: "visible",

                  animationDuration: "2s",

                  animationName: "fadeIn",

                  position: "absolute",

                  left: "66.5789%",

                  top: 939,
                }}
              >
                <a href="#" className="primary-btn" data-text="View More">
                  <span>V</span>

                  <span>i</span>

                  <span>e</span>

                  <span>w</span>

                  <span> </span>

                  <span>M</span>

                  <span>o</span>

                  <span>r</span>

                  <span>e</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurPortfolio