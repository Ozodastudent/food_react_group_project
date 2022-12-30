import React from "react";
import "./OrderHead.scss";

export const OrdersHead = () => {
  return (
    <div className="order_top">
      <h3 className="order_top_title">Orders #34562</h3>
      <div className="order_top_options">
        <label name="order-radio">
          <input
            className="order_top_option_input"
            name="order-radio-input"
            type="radio"
          />
          <span className="order_top_option_text">Dine In</span>
        </label>
        <label name="order-radio">
          <input
            className="order_top_option_input"
            name="order-radio-input"
            type="radio"
          />
          <span className="order_top_option_text">To Go</span>
        </label>
        <label name="order-radio">
          <input
            className="order_top_option_input"
            name="order-radio-input"
            type="radio"
          />
          <span className="order_top_option_text">Delivery</span>
        </label>
      </div>
      <div className="order_top_texts">
        <p className="order_text">Item</p>
        <div className="order_text_middle">
          <p className="order_text me-4">Qty</p>
          <p className="order_text">Price</p>
        </div>
      </div>
    </div>
  );
};
