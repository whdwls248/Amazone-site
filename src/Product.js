import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  const ratingArr = Array(rating).fill();

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>가격</small>
          <strong>{price}</strong>
          <small>원</small>
        </p>

        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((el, idx) => (
              <p key={id + idx}>★</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product" />
      <button>장바구니에 담기</button>
    </div>
  );
}

export default Product;
