import React from 'react'

import future from '../components/Images/tea.jpg'

import pp1 from '../components/Images/pp1.jpg.webp'
import pp2 from '../components/Images/pp2.jpg.webp'
import pp3 from '../components/Images/pp3.jpg.webp'
import pp4 from '../components/Images/pp4.jpg.webp'

import post1 from '../components/Images/post-img1.jpg.webp'
import post2 from '../components/Images/post-img2.jpg.webp'

import ui1 from '../components/Images/user-info.png.webp'

import pre from '../components/Images/prev.jpg.webp'
import next from '../components/Images/next.jpg.webp'

import c1 from '../components/Images/c1.jpg.webp'
import c2 from '../components/Images/c2.jpg.webp'
import c3 from '../components/Images/c3.jpg.webp'
import c4 from '../components/Images/c4.jpg.webp'
import c5 from '../components/Images/c5.jpg.webp'

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



const BlogSingleP = () => {
  return (
    <div>

<section className="banner-area relative">
  <div className="container">
    <div className="row d-flex align-items-center justify-content-center">
      <div className="about-content col-lg-12">
        <h1 className="text-white">Blog Single</h1>
        <p>Fowl living for lights our ears bearing to heaven signs</p>
      </div>
    </div>
  </div>
</section>


<section className="post-content-area single-post-area section-gap">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 posts-list">
        <div className="single-post row">
          <div className="col-lg-12">
            <div className="feature-img">
              <img
                className="img-fluid"
                src={future}
                alt=""
              />
            </div>
          </div>
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
              <ul className="social-links col-lg-12 col-md-12 col-6">
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
            </div>
          </div>
          <div className="col-lg-9 col-md-9">
            <a className="posts-title" href="#">
              <h3>Astronomy Binoculars A Great Alternative</h3>
            </a>
            <p className="excert">
              MCSE boot camps have its supporters and its detractors. Some
              people do not understand why you should have to spend money on
              boot camp when you can get the MCSE study materials yourself at a
              fraction.
            </p>
            <p>
              Boot camps have its supporters and its detractors. Some people do
              not understand why you should have to spend money on boot camp
              when you can get the MCSE study materials yourself at a fraction
              of the camp price. However, who has the willpower to actually sit
              through a self-imposed MCSE training. who has the willpower to
              actually sit through a self-imposed
            </p>
            <p>
              Boot camps have its supporters and its detractors. Some people do
              not understand why you should have to spend money on boot camp
              when you can get the MCSE study materials yourself at a fraction
              of the camp price. However, who has the willpower to actually sit
              through a self-imposed MCSE training. who has the willpower to
              actually sit through a self-imposed
            </p>
          </div>
          <div className="col-lg-12">
            <div className="quotes">
              MCSE boot camps have its supporters and its detractors. Some
              people do not understand why you should have to spend money on
              boot camp when you can get the MCSE study materials yourself at a
              fraction of the camp price. However, who has the willpower to
              actually sit through a self-imposed MCSE training.
            </div>
            <div className="row mt-30 mb-30">
              <div className="col-6">
                <img
                  className="img-fluid"
                  src={post1}
                  alt=""
                />
              </div>
              <div className="col-6">
                <img
                  className="img-fluid"
                  src={post2}
                  alt=""
                />
              </div>
              <div className="col-lg-12 mt-30">
                <p>
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should have to spend money on
                  boot camp when you can get the MCSE study materials yourself
                  at a fraction of the camp price. However, who has the
                  willpower.
                </p>
                <p>
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should have to spend money on
                  boot camp when you can get the MCSE study materials yourself
                  at a fraction of the camp price. However, who has the
                  willpower.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="navigation-area">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
              <div className="thumb">
                <a href="#">
                  <img className="img-fluid" src={pre} alt="" />
                </a>
              </div>
              <div className="arrow">
                <a href="#">
                  <i className="text-white ti-arrow-left" />
                </a>
              </div>
              <div className="detials">
                <p className="mb-1">Prev Post</p>
                <a href="#">
                  <h4>Space The Final Frontier</h4>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
              <div className="detials">
                <p className="mb-1">Next Post</p>
                <a href="#">
                  <h4>Telescopes 101</h4>
                </a>
              </div>
              <div className="arrow">
                <a href="#">
                  <i className="text-white ti-arrow-right" />
                </a>
              </div>
              <div className="thumb">
                <a href="#">
                  <img className="img-fluid" src={next} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="comments-area">
          <h4>05 Comments</h4>
          <div className="comment-list">
            <div className="single-comment justify-content-between d-flex">
              <div className="user justify-content-between d-flex">
                <div className="thumb">
                  <img src={c1} alt="" />
                </div>
                <div className="desc">
                  <h5>
                    <a href="#">Emilly Blunt</a>
                  </h5>
                  <p className="date">December 4, 2017 at 3:12 pm </p>
                  <p className="comment">
                    Never say goodbye till the end comes!
                  </p>
                </div>
              </div>
              <div className="reply-btn">
                <a href="" className="btn-reply text-uppercase">
                  reply
                </a>
              </div>
            </div>
          </div>
          <div className="comment-list left-padding">
            <div className="single-comment justify-content-between d-flex">
              <div className="user justify-content-between d-flex">
                <div className="thumb">
                  <img src={c2} alt="" />
                </div>
                <div className="desc">
                  <h5>
                    <a href="#">Elsie Cunningham</a>
                  </h5>
                  <p className="date">December 4, 2017 at 3:12 pm </p>
                  <p className="comment">
                    Never say goodbye till the end comes!
                  </p>
                </div>
              </div>
              <div className="reply-btn">
                <a href="" className="btn-reply text-uppercase">
                  reply
                </a>
              </div>
            </div>
          </div>
          <div className="comment-list left-padding">
            <div className="single-comment justify-content-between d-flex">
              <div className="user justify-content-between d-flex">
                <div className="thumb">
                  <img src={c3}alt="" />
                </div>
                <div className="desc">
                  <h5>
                    <a href="#">Annie Stephens</a>
                  </h5>
                  <p className="date">December 4, 2017 at 3:12 pm </p>
                  <p className="comment">
                    Never say goodbye till the end comes!
                  </p>
                </div>
              </div>
              <div className="reply-btn">
                <a href="" className="btn-reply text-uppercase">
                  reply
                </a>
              </div>
            </div>
          </div>
          <div className="comment-list">
            <div className="single-comment justify-content-between d-flex">
              <div className="user justify-content-between d-flex">
                <div className="thumb">
                  <img src={c4} alt="" />
                </div>
                <div className="desc">
                  <h5>
                    <a href="#">Maria Luna</a>
                  </h5>
                  <p className="date">December 4, 2017 at 3:12 pm </p>
                  <p className="comment">
                    Never say goodbye till the end comes!
                  </p>
                </div>
              </div>
              <div className="reply-btn">
                <a href="" className="btn-reply text-uppercase">
                  reply
                </a>
              </div>
            </div>
          </div>
          <div className="comment-list">
            <div className="single-comment justify-content-between d-flex">
              <div className="user justify-content-between d-flex">
                <div className="thumb">
                  <img src={c5} alt="" />
                </div>
                <div className="desc">
                  <h5>
                    <a href="#">Ina Hayes</a>
                  </h5>
                  <p className="date">December 4, 2017 at 3:12 pm </p>
                  <p className="comment">
                    Never say goodbye till the end comes!
                  </p>
                </div>
              </div>
              <div className="reply-btn">
                <a href="" className="btn-reply text-uppercase">
                  reply
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="comment-form">
          <h4>Leave a Comment</h4>
          <form>
            <div className="form-group form-inline">
              <div className="form-group col-lg-6 col-md-12 name">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Name"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter Name'"
                />
              </div>
              <div className="form-group col-lg-6 col-md-12 email">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email address"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter email address'"
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Subject"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Subject'"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control mb-10"
                rows={5}
                name="message"
                placeholder="Messege"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Messege'"
                required=""
                defaultValue={""}
              />
            </div>
            <a href="#" className="primary-btn" data-text="Post Comment">
              <span>P</span>
              <span>o</span>
              <span>s</span>
              <span>t</span>
              <span> </span>
              <span>C</span>
              <span>o</span>
              <span>m</span>
              <span>m</span>
              <span>e</span>
              <span>n</span>
              <span>t</span>
            </a>
          </form>
        </div>
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
                <i className="ti-search" ><HiOutlineSearch/></i>
              </button>
            </form>
          </div>
          <div className="single-sidebar-widget user-info-widget">
            <img src={ui1} alt="" />
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
              Boot camps have its supporters andit sdetractors. Some people do
              not understand why you should have to spend money on boot camp
              when you can get. Boot camps have itssuppor ters andits
              detractors.
            </p>
          </div>
          <div className="single-sidebar-widget popular-post-widget">
            <h4 className="popular-title">Popular Posts</h4>
            <div className="popular-post-list">
              <div className="single-post-list d-flex flex-row align-items-center">
                <div className="thumb">
                  <img className="img-fluid" src={pp1} alt="" />
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
                  <img className="img-fluid" src={pp2} alt="" />
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
                  <img className="img-fluid" src="img/blog/pp3.jpg" alt="" />
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
                  <img className="img-fluid" src={pp3} alt="" />
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
              <img className="img-fluid" src="img/blog/ads-banner.jpg" alt="" />
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
              Here, I focus on a range of items and features that we use in life
              without giving them a second thought.
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
  )
}

export default BlogSingleP