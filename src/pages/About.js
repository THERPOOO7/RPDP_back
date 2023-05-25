import React from 'react'
import OurService from '../components/OurService'

const About = () => {
  return (
    <>
      <section className="banner-area relative">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content col-lg-12">
              <h1 className="text-white">About Us</h1>
              <p>Fowl living for lights our ears bearing to heaven signs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area section-gap">
        <div className="container ">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-5 about-left">
              <img
                className="img-fluid"
                data-cfsrc="img/about-img.jpg"
                alt=""
                src={"https://preview.colorlib.com/theme/proshoot/img/about-img.jpg"}
              />
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
    </>
  );
}

export default About