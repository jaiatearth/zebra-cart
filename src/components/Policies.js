import React from 'react';
import '../styles/Policies.scss';

const Policies = () => {
  return (
    <div className="policies">
      <h2>Policies and Disclosures</h2>
      <div className="policy">
        <h3>Terms and Conditions</h3>
        <p>By using this website, you agree to our terms and conditions...</p>
      </div>
      <div className="policy">
        <h3>Privacy Policy</h3>
        <p>We value your privacy. Data is retained for up to 12 months...</p>
      </div>
      <div className="policy">
        <h3>Shipping Policy</h3>
        <p>We offer worldwide shipping with delivery within 7-14 days...</p>
      </div>
      <div className="policy">
        <h3>Refund Policy</h3>
        <p>We offer a 30-day return policy for most products...</p>
      </div>
    </div>
  );
};

export default Policies;
