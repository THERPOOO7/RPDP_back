import React from 'react'
import {BsCheck2} from 'react-icons/bs';
import {RxCross1} from 'react-icons/rx';

const PricingPlan = () => {
  return (
    <div className=''>
      <section className="pricing-area section-gap-top">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h3>Pricing Plan</h3>
                <h2>
                  <span>Choose</span> Your Package
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="pricing_item">
                <h3 className="p_title">Weeding</h3>
                <p className="p_criteria">Attend only first day</p>
                <h1 className="p_price">$46.00</h1>
                <div className="p_list">
                  <ul>
                    <li>
                      <span className="ti-check"><BsCheck2/></span> Unlimited Entrance
                    </li>
                    <li>
                      <span className="ti-check"><BsCheck2/></span> Unlimited Entrance
                    </li>
                    <li>
                      <span className="ti-check"><BsCheck2/></span> Unlimited Entrance
                    </li>
                    <li>
                      <span className="ti-close cross"><RxCross1/></span> Unlimited Entrance
                    </li>
                    <li>
                      <span className="ti-close cross"><RxCross1/></span> Unlimited Entrance
                    </li>
                      
                    
                  </ul>
                  <a className="primary-btn mt-4" href="#" data-text="Book Now">
                    <span>B</span>
                    <span>o</span>
                    <span>o</span>
                    <span>k</span>
                    <span> </span>
                    <span>N</span>
                    <span>o</span>
                    <span>w</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pricing_item">
                <h3 className="p_title">Studio</h3>
                <p className="p_criteria">Attend only first day</p>
                <h1 className="p_price">$76.00</h1>
                <div className="p_list">
                  <ul>
                    
                    <li>
                      <span className="ti-check"><BsCheck2/></span> Unlimited Entrance
                    </li>
                    <li>
                      <span className="ti-check"><BsCheck2/></span> Unlimited Entrance
                    </li>
                    <li>
                      <span className="ti-check"><BsCheck2/></span> Unlimited Entrance
                    </li>
                   
                    
                    <li>
                      <span className="ti-close cross"><RxCross1/></span> Unlimited Entrance
                    </li>
                    <li>
                      <span className="ti-close cross"><RxCross1/></span> Unlimited Entrance
                    </li>
                  </ul>
                  <a className="primary-btn mt-4" href="#" data-text="Book Now">
                    <span>B</span>
                    <span>o</span>
                    <span>o</span>
                    <span>k</span>
                    <span> </span>
                    <span>N</span>
                    <span>o</span>
                    <span>w</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pricing_item">
                <h3 className="p_title">Fashion</h3>
                <p className="p_criteria">Attend only first day</p>
                <h1 className="p_price">$96.00</h1>
                <div className="p_list">
                  <ul>
                  <li>
                      <span className="ti-check"><BsCheck2/></span> Unlimited Entrance
                    </li>
                    <li>
                      <span className="ti-check"><BsCheck2/></span> Unlimited Entrance
                    </li>
                    <li>
                      <span className="ti-check"><BsCheck2/></span> Unlimited Entrance
                    </li>
                   
                    
                    <li>
                      <span className="ti-close cross"><RxCross1/></span> Unlimited Entrance
                    </li>
                    <li>
                      <span className="ti-close cross"><RxCross1/></span> Unlimited Entrance
                    </li>
                  </ul>
                  <a className="primary-btn mt-4" href="#" data-text="Book Now">
                    <span>B</span>
                    <span>o</span>
                    <span>o</span>
                    <span>k</span>
                    <span> </span>
                    <span>N</span>
                    <span>o</span>
                    <span>w</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricingPlan