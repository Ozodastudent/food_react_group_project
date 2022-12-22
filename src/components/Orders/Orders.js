import "./orders.scss";
import OrderFood1 from "../../assets/images/order_img1.png";
import { TrashIcon1 } from "../../assets/images/icons/icons";
export const Orders = () => {
  return (
    <div className="orders_box">
      <div className="order_top">
        <h3 className="order_top_title">Orders #34562</h3>
        <ul className="order_top_links">
          <li className="order_link_item order_link_item_active">
            <a href="/" className="order_link order_link_active">
              Dine In
            </a>
          </li>
          <li className="order_link_item">
            <a href="/" className="order_link">
              To Go
            </a>
          </li>
          <li className="order_link_item">
            <a href="/" className="order_link">
              Delivery
            </a>
          </li>
        </ul>
        <div className="order_top_texts">
          <p className="order_text">Item</p>
          <div className="order_text_middle">
            <p className="order_text me-4">Qty</p>
            <p className="order_text">Price</p>
          </div>
        </div>
      </div>
      <div className="order_main">
        <div className="order_main_card1">
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
        <div className="order_main_card2">
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
        <div className="order_main_card3">
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
      </div>
    </div>
  );
};
