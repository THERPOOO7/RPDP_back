import React from 'react'

import {TfiFacebook, TfiTwitter, TfiDribbble, TfiLinkedin, TfiHeart, TfiArrowRight, TfiAngleDoubleUp} from 'react-icons/tfi'

const Footer = () => {
  return (
    <div>
      <footer className="footer-area section-gap">
        <div className="container ">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>About Us</h6>
                <p>
                  If you own an Iphone, you’ve probably already worked out how
                  much fun it is to use it to watch movies-it has that.
                </p>
              </div>
            </div>
            <div className="col-lg-5  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>Newsletter</h6>
                <p>Stay update with our latest</p>
                <div className="" id="mc_embed_signup">
                  <form
                    target="_blank"
                    noValidate="true"
                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
                    method="get"
                    className="form-inline" style={{display: 'flex'}}
                  >
                    <input
                      className="form-control"
                      name="EMAIL"
                      placeholder="Email Address"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Email Address'"
                      required=""
                      type="email"
                    />
                    <button className="click-btn btn btn-default">
                      <i className="ti-arrow-right" aria-hidden="true"> <TfiArrowRight/> </i> 
                    </button>
                    <div style={{ position: "absolute", left: "-5000px" }}>
                      <input
                        name="b_36c4fd991d266f23781ded980_aefe40901a"
                        tabIndex={-1}
                        defaultValue=""
                        type="text"
                      />
                    </div>
                    <div className="info" />
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
              <div className="single-footer-widget">
                <h6>Follow Us</h6>
                <p>Let us be social</p>
                <div className="footer-social d-flex align-items-center">
                  <a className='iconstyle' href="#">
                    <i className="ti-facebook">   <TfiFacebook/> </i>
                  
  
                  </a>
                  <a href="#">
                    <i className="ti-twitter">   <TfiTwitter/> </i>
                  </a>
                  <a href="#">
                    <i className="ti-dribbble"> <TfiDribbble/> </i>
                  </a>
                  <a href="#">
                    <i className="ti-linkedin"> <TfiLinkedin/> </i>
                    
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p className="footer-text">
                Copyright ©2023 All rights reserved | This template is made with{" "}
                <i className="ti-heart"aria-hidden="true">  <TfiHeart/> </i> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div id="back-top" className="back-top-animation">
        <a title="Go to Top" href="#">
          <i className="ti-angle-double-up">  <TfiAngleDoubleUp/></i>
        </a>
      </div>
    </div>
  );
}

export default Footer