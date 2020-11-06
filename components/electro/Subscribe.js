import React from "react";
import { SubscribeStyles } from "./styles/SubscribeStyles";

const Subscribe = () => {
  return (
    <SubscribeStyles>
      <div className="container subscribe">
        <div className="subscribe-content">
          <div className="subscribe-info">
            <h2 className="text-heading">Want to get Started?</h2>
            <p className="text-desc">
              The free demo comes with no commitments and no credit card
              required.
            </p>
          </div>
          <form action="#" className="subscribe-form" autoComplete="off">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              className="subscribe-input"
            />
            <button type="submit" className="btn btn--white subscribe-submit">
              <span className="subscribe-submit-text">Get Started</span>
            </button>
          </form>
        </div>
      </div>
    </SubscribeStyles>
  );
};

export default Subscribe;
