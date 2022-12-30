import "./orders.scss";
import OrderFood1 from "../../assets/images/order_img1.png";
import { TrashIcon1, TrashIcon2 } from "../../assets/images/icons/icons";
import { Link } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";
import { useState } from "react";
import { OrdersHead } from "../OrdersHeader/OrdersHead";
export const Orders = () => {
  const [addModal, setAddModal] = useState(false);
  return (
    <>
      <div className="orders_box">
        <OrdersHead />
        <div className="order_main">
          <div className="order_main_card">
            <div className="d-flex align-items-center justify-content-between">
              <div className="order_main_card_info">
                <img src={OrderFood1} alt="food" />
                <div className="order_main_info_text">
                  <h5 className="order_info_title">Spicy seasoned sea...</h5>
                  <p className="order_info_desc">$ 2.29</p>
                </div>
              </div>
              <div className="order_main_card_price d-flex align-items-center">
                <input
                  className="order_main_card_price_input"
                  type="text"
                  placeholder="2"
                />
                <p className="order_main_card_price_desc">$ 4,58</p>
              </div>
            </div>
            <div className="order_main_card_comment">
              <input
                className="order_main_card_comment_input"
                type="text"
                name="comment"
                placeholder="Order Note..."
              />
              <button className="order_main_card_comment_icon">
                <TrashIcon1 />
              </button>
            </div>
          </div>
          <div className="order_main_card">
            <div className="d-flex align-items-center justify-content-between">
              <div className="order_main_card_info">
                <img src={OrderFood1} alt="food" />
                <div className="order_main_info_text">
                  <h5 className="order_info_title">Spicy seasoned sea...</h5>
                  <p className="order_info_desc">$ 2.29</p>
                </div>
              </div>
              <div className="order_main_card_price d-flex align-items-center">
                <input
                  className="order_main_card_price_input"
                  type="text"
                  placeholder="2"
                />
                <p className="order_main_card_price_desc">$ 4,58</p>
              </div>
            </div>
            <div className="order_main_card_comment">
              <input
                className="order_main_card_comment_input"
                type="text"
                name="comment"
                placeholder="Order Note..."
              />
              <button className="order_main_card_comment_icon comment_btn">
                <TrashIcon2 />
              </button>
            </div>
          </div>
          <div className="order_main_card">
            <div className="d-flex align-items-center justify-content-between">
              <div className="order_main_card_info">
                <img src={OrderFood1} alt="food" />
                <div className="order_main_info_text">
                  <h5 className="order_info_title">Spicy seasoned sea...</h5>
                  <p className="order_info_desc">$ 2.29</p>
                </div>
              </div>
              <div className="order_main_card_price d-flex align-items-center">
                <input
                  className="order_main_card_price_input"
                  type="text"
                  placeholder="2"
                />
                <p className="order_main_card_price_desc">$ 4,58</p>
              </div>
            </div>
            <div className="order_main_card_comment">
              <input
                className="order_main_card_comment_input"
                type="text"
                name="comment"
                placeholder="Order Note..."
              />
              <button className="order_main_card_comment_icon comment_btn">
                <TrashIcon2 />
              </button>
            </div>
          </div>
          <div className="order_main_card">
            <div className="d-flex align-items-center justify-content-between">
              <div className="order_main_card_info">
                <img src={OrderFood1} alt="food" />
                <div className="order_main_info_text">
                  <h5 className="order_info_title">Spicy seasoned sea...</h5>
                  <p className="order_info_desc">$ 2.29</p>
                </div>
              </div>
              <div className="order_main_card_price d-flex align-items-center">
                <input
                  className="order_main_card_price_input"
                  type="text"
                  placeholder="2"
                />
                <p className="order_main_card_price_desc">$ 4,58</p>
              </div>
            </div>
            <div className="order_main_card_comment">
              <input
                className="order_main_card_comment_input"
                type="text"
                name="comment"
                placeholder="Order Note..."
              />
              <button className="order_main_card_comment_icon comment_btn">
                <TrashIcon2 />
              </button>
            </div>
          </div>
          <div className="order_main_card">
            <div className="d-flex align-items-center justify-content-between">
              <div className="order_main_card_info">
                <img src={OrderFood1} alt="food" />
                <div className="order_main_info_text">
                  <h5 className="order_info_title">Spicy seasoned sea...</h5>
                  <p className="order_info_desc">$ 2.29</p>
                </div>
              </div>
              <div className="order_main_card_price d-flex align-items-center">
                <input
                  className="order_main_card_price_input"
                  type="text"
                  placeholder="2"
                />
                <p className="order_main_card_price_desc">$ 4,58</p>
              </div>
            </div>
            <div className="order_main_card_comment">
              <input
                className="order_main_card_comment_input"
                type="text"
                name="comment"
                placeholder="Order Note..."
              />
              <button className="order_main_card_comment_icon comment_btn">
                <TrashIcon2 />
              </button>
            </div>
          </div>
          <div className="order_main_card">
            <div className="d-flex align-items-center justify-content-between">
              <div className="order_main_card_info">
                <img src={OrderFood1} alt="food" />
                <div className="order_main_info_text">
                  <h5 className="order_info_title">Spicy seasoned sea...</h5>
                  <p className="order_info_desc">$ 2.29</p>
                </div>
              </div>
              <div className="order_main_card_price d-flex align-items-center">
                <input
                  className="order_main_card_price_input"
                  type="text"
                  placeholder="2"
                />
                <p className="order_main_card_price_desc">$ 4,58</p>
              </div>
            </div>
            <div className="order_main_card_comment">
              <input
                className="order_main_card_comment_input"
                type="text"
                name="comment"
                placeholder="Order Note..."
              />
              <button className="order_main_card_comment_icon comment_btn">
                <TrashIcon2 />
              </button>
            </div>
          </div>
          <div className="order_main_card">
            <div className="d-flex align-items-center justify-content-between">
              <div className="order_main_card_info">
                <img src={OrderFood1} alt="food" />
                <div className="order_main_info_text">
                  <h5 className="order_info_title">Spicy seasoned sea...</h5>
                  <p className="order_info_desc">$ 2.29</p>
                </div>
              </div>
              <div className="order_main_card_price d-flex align-items-center">
                <input
                  className="order_main_card_price_input"
                  type="text"
                  placeholder="2"
                />
                <p className="order_main_card_price_desc">$ 4,58</p>
              </div>
            </div>
            <div className="order_main_card_comment">
              <input
                className="order_main_card_comment_input"
                type="text"
                name="comment"
                placeholder="Order Note..."
              />
              <button className="order_main_card_comment_icon comment_btn">
                <TrashIcon2 />
              </button>
            </div>
          </div>
          <div className="order_main_card">
            <div className="d-flex align-items-center justify-content-between">
              <div className="order_main_card_info">
                <img src={OrderFood1} alt="food" />
                <div className="order_main_info_text">
                  <h5 className="order_info_title">Spicy seasoned sea...</h5>
                  <p className="order_info_desc">$ 2.29</p>
                </div>
              </div>
              <div className="order_main_card_price d-flex align-items-center">
                <input
                  className="order_main_card_price_input"
                  type="text"
                  placeholder="2"
                />
                <p className="order_main_card_price_desc">$ 4,58</p>
              </div>
            </div>
            <div className="order_main_card_comment">
              <input
                className="order_main_card_comment_input"
                type="text"
                name="comment"
                placeholder="Order Note..."
              />
              <button className="order_main_card_comment_icon comment_btn">
                <TrashIcon2 />
              </button>
            </div>
          </div>
          <div className="order_main_card">
            <div className="d-flex align-items-center justify-content-between">
              <div className="order_main_card_info">
                <img src={OrderFood1} alt="food" />
                <div className="order_main_info_text">
                  <h5 className="order_info_title">Spicy seasoned sea...</h5>
                  <p className="order_info_desc">$ 2.29</p>
                </div>
              </div>
              <div className="order_main_card_price d-flex align-items-center">
                <input
                  className="order_main_card_price_input"
                  type="text"
                  placeholder="2"
                />
                <p className="order_main_card_price_desc">$ 4,58</p>
              </div>
            </div>
            <div className="order_main_card_comment">
              <input
                className="order_main_card_comment_input"
                type="text"
                name="comment"
                placeholder="Order Note..."
              />
              <button className="order_main_card_comment_icon comment_btn">
                <TrashIcon2 />
              </button>
            </div>
          </div>
          <div className="order_bottom_card">
            <div className="order_bottom_card_item">
              <p className="order_bottom_card_item_text_one">Discount</p>
              <p className="order_bottom_card_item_text_two">$0</p>
            </div>
            <div className="order_bottom_card_item">
              <p className="order_bottom_card_item_text_one">Sub total</p>
              <p className="order_bottom_card_item_text_two"> $ 21,03</p>
            </div>
            <div className="order_bottom_card_link_box">
              <button
                onClick={() => setAddModal(true)}
                type="button"
                className="order_bottom_card_link offset-1"
              >
                Continue to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
      {addModal ? <Modal modal={Modal} setModal={setAddModal} /> : ""}
    </>
  );
};
