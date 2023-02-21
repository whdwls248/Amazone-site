import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment_container">
        <Link to={"/checkout"} className="payment_to_checkout">
          <h1>장바구니로 돌아가기</h1>
        </Link>
        <h3 className="payment_to_checkout">
          {basket?.length} 개의 상품 목록이 존재합니다.
        </h3>

        <div className="payment_section">
          <div className="payment_title">
            <h3> 배달 받을 곳 </h3>
          </div>

          <div className="payment_address">
            <p>{user?.email}님의 주소</p>
            <p>성남시</p>
            <p>분당구</p>
          </div>

          <div className="payment_section">
            <div className="payment_title">
              <h3> 리뷰 와 배달 </h3>
            </div>
            <div className="payment_items">
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>

          <div className="payment_section">
            <div className="payment_title">
              <h3> 결제 </h3>
            </div>

            <div className="payment_details"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
