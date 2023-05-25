import React from 'react'
import OurService from '../components/OurService'
import PricingPlan from '../components/PricingPlan';

const PricingP = () => {
  return (
    <div>
      <section className="banner-area relative">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content col-lg-12">
              <h1 className="text-white">Pricing Plan</h1>
              <p>Fowl living for lights our ears bearing to heaven signs</p>
            </div>
          </div>
        </div>
      </section>
      <OurService/>
<PricingPlan/>
    </div>
  );
}

export default PricingP