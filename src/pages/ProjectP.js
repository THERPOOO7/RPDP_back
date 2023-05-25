import React from 'react'
import pd from '../components/Images/project-details-1.jpg.webp'
import {FaRegStar} from 'react-icons/fa';


const ProjectP = () => {
  return (
    <div>
      <section className="banner-area relative">
        <div className="container ">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content col-lg-12">
              <h1 className="text-white">Project Details</h1>
              <p>Fowl living for lights our ears bearing to heaven signs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio_details_area section-gap">
        <div className="container block_section">
          <div className="portfolio_details_inner">
            <div className="row">
              <div className="col-md-6">
                <div className="left_img">
                  <img className="img-fluid" src={pd} alt="" />
                </div>
              </div>
              <div className="offset-md-1 col-md-5">
                <div className="portfolio_right_text mt-30">
                  <h4>Lavendar ambient colorlib</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                  <ul className="list">
                    <li>
                      <span>Rating</span>: <i className="ti-star" />
                      <i className="ti-star"><FaRegStar/></i>
                      <i className="ti-star"><FaRegStar/></i>
                      <i className="ti-star"><FaRegStar/></i>
                      <i className="ti-star"><FaRegStar/></i>
                      <i className="ti-star"><FaRegStar/></i>

                    </li>
                    <li>
                      <span>Client</span>: colorlib
                    </li>
                    <li>
                      <span>Website</span>: colorlib.com
                    </li>
                    <li>
                      <span>Completed</span>: 17 Aug 2018
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </p>
            <p>
              Voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectP