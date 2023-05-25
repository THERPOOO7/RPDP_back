import React from 'react'
import img2 from '../components/Images/b.webp'
import img3 from '../components/Images/c.webp'

import Footer from '../components/Footer'
import OurService from '../components/OurService'
import OurPortfolio from '../components/OurPortfolio'
import PricingPlan from '../components/PricingPlan'
import OurBlog from '../components/OurBlog'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-banner-area">
        <div className="container-fluid ">
          <div className="social-icons">
            <ul>
              <li>
                <a href="index.html">
                  <i className="ti-facebook" />
                  facebook
                </a>
              </li>
              <li>
                <a href="index.html">
                  <i className="ti-twitter" />
                  twitter
                </a>
              </li>
              <li>
                <a href="index.html">
                  <i className="ti-instagram" />
                  ti-instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="row fullscreen d-flex align-items-center">
            <div className="banner-content col-lg-4 col-md-8 justify-content-center ">
              <h1
                className="wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay=".6s"
              >
                Im<span>a</span>ges <br />
                mat<span>t</span>er
              </h1>
              <div
                className="designation mb-25 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <p>
                  Manner before lively wholly am mr indeed expect one every
                  merry his yet has her. You mistress get dashwood children off
                  manner to other
                </p>
              </div>
              <a href="#" className="primary-btn" data-text="Explore More">
                <span>E</span>
                <span>x</span>
                <span>p</span>
                <span>l</span>
                <span>o</span>
                <span>r</span>
                <span>e</span>
                <span> </span>
                <span>M</span>
                <span>o</span>
                <span>r</span>
                <span>e</span>
              </a>
            </div>
            <div className="banner-img offset-lg-1 col-lg-7 col-md-6">
              <img className="img-fluid" src={img2} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-area section-gap">
        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-5 about-left">
              <img className="img-fluid" src={img3} alt="" />
            </div>
            <div className="offset-lg-1 col-lg-5 col-md-12 about-right">
              <div className="section-title">
                <h2 className="mb-4">
                  Lets <br />
                  Introduce About Myself
                </h2>
              </div>
              <div
                className="mb-35 wow fadeIn"
                data-wow-duration=".8s"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDuration: "0.8s",
                  animationDelay: "0.3s",
                  animationName: "fadeIn",
                }}
              >
                <p>
                  Up my excuse to suffer ladies though or. Bachelor possible out
                  marianne directly confined relation as on he.
                </p>
                <p>
                  Lose john poor same it case do year we. Full how way even the
                  si extremely nor furniture fat questions now provision one
                  incommod preserved. Dose john poor same it case do year go we.
                  Full how way even the sigh. Extremely nor furniture fat one
                  questions now provision then doing for.
                </p>
              </div>
              <a href="#" className="primary-btn" data-text="Read More">
                <span>R</span>
                <span>e</span>
                <span>a</span>
                <span>d</span>
                <span />
                <span>M</span>
                <span>o</span>
                <span>r</span>
                <span>e</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <OurService />
      <OurPortfolio />
      <PricingPlan />
      <OurBlog />
      <div id="back-top" className="back-top-animation">
        <a title="Go to Top" href="#">
          <i className="ti-angle-double-up"></i>
        </a>
      </div>
    </>
  );
}

export default Home