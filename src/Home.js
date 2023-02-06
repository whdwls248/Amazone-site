import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg"
          alt="home"
        />

        <div className="home_row">
          <Product
            id="1264"
            title="제품1"
            price={3000}
            image="https://en.pimg.jp/024/292/158/1/24292158.jpg"
            rating={2}
          />
          <Product
            id="3246"
            title="제품1"
            price={3000}
            image="https://en.pimg.jp/024/292/158/1/24292158.jpg"
            rating={2}
          />
        </div>

        <div className="home_row">
          <Product
            id="1956"
            title="제품1"
            price={3000}
            image="https://en.pimg.jp/024/292/158/1/24292158.jpg"
            rating={2}
          />
          <Product
            id="9874"
            title="제품1"
            price={3000}
            image="https://en.pimg.jp/024/292/158/1/24292158.jpg"
            rating={2}
          />
          <Product
            id="3456"
            title="제품1"
            price={3000}
            image="https://en.pimg.jp/024/292/158/1/24292158.jpg"
            rating={2}
          />
        </div>

        <div className="home_row">
          <Product
            id="7835"
            title="제품1"
            price={3000}
            image="https://en.pimg.jp/024/292/158/1/24292158.jpg"
            rating={2}
          />
          <Product
            id="9641"
            title="제품1"
            price={3000}
            image="https://en.pimg.jp/024/292/158/1/24292158.jpg"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
