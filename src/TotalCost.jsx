import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./TotalCost.css";

const TotalCost = ({ totalCosts, ItemsDisplay }) => {
  const { venue, addOn, meals } = totalCosts;
  const total_amount = venue + addOn + meals;

  return (
    <div className="pricing-app">
      <div className="display_box">
        <div className="header">
          <p className="preheading">
            <h3>Total cost for the event</h3>
          </p>
        </div>
        <div>
          <h2 id="pre_fee_cost_display" className="price">
            ${total_amount}
          </h2>
          <div className="render_items">
            <ItemsDisplay />
          </div>
        </div>
      </div>
    </div>
  );
};

TotalCost.propTypes = {
  totalCosts: PropTypes.object,
  ItemsDisplay: PropTypes.elementType,
};

export default TotalCost;
