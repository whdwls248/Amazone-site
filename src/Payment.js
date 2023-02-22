import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { CurrencyFormat } from "react-currency-format";
import { getBasketTotal } from "./Reducer";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "./axios";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        card: elements.getElement(CardElement),
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        navigate("/order", { replace: true });
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });

      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

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

            <div className="payment_details">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />

                <div className="payment_priceContainer">
                  <CurrencyFormat
                    renderText={(value) => <h3> 총액 : {value} 원</h3>}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₩"}
                  />

                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>결제 중...</p> : "결제하기"}</span>
                  </button>
                </div>
                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
