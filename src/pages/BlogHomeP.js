import React from 'react'
import cat1 from '../components/Images/cat-widget1.jpg.webp'
import cat2 from '../components/Images/cat-widget2.jpg.webp'
import cat3 from '../components/Images/cat-widget3.jpg.webp'

import tea from '../components/Images/tea.jpg'
import i2 from '../components/Images/feature-img2.jpg.webp'
import i3 from '../components/Images/feature-img3.jpg.webp'
import i4 from '../components/Images/feature-img4.jpg.webp'
import i5 from '../components/Images/feature-img5.jpg.webp'
 import pp1 from '../components/Images/pp1.jpg.webp'
 import pp2 from '../components/Images/pp2.jpg.webp'
 import pp3 from '../components/Images/pp3.jpg.webp'
 import pp4 from '../components/Images/pp4.jpg.webp'
 import ui1 from '../components/Images/user-info.png.webp'
 import ads1 from '../components/Images/ads-banner.jpg.webp'

 import {HiOutlineSearch} from 'react-icons/hi'; 
 
 import {TiSocialFacebook} from 'react-icons/ti'; 
 import {TiSocialTwitter} from 'react-icons/ti'; 
 import {TiSocialGithub} from 'react-icons/ti'; 
 import {TiSocialDribbble} from 'react-icons/ti'; 

import {TfiUser} from 'react-icons/tfi';
import {SlCalender} from 'react-icons/sl';
import {TfiEye} from 'react-icons/tfi';
import {TfiComment} from 'react-icons/tfi';
import {TfiEmail} from 'react-icons/tfi';


