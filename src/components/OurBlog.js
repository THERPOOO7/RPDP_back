import React from 'react'

import b1 from './Images/b1.jpg.webp'
import b2 from './Images/b2.jpg.webp'
import b3 from './Images/b3.jpg.webp'
import b4 from './Images/b4.jpg.webp'

const OurBlog = () => {
  return (
    <div className=''>
      <section className="blog-area section-gap-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h3>Our Blog</h3>
                <h2>
                  <span>Latest</span> Good Story
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="single-recent-blog mb-lg-3 mb-5">
                <div className="thumb">
                  <img
                    className="f-img img-fluid mx-auto"
                    src={b1}
                    alt=""
                  />
                </div>
                <a href="#">
                  <h4 className="mt-4 mb-3">
                    Pictures of the year 2018, from the migrant caravan to
                    Serena do Williams Harbor dangerous
                  </h4>
                </a>
                <div className="mb-3 bottom d-flex justify-content-between align-items-center flex-wrap">
                  <div className="meta">
                    <span className="ti-user mr-1" /> Admin
                    <span className="ti-calendar mr-1" /> 20/09/2018
                  </div>
                </div>
                <p>
                  Unfeeling agreeable suffering it on smallness newspaper be. So
                  come must time no as. Do on unpleasing possession as of
                  unreserved. Yet joy exquisite put sometimes enjoyment
                  perpetual now. Behind lovers eat having length horses vanity
                  say had its damn owes meter exquisite.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-recent-blog mb-lg-3 mb-5">
                <div className="row">
                  <div className="col-lg-6 col-md-5">
                    <div className="thumb">
                      <img
                        className="f-img img-fluid mx-auto"
                        src={b2}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mt-md-0 mt-3">
                    <a href="#">
                      <h4 className="mb-lg-3 mb-2">
                        Spirits in the sky over Northern Ireland lake
                      </h4>
                    </a>
                    <div className="bottom d-flex justify-content-between align-items-center flex-wrap mb-3">
                      <div className="meta">
                        <span className="ti-user mr-1" /> Admin
                        <span className="ti-calendar mr-1" /> 20/09/2018
                      </div>
                    </div>
                    <p>
                      Behind lovers eat having length horses vanity say had its
                      mega.
                    </p>
                  </div>
                </div>
              </div>
              <div className="single-recent-blog mb-lg-3 mb-5">
                <div className="row">
                  <div className="col-lg-6 col-md-5">
                    <div className="thumb">
                      <img
                        className="f-img img-fluid mx-auto"
                        src={b3}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mt-md-0 mt-3">
                    <a href="#">
                      <h4 className="mb-lg-3 mb-2">
                        Spirits in the sky over Northern Ireland lake
                      </h4>
                    </a>
                    <div className="bottom d-flex justify-content-between align-items-center flex-wrap mb-3">
                      <div className="meta">
                        <span className="ti-user mr-1" /> Admin
                        <span className="ti-calendar mr-1" /> 20/09/2018
                      </div>
                    </div>
                    <p>
                      Behind lovers eat having length horses vanity say had its
                      mega.
                    </p>
                  </div>
                </div>
              </div>
              <div className="single-recent-blog mb-lg-3 mb-5">
                <div className="row">
                  <div className="col-lg-6 col-md-5">
                    <div className="thumb">
                      <img
                        className="f-img img-fluid mx-auto"
                        src={b4}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mt-md-0 mt-3">
                    <a href="#">
                      <h4 className="mb-lg-3 mb-2">
                        Spirits in the sky over Northern Ireland lake
                      </h4>
                    </a>
                    <div className="bottom d-flex justify-content-between align-items-center flex-wrap mb-3">
                      <div className="meta">
                        <span className="ti-user mr-1" /> Admin
                        <span className="ti-calendar mr-1" /> 20/09/2018
                      </div>
                    </div>
                    <p>
                      Behind lovers eat having length horses vanity say had its
                      mega.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurBlog