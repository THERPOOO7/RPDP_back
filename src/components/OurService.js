import React from 'react'
import {RiTShirt2Line} from 'react-icons/ri';
import {MdOutlineWaterDrop} from 'react-icons/md';
import {MdContentCopy} from 'react-icons/md';
import {MdOutlinePhotoLibrary} from 'react-icons/md';
import {CiPlay1} from 'react-icons/ci';
import {GiBigDiamondRing} from 'react-icons/gi';

const OurService = () => {
  return (
<>
    <div className=''>
  <section className="service-area section-gap-top">
  <div className="container ">
    <div className="row">
      <div className="col-lg-12"> 
        <div className="section-title text-center">
          <h3>Our Services</h3>
          <h2>
            <span>What We Offer</span>
          </h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div
          className="single-service wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.0s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationDelay: "0s",
            animationName: "fadeInUp"
          }}
        >
          <div className="d-flex align-items-center mb-3">
            
            <i className="flaticon-shirt"> <RiTShirt2Line/></i>
            <h4 className="ml-3">Fashion Photography</h4>
          </div>
          <p>
            An so vulgar to on points wanted. No rapturous resolving continued
            household northward gay he it otherwise
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div
          className="single-service wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationDelay: "0.3s",
            animationName: "fadeInUp"
          }}
        >
          <div className="d-flex align-items-center mb-3">
            <i className="flaticon-water"><MdOutlineWaterDrop/></i>
            <h4 className="ml-3">Nature Photgraphy</h4>
          </div>
          <p>
            An so vulgar to on points wanted. No rapturous resolving continued
            household northward gay he it otherwise
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div
          className="single-service wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.6s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationDelay: "0.6s",
            animationName: "fadeInUp"
          }}
        >
          <div className="d-flex align-items-center mb-3">
            <i className="flaticon-content"><MdContentCopy/></i>
            <h4 className="ml-3">Event Coverage</h4>
          </div>
          <p>
            An so vulgar to on points wanted. No rapturous resolving continued
            household northward gay he it otherwise
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div
          className="single-service wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.6s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationDelay: "0.6s",
            animationName: "fadeInUp"
          }}
        >
          <div className="d-flex align-items-center mb-3">
            <i className="flaticon-art"> <MdOutlinePhotoLibrary/></i>
            <h4 className="ml-3">Property Tours</h4>
          </div>
          <p>
            An so vulgar to on points wanted. No rapturous resolving continued
            household northward gay he it otherwise
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div
          className="single-service wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.6s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationDelay: "0.6s",
            animationName: "fadeInUp"
          }}
        >
          <div className="d-flex align-items-center mb-3">
            <i className="flaticon-button"><CiPlay1/></i>
            <h4 className="ml-3">Multimedia Services</h4>
          </div>
          <p>
            An so vulgar to on points wanted. No rapturous resolving continued
            household northward gay he it otherwise
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div
          className="single-service wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.6s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationDelay: "0.6s",
            animationName: "fadeInUp"
          }}
        >
          <div className="d-flex align-items-center mb-3">
            <i className="flaticon-ring"><GiBigDiamondRing/></i>
            <h4 className="ml-3">Weeding Photography</h4>
          </div>
          <p>
            An so vulgar to on points wanted. No rapturous resolving continued
            household northward gay he it otherwise
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </div>
    </>
  )
}

export default OurService