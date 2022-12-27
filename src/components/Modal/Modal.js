import React from "react";
import "./modal.scss";
import {
  PaymentIcon1,
  PaymentIcon3,
  PaymentIcon4,
} from "../../assets/images/icons/icons.js";
export const Modal = ({ modal, setModal }) => {
  return (
    <>
      <div className="overlay">
        <div className="payment_card">
          <div className="payment_card_text">
            <h3 className="payment_card_text_one">Payment</h3>
            <p className="payment_card_text_two">3 payment method available</p>
          </div>
          <div className="payment_card_method">
            <h3 className="payment_card_method_title">Payment Method</h3>
            <div className="payment_card_method_boxes">
              <div className="payment_card_box">
                <PaymentIcon1 />
                <p className="payment_card_box_text">Credit Card</p>
              </div>
              <div className="payment_card_box">
                <PaymentIcon3 />
                <p className="payment_card_box_text">Paypal</p>
              </div>
              <div className="payment_card_box">
                <PaymentIcon4 />
                <p className="payment_card_box_text">Cash</p>
              </div>
            </div>
            <form className="payment_card_method_form">
              <label className="payment_card_method_name">
                Cardholder Name
                <input
                  className="payment_form_name payment_card_method_input"
                  type="text"
                  name="user name"
                  placeholder="Levi Ackerman"
                />
              </label>
              <label className="payment_card_method_name">
                Card Number
                <input
                  className="payment_form_number payment_card_method_input"
                  type="number"
                  name="user number"
                  placeholder="2564 1421 0897 1244"
                />
              </label>
              <div className="payment_form_dates">
                <label className="payment_card_method_name">
                  Expiration Date
                  <input
                    className="payment_form_date payment_card_method_input"
                    type="number"
                    name="date"
                    placeholder="02/2022"
                  />
                </label>
                <label className="payment_card_method_name">
                  CVV
                  <input
                    className="payment_form_date payment_card_method_input"
                    type="text"
                    name="cvv"
                    placeholder="..."
                  />
                </label>
              </div>
              <div className="payment_form_orders">
                <label className="payment_card_method_name">
                  Order Type
                  <select
                    name="type select"
                    className="payment_form_orders_select payment_card_method_input"
                  >
                    <option selected value="1">
                      Dine In
                    </option>
                    <option value="2">Dine In</option>
                    <option value="3">Dine In</option>
                  </select>
                </label>
                <label className="payment_card_method_name">
                  Table no.
                  <input
                    type="number"
                    name="type number"
                    className="payment_form_orders_number payment_card_method_input"
                    placeholder="140"
                  />
                </label>
              </div>
            </form>
          </div>
          <div className="payment_card_buttons">
            <button
              onClick={() => setModal(false)}
              className="payment_card_buttons_one"
            >
              Cancel
            </button>
            <button
              onClick={() => setModal(false)}
              className="payment_card_buttons_two"
            >
              Confirm Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