const BlogHomeP = () => {
  return (
    <div> 
      <section className="banner-area relative">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content col-lg-12">
              <h1 className="text-white">Blog</h1>
              <p>Fowl living for lights our ears bearing to heaven signs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="top-category-widget-area pt-90 pb-90 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="single-cat-widget">
                <div className="content relative">
                  <div className="overlay overlay-bg" />
                  <a href="#" target="_blank">
                    <div className="thumb">
                      <img
                        className="content-image img-fluid d-block mx-auto"
                        src={cat1}
                        alt=""
                      />
                    </div>
                    <div className="content-details">
                      <h4 className="content-title mx-auto text-uppercase">
                        Social life
                      </h4>
                      <span />
                      <p>Enjoy your social life together</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-cat-widget">
                <div className="content relative">
                  <div className="overlay overlay-bg" />
                  <a href="#" target="_blank">
                    <div className="thumb">
                      <img
                        className="content-image img-fluid d-block mx-auto"
                        src={cat2}
                        alt=""
                      />
                    </div>
                    <div className="content-details">
                      <h4 className="content-title mx-auto text-uppercase">
                        Politics
                      </h4>
                      <span />
                      <p>Be a part of politics</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-cat-widget">
                <div className="content relative">
                  <div className="overlay overlay-bg" />
                  <a href="#" target="_blank">
                    <div className="thumb">
                      <img
                        className="content-image img-fluid d-block mx-auto"
                        src={cat3}
                        alt=""
                      />
                    </div>
                    <div className="content-details">
                      <h4 className="content-title mx-auto text-uppercase">
                        Food
                      </h4>
                      <span />
                      <p>Let the food be finished</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="post-content-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 posts-list">
              <div className="single-post row">
                <div className="col-lg-3  col-md-3 meta-details">
                  <ul className="tags">
                    <li>
                      <a href="#">Food,</a>
                    </li>
                    <li>
                      <a href="#">Technology,</a>
                    </li>
                    <li>
                      <a href="#">Politics,</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                  </ul>
                  <div className="user-details row">
                    <p className="user-name col-lg-12 col-md-12 col-6">
                      <a href="#">Mark wiens</a> <i className="ti-user"><TfiUser/></i>
                    </p>
                    <p className="date col-lg-12 col-md-12 col-6">
                      <a href="#">12 Dec, 2017</a> <i className="ti-calendar"><SlCalender/></i>
                    </p>
                    <p className="view col-lg-12 col-md-12 col-6">
                      <a href="#">1.2M Views</a> <i className="ti-eye"><TfiEye/></i>
                    </p>
                    <p className="comments col-lg-12 col-md-12 col-6">
                      <a href="#">06 Comments</a> <i className="ti-comment" ><TfiComment/></i>
                    </p>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 ">
                  <div className="feature-img">
                    <img
                      className="img-fluid"
                      src={tea}
                      alt=""
                    />
                  </div>
                  <a className="posts-title" href="blog-single.html">
                    <h3>Astronomy Binoculars A Great Alternative</h3>
                  </a>
                  <p className="excert">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction.
                  </p>
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
              <div className="single-post row">
                <div className="col-lg-3  col-md-3 meta-details">
                  <ul className="tags">
                    <li>
                      <a href="#">Food,</a>
                    </li>
                    <li>
                      <a href="#">Technology,</a>
                    </li>
                    <li>
                      <a href="#">Politics,</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                  </ul>
                  <div className="user-details row">
                  <p className="user-name col-lg-12 col-md-12 col-6">
                      <a href="#">Mark wiens</a> <i className="ti-user"><TfiUser/></i>
                    </p>
                    <p className="date col-lg-12 col-md-12 col-6">
                      <a href="#">12 Dec, 2017</a> <i className="ti-calendar"><SlCalender/></i>
                    </p>
                    <p className="view col-lg-12 col-md-12 col-6">
                      <a href="#">1.2M Views</a> <i className="ti-eye"><TfiEye/></i>
                    </p>
                    <p className="comments col-lg-12 col-md-12 col-6">
                      <a href="#">06 Comments</a> <i className="ti-comment" ><TfiComment/></i>
                    </p>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 ">
                  <div className="feature-img">
                    <img
                      className="img-fluid"
                      src={i2}
                      alt=""
                    />
                  </div>
                  <a className="posts-title" href="blog-single.html">
                    <h3>The Basics Of Buying A Telescope</h3>
                  </a>
                  <p className="excert">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction.
                  </p>
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
              <div className="single-post row">
                <div className="col-lg-3  col-md-3 meta-details">
                  <ul className="tags">
                    <li>
                      <a href="#">Food,</a>
                    </li>
                    <li>
                      <a href="#">Technology,</a>
                    </li>
                    <li>
                      <a href="#">Politics,</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                  </ul>
                  <div className="user-details row">
                  <p className="user-name col-lg-12 col-md-12 col-6">
                      <a href="#">Mark wiens</a> <i className="ti-user"><TfiUser/></i>
                    </p>
                    <p className="date col-lg-12 col-md-12 col-6">
                      <a href="#">12 Dec, 2017</a> <i className="ti-calendar"><SlCalender/></i>
                    </p>
                    <p className="view col-lg-12 col-md-12 col-6">
                      <a href="#">1.2M Views</a> <i className="ti-eye"><TfiEye/></i>
                    </p>
                    <p className="comments col-lg-12 col-md-12 col-6">
                      <a href="#">06 Comments</a> <i className="ti-comment" ><TfiComment/></i>
                    </p>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9">
                  <div className="feature-img">
                    <img
                      className="img-fluid"
                      src={i3}
                      alt=""
                    />
                  </div>
                  <a className="posts-title" href="blog-single.html">
                    <h3>The Glossary Of Telescopes</h3>
                  </a>
                  <p className="excert">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction.
                  </p>
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
              <div className="single-post row">
                <div className="col-lg-3  col-md-3 meta-details">
                  <ul className="tags">
                    <li>
                      <a href="#">Food,</a>
                    </li>
                    <li>
                      <a href="#">Technology,</a>
                    </li>
                    <li>
                      <a href="#">Politics,</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                  </ul>
                  <div className="user-details row">
                  <p className="user-name col-lg-12 col-md-12 col-6">
                      <a href="#">Mark wiens</a> <i className="ti-user"><TfiUser/></i>
                    </p>
                    <p className="date col-lg-12 col-md-12 col-6">
                      <a href="#">12 Dec, 2017</a> <i className="ti-calendar"><SlCalender/></i>
                    </p>
                    <p className="view col-lg-12 col-md-12 col-6">
                      <a href="#">1.2M Views</a> <i className="ti-eye"><TfiEye/></i>
                    </p>
                    <p className="comments col-lg-12 col-md-12 col-6">
                      <a href="#">06 Comments</a> <i className="ti-comment" ><TfiComment/></i>
                    </p>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9">
                  <div className="feature-img">
                    <img
                      className="img-fluid"
                      src={i4}
                      alt=""
                    />
                  </div>
                  <a className="posts-title" href="blog-single.html">
                    <h3>The Night Sky</h3>
                  </a>
                  <p className="excert">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction.
                  </p>
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
              <div className="single-post row">
                <div className="col-lg-3 col-md-3 meta-details">
                  <ul className="tags">
                    <li>
                      <a href="#">Food,</a>
                    </li>
                    <li>
                      <a href="#">Technology,</a>
                    </li>
                    <li>
                      <a href="#">Politics,</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                  </ul>
                  <div className="user-details row">
                  <p className="user-name col-lg-12 col-md-12 col-6">
                      <a href="#">Mark wiens</a> <i className="ti-user"><TfiUser/></i>
                    </p>
                    <p className="date col-lg-12 col-md-12 col-6">
                      <a href="#">12 Dec, 2017</a> <i className="ti-calendar"><SlCalender/></i>
                    </p>
                    <p className="view col-lg-12 col-md-12 col-6">
                      <a href="#">1.2M Views</a> <i className="ti-eye"><TfiEye/></i>
                    </p>
                    <p className="comments col-lg-12 col-md-12 col-6">
                      <a href="#">06 Comments</a> <i className="ti-comment" ><TfiComment/></i>
                    </p>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9">
                  <div className="feature-img">
                    <img
                      className="img-fluid"
                      src={i5}
                      alt=""
                    />
                  </div>
                  <a className="posts-title" href="blog-single.html">
                    <h3>Telescopes 101</h3>
                  </a>
                  <p className="excert">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction.
                  </p>
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
              <nav className="blog-pagination justify-content-center d-flex">
                <ul className="pagination">
                  <li className="page-item">
                    <a href="#" className="page-link" aria-label="Previous">
                      <span aria-hidden="true">
                        <i className="ti-angle-left" />
                      </span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      01
                    </a>
                  </li>
                  <li className="page-item active">
                    <a href="#" className="page-link">
                      02
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      03
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      04
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      09
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link" aria-label="Next">
                      <span aria-hidden="true">
                        <span className="ti-angle-right" />
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-4 sidebar-widgets">
              <div className="widget-wrap">
                <div className="single-sidebar-widget search-widget">
                  <form className="search-form" action="#">
                    <input
                      placeholder="Search Posts"
                      name="search"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Search Posts'"
                    />
                    <button type="submit">
                      <i className="ti-search"><HiOutlineSearch/></i>
                    </button>
                  </form>
                </div>
                <div className="single-sidebar-widget user-info-widget">
                  <img src={ui1}alt="" />
                  <a href="#">
                    <h4>Charlie Barber</h4>
                  </a>
                  <p>Senior blog writer</p>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="ti-facebook"><TiSocialFacebook/></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-twitter" ><TiSocialTwitter/></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-github" ><TiSocialGithub/></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-dribbble" ><TiSocialDribbble/></i>
                      </a>
                    </li>
                  </ul>
                  <p>
                    Boot camps have its supporters andit sdetractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get. Boot camps have itssuppor
                    ters andits detractors.
                  </p>
                </div>
                <div className="single-sidebar-widget popular-post-widget">
                  <h4 className="popular-title">Popular Posts</h4>
                  <div className="popular-post-list">
                    <div className="single-post-list d-flex flex-row align-items-center">
                      <div className="thumb">
                        <img
                          className="img-fluid"
                          src={pp1}
                          alt=""
                        />
                      </div>
                      <div className="details">
                        <a href="blog-single.html">
                          <h6>Space The Final Frontier</h6>
                        </a>
                        <p>02 Hours ago</p>
                      </div>
                    </div>
                    <div className="single-post-list d-flex flex-row align-items-center">
                      <div className="thumb">
                        <img
                          className="img-fluid"
                          src={pp2}
                          alt=""
                        />
                      </div>
                      <div className="details">
                        <a href="blog-single.html">
                          <h6>The Amazing Hubble</h6>
                        </a>
                        <p>02 Hours ago</p>
                      </div>
                    </div>
                    <div className="single-post-list d-flex flex-row align-items-center">
                      <div className="thumb">
                        <img
                          className="img-fluid"
                          src={pp3}
                          alt=""
                        />
                      </div>
                      <div className="details">
                        <a href="blog-single.html">
                          <h6>Astronomy Or Astrology</h6>
                        </a>
                        <p>02 Hours ago</p>
                      </div>
                    </div>
                    <div className="single-post-list d-flex flex-row align-items-center">
                      <div className="thumb">
                        <img
                          className="img-fluid"
                          src={pp4}
                          alt=""
                        />
                      </div>
                      <div className="details">
                        <a href="blog-single.html">
                          <h6>Asteroids telescope</h6>
                        </a>
                        <p>02 Hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-sidebar-widget ads-widget">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src={ads1}
                      alt=""
                    />
                  </a>
                </div>
                <div className="single-sidebar-widget post-category-widget">
                  <h4 className="category-title">Post Catgories</h4>
                  <ul className="cat-list">
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Technology</p>
                        <p>37</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Lifestyle</p>
                        <p>24</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Fashion</p>
                        <p>59</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Art</p>
                        <p>29</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Food</p>
                        <p>15</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Architecture</p>
                        <p>09</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Adventure</p>
                        <p>44</p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="single-sidebar-widget newsletter-widget">
                  <h4 className="newsletter-title">Newsletter</h4>
                  <p>
                    Here, I focus on a range of items and features that we use
                    in life without giving them a second thought.
                  </p>
                  <div className="form-group d-flex flex-row">
                    <div className="col-autos">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <i className="ti-email" aria-hidden="true" ><TfiEmail/></i>
                          </div>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="inlineFormInputGroup"
                          placeholder="Enter email"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter email'"
                        />
                      </div>
                    </div>
                    <a href="#" className="bbtns">
                      Subcribe
                    </a>
                  </div>
                  <p className="text-bottom">You can unsubscribe at any time</p>
                </div>
                <div className="single-sidebar-widget tag-cloud-widget">
                  <h4 className="tagcloud-title">Tag Clouds</h4>
                  <ul>
                    <li>
                      <a href="#">Technology</a>
                    </li>
                    <li>
                      <a href="#">Fashion</a>
                    </li>
                    <li>
                      <a href="#">Architecture</a>
                    </li>
                    <li>
                      <a href="#">Fashion</a>
                    </li>
                    <li>
                      <a href="#">Food</a>
                    </li>
                    <li>
                      <a href="#">Technology</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                    <li>
                      <a href="#">Art</a>
                    </li>
                    <li>
                      <a href="#">Adventure</a>
                    </li>
                    <li>
                      <a href="#">Food</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                    <li>
                      <a href="#">Adventure</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default BlogHomeP