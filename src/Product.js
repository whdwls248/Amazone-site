import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>제품1</p>
        <p className="product_price">
          <small>가격</small>
          <strong>10,000</strong>
          <small>원</small>
        </p>

        <div className="product_rating">
          <p>★</p>
          <p>★</p>
          <p>★</p>
          <p>★</p>
        </div>
      </div>
      <img src="https://en.pimg.jp/024/292/158/1/24292158.jpg" alt="product" />
      <button>장바구니에 담기</button>
    </div>
  );
}

export default Product;
